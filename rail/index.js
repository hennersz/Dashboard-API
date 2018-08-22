var Rail = require('national-rail-darwin');
require('dotenv').config();
var rail = new Rail(process.env.DARWIN_TOKEN);

function findValidServices(services, dest){
  var validServices = [];

  //go through each service
  for(var service of services){
    //go through the next stops
    for(var stop of service.subsequentCallingPoints){
      //if train stops at dest add to list
      if(stop.crs === dest){
        validServices.push(service);
        break;
      }
    }
  }

  return validServices;
}

//Finds all trains leaving departure station that visit destination station.
//Gives list with departure time, delay and platform
module.exports.findDeparturesTo = (dep, dest)=>{
  //dep: Departure station CRS code
  //dest: Destination station CRS code
  return new Promise((resolve, reject)=>{
    rail.getDepartureBoardWithDetails(dep, {}, function(err, result){
      if(err)
        reject(err);
      else {
        var services = findValidServices(result.trainServices, dest);
        resolve({dep, dest, services});
      }
    });
  });
};