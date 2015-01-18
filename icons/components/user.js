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
    return <path d="M 45.00,48.00L3.00,48.00 c0.00-5.427, 6.348-9.96, 15.00-11.442l0.00,-2.22 C 14.43,32.256, 12.00,28.431, 12.00,24.00L12.00,23.697 C 10.26,23.073, 9.00,21.453, 9.00,19.50c0.00-1.953, 1.26-3.573, 3.00-4.197L12.00,15.00 c0.00-6.627, 5.373-12.00, 12.00-12.00s 12.00,5.373, 12.00,12.00l0.00,0.303 c 1.74,0.624, 3.00,2.244, 3.00,4.197c0.00,1.953-1.26,3.573-3.00,4.197L36.00,24.00 c0.00,4.431-2.43,8.256-6.00,10.335l0.00,2.22 C 38.655,38.04, 45.00,42.573, 45.00,48.00z" >;
  }
});

module.exports = SwitchOn;
