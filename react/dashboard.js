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
        <div className="flexRow">
          <div className="flex1-3">
            <h4>Departure Time</h4>
          </div>
          <div className="flex1-3">
            <h4>Platform</h4>
          </div>
          <div className="flex1-3">
            <h4>Arrival Time</h4>
          </div>
        </div>
        <div style={{height: '70%', overflow: 'scroll'}}>
          {this.props.services.map((service, i) => (
            <div key={i}>
              <div className='service flexRow'>
                <div className='padded flex1-3'>
                  { service.departureTime }
                  <br/>
                  {service.delay === 'On time' ? null : `(${service.delay})`}
                </div>
                <div className='padded flex1-3'>{service.platform ? service.platform : 'Platform Unavailable'}</div>

                <div className='padded flex1-3'>
                  { service.arrivalTime }
                  <br/>
                  {service.arrivalDelay === 'On time' ? null : `(${service.arrivalDelay})`}
                </div>
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
        <div className="flex1-2">
          <TimeWidget/>
        </div>
      </div>
    );
  }
}

class TimeWidget extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      timeNow: moment().format('LTS'),
      dateNow: moment().format('dddd Do MMMM YYYY')
    };
  }

  updateDateTime(){
    this.setState({
      timeNow: moment().format('LTS'),
      dateNow: moment().format('dddd Do MMMM YYYY')
    });
  }

  componentDidMount(){
    this.intervalId = setInterval(this.updateDateTime.bind(this), 1000);
  }

  componentWillUnmount(){
    clearInterval(this.intervalId);
  }

  render() {
    return <div className="board">
      {this.state.timeNow}
      <br/>
      {this.state.dateNow}
    </div>;
  }
}

let domContainer = document.querySelector('#mountPoint');
ReactDOM.render(<DepartureBoardContainer />, domContainer);