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
    return <path d="M 6.00,24.00 C 8.316,24.00 10.404,23.10 12.00,21.666 L 12.00,36.00 L 36.00,36.00 L 36.00,21.666 C 37.593,23.10 39.687,24.00 42.00,24.00 L 42.00,42.00 L 6.00,42.00 L 6.00,24.00 Z M 42.00,0.00 L 48.00,15.00 C 48.00,18.312 45.312,21.00 42.00,21.00 C 38.688,21.00 36.00,18.312 36.00,15.00 C 36.00,18.312 33.312,21.00 30.00,21.00 C 26.688,21.00 24.00,18.312 24.00,15.00 C 24.00,18.312 21.312,21.00 18.00,21.00 C 14.688,21.00 12.00,18.312 12.00,15.00 C 12.00,18.312 9.312,21.00 6.00,21.00 C 2.688,21.00 0.00,18.312 0.00,15.00 L 6.00,0.00 L 42.00,0.00 Z M 3.00,48.00 L 3.00,45.00 L 45.00,45.00 L 45.00,48.00 L 3.00,48.00 Z" >;
  }
});

module.exports = SwitchOn;