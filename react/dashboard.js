'use strict';
/* eslint no-undef: 0 */
/* eslint no-unused-vars: 0 */


class DepartureBoard extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      serviceSelector: 0
    };

    this.increment = this.increment.bind(this);
    this.decrement = this.decrement.bind(this);
  }

  increment(){
    this.setState((state, props)=>{
      if (state.serviceSelector < props.journeys.length - 1)
        return {serviceSelector: state.serviceSelector + 1};
      else
        return {serviceSelector: state.serviceSelector};
    });
  }

  decrement(){
    this.setState((state)=>{
      if (state.serviceSelector > 0)
        return {serviceSelector: state.serviceSelector - 1};
      else
        return {serviceSelector: 0};
    });
  }
  //station names comes from stationNames.js file
  render() {
    const journey = this.props.journeys[this.state.serviceSelector];
    const departureStation = stationNames[journey.dep];
    const destinationStation = stationNames[journey.dest];
    const services = journey.services;

    return (
      <div className='board flexColumn' style={{height: '500px', justifyContent:'flex-start'}}>
        <div className='centered'>
          <div className='flexRow'>
            <button 
              style={{height: '60px', width: '60px', padding:0}}
              onClick={this.decrement}
             >{'<-'}</button>
            <h4 style={{maxWidth:'55%'}}>{departureStation} → {destinationStation}</h4>
            <button 
              style={{height: '60px', width: '60px', padding: 0}}
              onClick={this.increment}
             >{'->'}</button>
          </div>
          <div className="flexRow" >
            <div className="flex1-3"><h4>Departure Time</h4></div>
            <div className="flex1-3"><h4>Platform</h4></div>
            <div className="flex1-3"><h4>Arrival Time</h4></div>
          </div>
        </div>
        <div style={{overflow: 'scroll'}}>
          {services.map((service, i) => (
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
              {i !== services.length - 1 ? <hr /> : null}
            </div>
          ))}
        </div>
      </div>
    );
  }
}

class WidgetContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      journeys: window.serverData

    };
  }

  render(){
    return (
      <div className='flexRow' style={{alignItems: 'flex-start', flexWrap: 'wrap'}}>
        <div 
          className="flex1-2"
          style={{minWidth: '405px'}}
        >
          <TimeWidget/>
        </div>
        <div 
          className="flex1-2"
          style={{minWidth: '405px'}}
        >
          <DepartureBoard
            journeys={this.state.journeys}
          />
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
    return <div className="board" 
      style={{
        display: 'flex',
        textAlign: 'center',
        alignItems: 'center'
      }}
    >
      <div>
        <h2>{this.state.timeNow}</h2>
        <h2>{this.state.dateNow}</h2>
      </div>
    </div>;
  }
}

let domContainer = document.querySelector('#mountPoint');
ReactDOM.render(<WidgetContainer />, domContainer);