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
    return <path d="M 39.00,21.00 L 15.00,21.00 L 15.00,15.00 C 15.00,10.029 19.029,6.00 24.00,6.00 C 27.915,6.00 31.206,8.514 32.448,12.00 L 38.697,12.00 C 37.308,5.154 31.257,0.00 24.00,0.00 C 15.717,0.00 9.00,6.714 9.00,15.00 L 9.00,21.00 C 7.344,21.00 6.00,22.344 6.00,24.00 L 6.00,45.00 C 6.00,46.659 7.344,48.00 9.00,48.00 L 39.00,48.00 C 40.659,48.00 42.00,46.659 42.00,45.00 L 42.00,24.00 C 42.00,22.344 40.659,21.00 39.00,21.00 Z M 36.00,27.00 L 36.00,42.00 L 12.00,42.00 L 12.00,27.00 L 36.00,27.00 Z" >;
  }
});

module.exports = SwitchOn;
