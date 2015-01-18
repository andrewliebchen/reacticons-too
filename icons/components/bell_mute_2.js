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
    return <path d="M 16.515,8.031C 17.034,7.728, 17.562,7.437, 18.123,7.20 C 18.042,6.813, 18.00,6.411, 18.00,6.00c0.00-3.312, 2.688-6.00, 6.00-6.00s 6.00,2.688, 6.00,6.00c0.00,0.411-0.042,0.813-0.123,1.20C 35.238,9.489, 39.00,14.805, 39.00,21.00l0.00,4.038 C 40.887,26.46, 42.00,28.164, 42.00,30.00c0.00,0.924-0.357,1.80-0.879,2.637L 16.515,8.031z M 41.847,46.092L 1.908,6.153L 6.15,1.908L 46.089,41.85 L 41.847,46.092z M 9.00,25.038L9.00,21.00 c0.00-1.083, 0.153-2.127, 0.372-3.144l 20.598,20.598C 28.089,38.787, 26.103,39.00, 24.00,39.00c-9.939,0.00-18.00-4.029-18.00-9.00 C 6.00,28.164, 7.113,26.46, 9.00,25.038z M 24.00,42.00c 2.082,0.00, 4.056-0.198, 5.952-0.48C 29.964,41.682, 30.00,41.835, 30.00,42.00c0.00,3.312-2.688,6.00-6.00,6.00s-6.00-2.688-6.00-6.00 c0.00-0.165, 0.036-0.318, 0.048-0.48C 19.947,41.802, 21.918,42.00, 24.00,42.00z" >;
  }
});

module.exports = SwitchOn;