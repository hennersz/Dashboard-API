'use strict';
/* eslint no-undef: 0 */

/* eslint no-unused-vars: 0 */

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var DepartureBoard =
/*#__PURE__*/
function (_React$Component) {
  _inherits(DepartureBoard, _React$Component);

  function DepartureBoard() {
    _classCallCheck(this, DepartureBoard);

    return _possibleConstructorReturn(this, _getPrototypeOf(DepartureBoard).apply(this, arguments));
  }

  _createClass(DepartureBoard, [{
    key: "render",
    //station names comes from stationNames.js file
    value: function render() {
      var _this = this;

      return React.createElement("div", {
        className: "board"
      }, React.createElement("div", {
        className: "centered"
      }, React.createElement("h4", null, stationNames[this.props.dep], " \u2192 ", stationNames[this.props.dest])), React.createElement("div", {
        style: {
          height: '70%',
          overflow: 'scroll'
        }
      }, this.props.services.map(function (service, i) {
        return React.createElement("div", {
          key: i
        }, React.createElement("div", {
          className: "service flexRow"
        }, React.createElement("div", {
          className: "padded flex1-3"
        }, service.delay === 'On time' ? service.departureTime : service.delay), React.createElement("div", {
          className: "padded flex1-3"
        }, service.platform ? service.platform : 'Platform Unavailable'), React.createElement("div", {
          className: "padded flex1-3"
        }, service.arrivalDelay === 'On time' ? service.arrivalTime : service.arrivalDelay)), i !== _this.props.services.length - 1 ? React.createElement("hr", null) : null);
      })));
    }
  }]);

  return DepartureBoard;
}(React.Component);

var DepartureBoardContainer =
/*#__PURE__*/
function (_React$Component2) {
  _inherits(DepartureBoardContainer, _React$Component2);

  function DepartureBoardContainer(props) {
    var _this2;

    _classCallCheck(this, DepartureBoardContainer);

    _this2 = _possibleConstructorReturn(this, _getPrototypeOf(DepartureBoardContainer).call(this, props));
    _this2.state = {
      journeys: window.serverData
    };
    return _this2;
  }

  _createClass(DepartureBoardContainer, [{
    key: "render",
    value: function render() {
      return React.createElement("div", {
        className: "flexRow",
        style: {
          alignItems: 'flex-start',
          flexWrap: 'wrap'
        }
      }, this.state.journeys.map(function (journey, i) {
        return React.createElement("div", {
          key: i,
          className: "flex1-2",
          style: {
            minWidth: '365px'
          }
        }, React.createElement(DepartureBoard, {
          services: journey.services,
          dep: journey.dep,
          dest: journey.dest
        }));
      }));
    }
  }]);

  return DepartureBoardContainer;
}(React.Component);

var domContainer = document.querySelector('#mountPoint');
ReactDOM.render(React.createElement(DepartureBoardContainer, null), domContainer);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3JlYWN0L2Rhc2hib2FyZC5qcyJdLCJuYW1lcyI6WyJEZXBhcnR1cmVCb2FyZCIsInN0YXRpb25OYW1lcyIsInByb3BzIiwiZGVwIiwiZGVzdCIsImhlaWdodCIsIm92ZXJmbG93Iiwic2VydmljZXMiLCJtYXAiLCJzZXJ2aWNlIiwiaSIsImRlbGF5IiwiZGVwYXJ0dXJlVGltZSIsInBsYXRmb3JtIiwiYXJyaXZhbERlbGF5IiwiYXJyaXZhbFRpbWUiLCJsZW5ndGgiLCJSZWFjdCIsIkNvbXBvbmVudCIsIkRlcGFydHVyZUJvYXJkQ29udGFpbmVyIiwic3RhdGUiLCJqb3VybmV5cyIsIndpbmRvdyIsInNlcnZlckRhdGEiLCJhbGlnbkl0ZW1zIiwiZmxleFdyYXAiLCJqb3VybmV5IiwibWluV2lkdGgiLCJkb21Db250YWluZXIiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJSZWFjdERPTSIsInJlbmRlciJdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTs7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFHTUEsYzs7Ozs7Ozs7Ozs7OztBQUNKOzZCQUNTO0FBQUE7O0FBQ1AsYUFDRTtBQUFLLFFBQUEsU0FBUyxFQUFDO0FBQWYsU0FDRTtBQUFLLFFBQUEsU0FBUyxFQUFDO0FBQWYsU0FDRSxnQ0FBS0MsWUFBWSxDQUFDLEtBQUtDLEtBQUwsQ0FBV0MsR0FBWixDQUFqQixjQUFzQ0YsWUFBWSxDQUFDLEtBQUtDLEtBQUwsQ0FBV0UsSUFBWixDQUFsRCxDQURGLENBREYsRUFJRTtBQUFLLFFBQUEsS0FBSyxFQUFFO0FBQUNDLFVBQUFBLE1BQU0sRUFBRSxLQUFUO0FBQWdCQyxVQUFBQSxRQUFRLEVBQUU7QUFBMUI7QUFBWixTQUNHLEtBQUtKLEtBQUwsQ0FBV0ssUUFBWCxDQUFvQkMsR0FBcEIsQ0FBd0IsVUFBQ0MsT0FBRCxFQUFVQyxDQUFWO0FBQUEsZUFDdkI7QUFBSyxVQUFBLEdBQUcsRUFBRUE7QUFBVixXQUNFO0FBQUssVUFBQSxTQUFTLEVBQUM7QUFBZixXQUNFO0FBQUssVUFBQSxTQUFTLEVBQUM7QUFBZixXQUFpQ0QsT0FBTyxDQUFDRSxLQUFSLEtBQWtCLFNBQWxCLEdBQThCRixPQUFPLENBQUNHLGFBQXRDLEdBQXNESCxPQUFPLENBQUNFLEtBQS9GLENBREYsRUFFRTtBQUFLLFVBQUEsU0FBUyxFQUFDO0FBQWYsV0FBaUNGLE9BQU8sQ0FBQ0ksUUFBUixHQUFtQkosT0FBTyxDQUFDSSxRQUEzQixHQUFzQyxzQkFBdkUsQ0FGRixFQUlFO0FBQUssVUFBQSxTQUFTLEVBQUM7QUFBZixXQUFpQ0osT0FBTyxDQUFDSyxZQUFSLEtBQXlCLFNBQXpCLEdBQXFDTCxPQUFPLENBQUNNLFdBQTdDLEdBQTJETixPQUFPLENBQUNLLFlBQXBHLENBSkYsQ0FERixFQU9HSixDQUFDLEtBQUssS0FBSSxDQUFDUixLQUFMLENBQVdLLFFBQVgsQ0FBb0JTLE1BQXBCLEdBQTZCLENBQW5DLEdBQXVDLCtCQUF2QyxHQUFnRCxJQVBuRCxDQUR1QjtBQUFBLE9BQXhCLENBREgsQ0FKRixDQURGO0FBb0JEOzs7O0VBdkIwQkMsS0FBSyxDQUFDQyxTOztJQTBCN0JDLHVCOzs7OztBQUNKLG1DQUFZakIsS0FBWixFQUFtQjtBQUFBOztBQUFBOztBQUNqQixrR0FBTUEsS0FBTjtBQUNBLFdBQUtrQixLQUFMLEdBQWE7QUFDWEMsTUFBQUEsUUFBUSxFQUFFQyxNQUFNLENBQUNDO0FBRE4sS0FBYjtBQUZpQjtBQUtsQjs7Ozs2QkFFTztBQUNOLGFBQ0U7QUFBSyxRQUFBLFNBQVMsRUFBQyxTQUFmO0FBQXlCLFFBQUEsS0FBSyxFQUFFO0FBQUNDLFVBQUFBLFVBQVUsRUFBRSxZQUFiO0FBQTJCQyxVQUFBQSxRQUFRLEVBQUU7QUFBckM7QUFBaEMsU0FDRyxLQUFLTCxLQUFMLENBQVdDLFFBQVgsQ0FBb0JiLEdBQXBCLENBQXdCLFVBQUNrQixPQUFELEVBQVVoQixDQUFWO0FBQUEsZUFDdkI7QUFDRSxVQUFBLEdBQUcsRUFBRUEsQ0FEUDtBQUVFLFVBQUEsU0FBUyxFQUFDLFNBRlo7QUFHRSxVQUFBLEtBQUssRUFBRTtBQUFDaUIsWUFBQUEsUUFBUSxFQUFFO0FBQVg7QUFIVCxXQUtFLG9CQUFDLGNBQUQ7QUFDRSxVQUFBLFFBQVEsRUFBRUQsT0FBTyxDQUFDbkIsUUFEcEI7QUFFRSxVQUFBLEdBQUcsRUFBRW1CLE9BQU8sQ0FBQ3ZCLEdBRmY7QUFHRSxVQUFBLElBQUksRUFBRXVCLE9BQU8sQ0FBQ3RCO0FBSGhCLFVBTEYsQ0FEdUI7QUFBQSxPQUF4QixDQURILENBREY7QUFpQkQ7Ozs7RUExQm1DYSxLQUFLLENBQUNDLFM7O0FBNkI1QyxJQUFJVSxZQUFZLEdBQUdDLFFBQVEsQ0FBQ0MsYUFBVCxDQUF1QixhQUF2QixDQUFuQjtBQUNBQyxRQUFRLENBQUNDLE1BQVQsQ0FBZ0Isb0JBQUMsdUJBQUQsT0FBaEIsRUFBNkNKLFlBQTdDIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuLyogZXNsaW50IG5vLXVuZGVmOiAwICovXG4vKiBlc2xpbnQgbm8tdW51c2VkLXZhcnM6IDAgKi9cblxuXG5jbGFzcyBEZXBhcnR1cmVCb2FyZCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIC8vc3RhdGlvbiBuYW1lcyBjb21lcyBmcm9tIHN0YXRpb25OYW1lcy5qcyBmaWxlXG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9J2JvYXJkJz5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J2NlbnRlcmVkJz5cbiAgICAgICAgICA8aDQ+e3N0YXRpb25OYW1lc1t0aGlzLnByb3BzLmRlcF19IOKGkiB7c3RhdGlvbk5hbWVzW3RoaXMucHJvcHMuZGVzdF19PC9oND5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgc3R5bGU9e3toZWlnaHQ6ICc3MCUnLCBvdmVyZmxvdzogJ3Njcm9sbCd9fT5cbiAgICAgICAgICB7dGhpcy5wcm9wcy5zZXJ2aWNlcy5tYXAoKHNlcnZpY2UsIGkpID0+IChcbiAgICAgICAgICAgIDxkaXYga2V5PXtpfT5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J3NlcnZpY2UgZmxleFJvdyc+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J3BhZGRlZCBmbGV4MS0zJz57c2VydmljZS5kZWxheSA9PT0gJ09uIHRpbWUnID8gc2VydmljZS5kZXBhcnR1cmVUaW1lIDogc2VydmljZS5kZWxheX08L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0ncGFkZGVkIGZsZXgxLTMnPntzZXJ2aWNlLnBsYXRmb3JtID8gc2VydmljZS5wbGF0Zm9ybSA6ICdQbGF0Zm9ybSBVbmF2YWlsYWJsZSd9PC9kaXY+XG5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0ncGFkZGVkIGZsZXgxLTMnPntzZXJ2aWNlLmFycml2YWxEZWxheSA9PT0gJ09uIHRpbWUnID8gc2VydmljZS5hcnJpdmFsVGltZSA6IHNlcnZpY2UuYXJyaXZhbERlbGF5fTwvZGl2PlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAge2kgIT09IHRoaXMucHJvcHMuc2VydmljZXMubGVuZ3RoIC0gMSA/IDxociAvPiA6IG51bGx9XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICApKX1cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59XG5cbmNsYXNzIERlcGFydHVyZUJvYXJkQ29udGFpbmVyIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIGpvdXJuZXlzOiB3aW5kb3cuc2VydmVyRGF0YVxuICAgIH07XG4gIH1cblxuICByZW5kZXIoKXtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9J2ZsZXhSb3cnIHN0eWxlPXt7YWxpZ25JdGVtczogJ2ZsZXgtc3RhcnQnLCBmbGV4V3JhcDogJ3dyYXAnfX0+XG4gICAgICAgIHt0aGlzLnN0YXRlLmpvdXJuZXlzLm1hcCgoam91cm5leSwgaSkgPT4gKFxuICAgICAgICAgIDxkaXYgXG4gICAgICAgICAgICBrZXk9e2l9XG4gICAgICAgICAgICBjbGFzc05hbWU9XCJmbGV4MS0yXCJcbiAgICAgICAgICAgIHN0eWxlPXt7bWluV2lkdGg6ICczNjVweCd9fVxuICAgICAgICAgID5cbiAgICAgICAgICAgIDxEZXBhcnR1cmVCb2FyZFxuICAgICAgICAgICAgICBzZXJ2aWNlcz17am91cm5leS5zZXJ2aWNlc31cbiAgICAgICAgICAgICAgZGVwPXtqb3VybmV5LmRlcH1cbiAgICAgICAgICAgICAgZGVzdD17am91cm5leS5kZXN0fVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKSl9XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59XG5cbmxldCBkb21Db250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbW91bnRQb2ludCcpO1xuUmVhY3RET00ucmVuZGVyKDxEZXBhcnR1cmVCb2FyZENvbnRhaW5lciAvPiwgZG9tQ29udGFpbmVyKTsiXX0=