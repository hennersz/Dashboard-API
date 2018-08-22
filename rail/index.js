var Rail = require('national-rail-darwin');
require('dotenv').config();
var rail = new Rail(process.env.DARWIN_TOKEN);

//Finds all trains leaving departure station that visit destination station.
//Gives list with departure time, delay and platform
module.exports.findServices = function(dep, dest, callback){
  //dep: Departure station CRS code
  //dest: Destination station CRS code
  rail.getDepartureBoardWithDetails(dep, {}, function(err, result){
    var services = [];
    //go through each service stopping at dep station
    for(var service of result.trainServices){
      //go through the next stops
      for(var stop of service.subsequentCallingPoints){
        //if train stops at dest add to list
        if(stop.crs === dest){
          console.log(service);
          services.push({
            std:service.std,
            etd: service.etd,
            platform: service.platform
          });
          break;
        }
      }
    }

    callback(services);
  });
};