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
    return <path d="M 39.00,0.00 C 43.971,0.00 48.00,4.029 48.00,9.00 L 48.00,39.00 C 48.00,43.971 43.971,48.00 39.00,48.00 L 9.00,48.00 C 4.029,48.00 0.00,43.971 0.00,39.00 L 0.00,9.00 C 0.00,4.029 4.029,0.00 9.00,0.00 L 15.00,0.00 L 15.00,6.00 L 9.00,6.00 C 7.344,6.00 6.00,7.344 6.00,9.00 L 6.00,39.00 C 6.00,40.659 7.344,42.00 9.00,42.00 L 39.00,42.00 C 40.659,42.00 42.00,40.659 42.00,39.00 L 42.00,9.00 C 42.00,7.344 40.659,6.00 39.00,6.00 L 33.00,6.00 L 33.00,0.00 L 39.00,0.00 ZM 15.00,30.00 L 33.00,30.00 L 39.00,39.00 L 9.00,39.00 ZM 21.879,23.121 L 15.879,17.121 C 15.021,16.263 14.766,14.973 15.228,13.851 C 15.69,12.732 16.788,12.00 18.00,12.00 L 21.00,12.00 L 21.00,3.00 C 21.00,1.341 22.344,0.00 24.00,0.00 C 25.659,0.00 27.00,1.341 27.00,3.00 L 27.00,12.00 L 30.00,12.00 C 31.212,12.00 32.31,12.732 32.772,13.851 C 33.234,14.973 32.976,16.263 32.121,17.121 L 26.121,23.121 C 25.536,23.706 24.768,24.00 24.00,24.00 C 23.232,24.00 22.464,23.706 21.879,23.121 Z" >;
  }
});

module.exports = SwitchOn;
