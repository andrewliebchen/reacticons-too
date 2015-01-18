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
    return <path d="M 44.772,25.851 C 45.237,26.973 44.979,28.263 44.121,29.121 L 38.121,35.121 C 37.536,35.706 36.768,36.00 36.00,36.00 C 35.232,36.00 34.464,35.706 33.879,35.121 L 27.879,29.121 C 27.021,28.263 26.766,26.973 27.228,25.851 C 27.69,24.732 28.788,24.00 30.00,24.00 L 33.00,24.00 C 33.00,17.373 27.627,12.00 21.00,12.00 C 14.373,12.00 9.00,17.373 9.00,24.00 C 9.00,30.627 14.373,36.00 21.00,36.00 C 22.563,36.00 24.042,35.682 25.413,35.139 L 29.937,39.609 C 27.303,41.121 24.255,42.00 21.00,42.00 C 11.061,42.00 3.00,33.939 3.00,24.00 C 3.00,14.061 11.061,6.00 21.00,6.00 C 30.939,6.00 39.00,14.061 39.00,24.00 L 42.00,24.00 C 43.212,24.00 44.31,24.732 44.772,25.851 Z" >;
  }
});

module.exports = SwitchOn;