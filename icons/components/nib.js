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
    return <path d="M 43.437,19.437L 28.515,4.515L 33.00,0.00l 15.00,15.00L 43.437,19.437z M 38.997,23.76 C 38.895,23.859, 38.814,23.913, 38.718,24.00L36.00,24.00 l-3.00,0.00 l-3.00,12.00l-24.00,12.00L3.00,48.00 l 9.54-9.54C 13.293,38.802, 14.121,39.00, 15.00,39.00c 3.312,0.00, 6.00-2.688, 6.00-6.00S 18.312,27.00, 15.00,27.00 s-6.00,2.688-6.00,6.00c0.00,0.879, 0.198,1.707, 0.54,2.46L0.00,45.00l0.00,-3.00 l 12.00-24.00l 12.00-3.00L24.00,12.00 L24.00,9.084 C 24.057,9.024, 24.084,8.973, 24.147,8.91l 1.377-1.386l 14.874,14.874 L 38.997,23.76z" >;
  }
});

module.exports = SwitchOn;
