'use strict';

var React = require('react/addons');

var SwitchOn = React.createClass({
  propTypes: {
    size: React.PropTypes.number,
    className: React.PropTypes.string
  },

  getDefaultProps: function() {
    return {
      size: 48,
      className: "reacticon"
    };
  },

  render: function() {
    return (
      <svg version="1.1"
        width={this.props.size + 'px'}
        height={this.props.size + 'px'}
        className={this.props.className}
        viewBox="0 0 48 48">
        {this.renderGraphic()}
      </svg>
    );
  },

  renderGraphic: function() {
    return <path d="M 46.242,10.245l-4.467,4.467l-8.616-8.352l 4.599-4.599 c 2.34-2.343, 6.141-2.343, 8.484,0.00C 48.585,4.101, 48.585,7.899, 46.242,10.245z M 39.159,17.325l-18.465,18.42L 9.00,39.00l 3.207-11.739l 18.363-18.315 L 39.159,17.325zM 46.242,10.245l-4.467,4.467l-8.616-8.352l 4.599-4.599 c 2.34-2.343, 6.141-2.343, 8.484,0.00C 48.585,4.101, 48.585,7.899, 46.242,10.245z M 39.159,17.325l-18.465,18.42L 9.00,39.00l 3.204-11.739l 18.363-18.315 L 39.159,17.325zM 42.00,22.968 L 48.00,16.971 L 48.00,39.00 C 48.00,43.971 43.971,48.00 39.00,48.00 L 9.00,48.00 C 4.029,48.00 0.00,43.971 0.00,39.00 L 0.00,9.00 C 0.00,4.029 4.029,0.00 9.00,0.00 L 31.026,0.00 L 25.014,6.00 L 9.00,6.00 C 7.344,6.00 6.00,7.344 6.00,9.00 L 6.00,39.00 C 6.00,40.659 7.344,42.00 9.00,42.00 L 39.00,42.00 C 40.659,42.00 42.00,40.659 42.00,39.00 L 42.00,22.968 Z" >;
  }
});

module.exports = SwitchOn;
