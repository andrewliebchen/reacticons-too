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
    return <path d="M 37.50,33.00l-27.00,0.00 c-0.726,0.00-1.434-0.072-2.118-0.213 c-2.049-0.42-3.882-1.437-5.31-2.862C 1.176,28.026,0.00,25.401,0.00,22.50C0.00,16.698, 4.701,12.00, 10.50,12.00S 21.00,16.698, 21.00,22.50C 21.00,24.117, 20.604,25.632, 19.95,27.00 L28.05,27.00 C 27.396,25.632, 27.00,24.117, 27.00,22.50C 27.00,16.698, 31.701,12.00, 37.50,12.00S 48.00,16.698, 48.00,22.50C 48.00,28.299, 43.299,33.00, 37.50,33.00z M 15.00,22.50 C 15.00,20.016, 12.987,18.00, 10.50,18.00S 6.00,20.016, 6.00,22.50S 8.013,27.00, 10.50,27.00S 15.00,24.984, 15.00,22.50z M 37.50,18.00C 35.016,18.00, 33.00,20.016, 33.00,22.50S 35.016,27.00, 37.50,27.00 S 42.00,24.984, 42.00,22.50S 39.984,18.00, 37.50,18.00z" >;
  }
});

module.exports = SwitchOn;
