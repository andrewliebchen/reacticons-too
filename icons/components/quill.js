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
    return <path d="M 39.00,18.00 C 43.971,18.00 48.00,13.971 48.00,9.00 C 48.00,4.029 43.971,0.00 39.00,0.00 L 39.00,0.00 C 12.00,0.00 0.00,45.00 0.00,45.00 L 0.00,46.50 C 0.00,47.328 0.672,48.00 1.50,48.00 C 2.328,48.00 3.00,47.328 3.00,46.50 L 3.00,45.00 C 4.914,39.258 9.57,33.528 15.024,28.377 C 15.024,28.422 15.00,28.455 15.00,28.50 C 15.00,30.984 17.013,33.00 19.50,33.00 C 21.987,33.00 24.00,30.984 24.00,28.50 C 24.00,27.744 23.766,27.063 23.436,26.436 C 24.063,26.766 24.744,27.00 25.50,27.00 C 27.984,27.00 30.00,24.984 30.00,22.50 C 30.00,21.744 29.766,21.063 29.436,20.436 C 30.063,20.766 30.741,21.00 31.50,21.00 C 33.681,21.00 35.412,19.422 35.823,17.364 C 36.813,17.748 37.872,18.00 39.00,18.00 Z" >;
  }
});

module.exports = SwitchOn;