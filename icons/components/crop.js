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
    return <path d="M 42.00,48.00l0.00,-3.00 l3.00,0.00 l0.00,-3.00 l3.00,0.00 l0.00,6.00 L42.00,48.00 z M 45.00,3.00l-3.00,0.00 L42.00,0.00 l6.00,0.00 l0.00,6.00 l-3.00,0.00 L45.00,3.00 z M 42.00,42.00L6.00,42.00 L6.00,6.00 l36.00,0.00 L42.00,42.00 z M 36.00,12.00L12.00,12.00 l0.00,24.00 l24.00,0.00 L36.00,12.00 z M 18.00,15.00c 1.659,0.00, 3.00,1.341, 3.00,3.00S 19.659,21.00, 18.00,21.00S 15.00,19.659, 15.00,18.00S 16.341,15.00, 18.00,15.00z M 18.993,33.00L15.00,33.00 L15.00,28.509 C 16.344,30.123, 17.805,32.508, 18.993,33.00z M 33.00,22.032L33.00,33.00 L19.818,33.00 C 23.871,32.022, 28.827,17.226, 33.00,22.032z M 3.00,6.00L0.00,6.00 L0.00,0.00 l6.00,0.00 l0.00,3.00 L3.00,3.00 L3.00,6.00 z M 3.00,45.00l3.00,0.00 l0.00,3.00 L0.00,48.00 l0.00,-6.00 l3.00,0.00 L3.00,45.00 z" >;
  }
});

module.exports = SwitchOn;