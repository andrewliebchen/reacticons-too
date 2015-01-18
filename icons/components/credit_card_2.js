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
    return <path d="M 45.00,6.00L3.00,6.00 C 1.344,6.00,0.00,7.344,0.00,9.00l0.00,30.00 c0.00,1.659, 1.344,3.00, 3.00,3.00l42.00,0.00 c 1.659,0.00, 3.00-1.341, 3.00-3.00L48.00,9.00 C 48.00,7.344, 46.659,6.00, 45.00,6.00z M 30.00,21.00l6.00,0.00 l0.00,6.00 l-6.00,0.00 L30.00,21.00 z M 21.00,21.00l6.00,0.00 l0.00,6.00 L21.00,27.00 L21.00,21.00 z M 30.00,30.00l0.00,3.00 L27.00,33.00 l0.00,-3.00 L30.00,30.00 z M 21.00,30.00l3.00,0.00 l0.00,3.00 L21.00,33.00 L21.00,30.00 z M 3.00,12.00 c0.00-1.656, 1.344-3.00, 3.00-3.00l6.00,0.00 c 1.656,0.00, 3.00,1.344, 3.00,3.00l0.00,3.00 c0.00,1.659-1.344,3.00-3.00,3.00L6.00,18.00 C 4.344,18.00, 3.00,16.659, 3.00,15.00L3.00,12.00 z M 18.00,21.00l0.00,6.00 L12.00,27.00 L12.00,21.00 L18.00,21.00 z M 9.00,39.00L3.00,39.00 l0.00,-3.00 l6.00,0.00 L9.00,39.00 z M 9.00,27.00 L3.00,27.00 L3.00,21.00 l6.00,0.00 L9.00,27.00 z M 33.00,39.00L12.00,39.00 l0.00,-3.00 l21.00,0.00 L33.00,39.00 z M 39.00,33.00l-3.00,0.00 l0.00,-3.00 l3.00,0.00 L39.00,33.00 z M 45.00,33.00l-3.00,0.00 l0.00,-3.00 l3.00,0.00 L45.00,33.00 z M 45.00,27.00l-6.00,0.00 L39.00,21.00 l6.00,0.00 L45.00,27.00 z" >;
  }
});

module.exports = SwitchOn;