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
    return <path d="M 39.00,48.00L9.00,48.00 c-4.971,0.00-9.00-4.032-9.00-9.00L0.00,9.00 c0.00-4.971, 4.029-9.00, 9.00-9.00l30.00,0.00 c 4.971,0.00, 9.00,4.029, 9.00,9.00l0.00,30.00 C 48.00,43.968, 43.971,48.00, 39.00,48.00z M 42.00,9.00c0.00-1.656-1.341-3.00-3.00-3.00L9.00,6.00 C 7.344,6.00, 6.00,7.344, 6.00,9.00l0.00,27.00 l36.00,0.00 L42.00,9.00 z M 19.668,22.134 C 18.639,21.057, 18.00,19.608, 18.00,18.00L18.00,15.00 c0.00-3.312, 2.688-6.00, 6.00-6.00s 6.00,2.688, 6.00,6.00l0.00,3.00 c0.00,1.608-0.639,3.057-1.668,4.134C 30.687,23.436, 32.541,25.749, 33.00,28.50 l0.00,0.00c0.00,2.484-2.016,4.50-4.50,4.50l-9.00,0.00 C 17.013,33.00, 15.00,30.984, 15.00,28.50l0.00,0.00C 15.465,25.749, 17.316,23.436, 19.668,22.134z" >;
  }
});

module.exports = SwitchOn;
