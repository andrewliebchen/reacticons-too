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
    return <path d="M 34.50,48.00C 27.045,48.00, 21.00,41.955, 21.00,34.50S 27.045,21.00, 34.50,21.00 S 48.00,27.045, 48.00,34.50S 41.955,48.00, 34.50,48.00z M 34.50,27.00C 30.357,27.00, 27.00,30.357, 27.00,34.50s 3.357,7.50, 7.50,7.50s 7.50-3.357, 7.50-7.50S 38.643,27.00, 34.50,27.00z M 30.00,33.00l9.00,0.00 l0.00,3.00 l-9.00,0.00 L30.00,33.00 z M 34.50,15.00C 23.748,15.00, 15.00,23.748, 15.00,34.50c0.00,0.507, 0.039,1.002, 0.075,1.50L12.00,36.00 c-6.627,0.00-12.00-5.373-12.00-12.00L0.00,21.00 c0.00-6.627, 5.373-12.00, 12.00-12.00 c 1.14,0.00, 2.223,0.21, 3.267,0.507C 16.416,4.077, 21.228,0.00, 27.00,0.00c 6.627,0.00, 12.00,5.373, 12.00,12.00c0.00,1.059-0.183,2.067-0.438,3.045L 34.50,15.00z" >;
  }
});

module.exports = SwitchOn;
