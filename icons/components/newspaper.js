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
    return <path d="M 39.00,48.00L9.00,48.00 c-4.971,0.00-9.00-4.029-9.00-9.00L0.00,0.00 l36.00,0.00 l0.00,3.00 l6.00,0.00 l0.00,0.00l0.00,3.00 l3.00,0.00 l3.00,0.00 l0.00,33.00 C 48.00,43.971, 43.971,48.00, 39.00,48.00z M 30.00,6.00L6.00,6.00 l0.00,33.00 c0.00,1.659, 1.341,3.00, 3.00,3.00l21.00,0.00 L30.00,6.00 z M 45.00,9.00l-3.00,0.00 l0.00,28.50 c0.00,0.828-0.672,1.50-1.50,1.50S 39.00,38.328, 39.00,37.50L39.00,6.00 l-3.00,0.00 l0.00,31.50 c0.00,2.484, 2.016,4.50, 4.50,4.50s 4.50-2.016, 4.50-4.50L45.00,9.00 z M 9.00,36.00l9.00,0.00 l0.00,3.00 L9.00,39.00 L9.00,36.00 z M 9.00,30.00l12.00,0.00 l0.00,3.00 L9.00,33.00 L9.00,30.00 z M 27.00,33.00L24.00,33.00 l0.00,-3.00 l3.00,0.00 L27.00,33.00 z M 21.00,24.00l6.00,0.00 l0.00,3.00 L21.00,27.00 L21.00,24.00 z M 9.00,9.00l18.00,0.00 l0.00,12.00 L9.00,21.00 L9.00,9.00 z M 18.00,27.00L9.00,27.00 L9.00,24.00 l9.00,0.00 L18.00,27.00 z" >;
  }
});

module.exports = SwitchOn;
