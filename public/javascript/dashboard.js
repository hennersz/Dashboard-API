'use strict';
/* eslint no-undef: 0 */
/* eslint no-unused-vars: 0 */

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var DepartureBoard = function (_React$Component) {
  _inherits(DepartureBoard, _React$Component);

  function DepartureBoard() {
    _classCallCheck(this, DepartureBoard);

    return _possibleConstructorReturn(this, (DepartureBoard.__proto__ || Object.getPrototypeOf(DepartureBoard)).apply(this, arguments));
  }

  _createClass(DepartureBoard, [{
    key: 'render',

    //station names comes from stationNames.js file
    value: function render() {
      var _this2 = this;

      return React.createElement(
        'div',
        { className: 'board' },
        React.createElement(
          'div',
          { className: 'centered' },
          React.createElement(
            'h4',
            null,
            stationNames[this.props.dep],
            ' \u2192 ',
            stationNames[this.props.dest]
          )
        ),
        this.props.services.map(function (service, i) {
          return React.createElement(
            'div',
            { key: i },
            React.createElement(
              'div',
              { className: 'service flexRow' },
              React.createElement(
                'div',
                { className: 'padded flex1-3' },
                service.delay === 'On time' ? service.departureTime : service.delay
              ),
              React.createElement(
                'div',
                { className: 'padded flex1-3' },
                service.platform ? service.platform : 'Platform Unavailable'
              ),
              React.createElement(
                'div',
                { className: 'padded flex1-3' },
                service.arrivalDelay === 'On time' ? service.arrivalTime : service.arrivalDelay
              )
            ),
            i !== _this2.props.services.length - 1 ? React.createElement('hr', null) : null
          );
        })
      );
    }
  }]);

  return DepartureBoard;
}(React.Component);

var DepartureBoardContainer = function (_React$Component2) {
  _inherits(DepartureBoardContainer, _React$Component2);

  function DepartureBoardContainer(props) {
    _classCallCheck(this, DepartureBoardContainer);

    var _this3 = _possibleConstructorReturn(this, (DepartureBoardContainer.__proto__ || Object.getPrototypeOf(DepartureBoardContainer)).call(this, props));

    _this3.state = {
      journeys: window.serverData
    };
    return _this3;
  }

  _createClass(DepartureBoardContainer, [{
    key: 'render',
    value: function render() {
      return React.createElement(
        'div',
        { className: 'flexRow', style: { alignItems: 'flex-start', flexWrap: 'wrap' } },
        this.state.journeys.map(function (journey, i) {
          return React.createElement(
            'div',
            {
              key: i,
              className: 'flex1-2',
              style: { minWidth: '365px' }
            },
            React.createElement(DepartureBoard, {
              services: journey.services,
              dep: journey.dep,
              dest: journey.dest
            })
          );
        })
      );
    }
  }]);

  return DepartureBoardContainer;
}(React.Component);

var domContainer = document.querySelector('#mountPoint');
ReactDOM.render(React.createElement(DepartureBoardContainer, null), domContainer);