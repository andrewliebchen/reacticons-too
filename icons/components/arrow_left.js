'use strict';

var React = require('react/addons');

var ArrowLeft = React.createClass({
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
    return <path d="M0.00,24.00c0.00,13.254, 10.746,24.00, 24.00,24.00s 24.00-10.746, 24.00-24.00s-10.746-24.00-24.00-24.00S0.00,10.746,0.00,24.00z M 42.00,24.00c0.00,9.939-8.061,18.00-18.00,18.00s-18.00-8.061-18.00-18.00s 8.061-18.00, 18.00-18.00S 42.00,14.061, 42.00,24.00zM 12.876,21.879 L 18.876,15.879 C 19.734,15.024 21.024,14.766 22.149,15.228 C 23.268,15.69 24.00,16.788 24.00,18.00 L 24.00,21.00 L 33.00,21.00 C 34.659,21.00 36.00,22.341 36.00,24.00 C 36.00,25.659 34.659,27.00 33.00,27.00 L 24.00,27.00 L 24.00,30.00 C 24.00,31.212 23.268,32.31 22.149,32.772 C 21.027,33.234 19.734,32.979 18.876,32.121 L 12.876,26.121 C 12.291,25.536 11.997,24.768 11.997,24.00 C 11.997,23.232 12.291,22.464 12.876,21.879 Z" >;
  }
});

module.exports = ArrowLeft;
