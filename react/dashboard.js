'use strict';
/* eslint no-undef: 0 */
/* eslint no-unused-vars: 0 */


class DepartureBoard extends React.Component {
  //station names comes from stationNames.js file
  render() {
    return (
      <div className='board'>
        <div className='centered'>
          <h4>{stationNames[this.props.dep]} → {stationNames[this.props.dest]}</h4>
        </div>
        <div style={{height: '70%', overflow: 'scroll'}}>
          {this.props.services.map((service, i) => (
            <div key={i}>
              <div className='service flexRow'>
                <div className='padded flex1-3'>{service.delay === 'On time' ? service.departureTime : service.delay}</div>
                <div className='padded flex1-3'>{service.platform ? service.platform : 'Platform Unavailable'}</div>

                <div className='padded flex1-3'>{service.arrivalDelay === 'On time' ? service.arrivalTime : service.arrivalDelay}</div>
              </div>
              {i !== this.props.services.length - 1 ? <hr /> : null}
            </div>
          ))}
        </div>
      </div>
    );
  }
}

class DepartureBoardContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      journeys: window.serverData
    };
  }

  render(){
    return (
      <div className='flexRow' style={{alignItems: 'flex-start', flexWrap: 'wrap'}}>
        {this.state.journeys.map((journey, i) => (
          <div 
            key={i}
            className="flex1-2"
            style={{minWidth: '365px'}}
          >
            <DepartureBoard
              services={journey.services}
              dep={journey.dep}
              dest={journey.dest}
            />
          </div>
        ))}
      </div>
    );
  }
}

let domContainer = document.querySelector('#mountPoint');
ReactDOM.render(<DepartureBoardContainer />, domContainer);