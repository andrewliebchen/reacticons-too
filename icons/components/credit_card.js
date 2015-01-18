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
    return <path d="M 45.00,42.00L3.00,42.00 c-1.656,0.00-3.00-1.341-3.00-3.00L0.00,9.00 c0.00-1.659, 1.344-3.00, 3.00-3.00l42.00,0.00 c 1.659,0.00, 3.00,1.341, 3.00,3.00l0.00,30.00 C 48.00,40.659, 46.659,42.00, 45.00,42.00z M 45.00,9.00L3.00,9.00 l0.00,3.00 l42.00,0.00 L45.00,9.00 z M 45.00,18.00L3.00,18.00 l0.00,21.00 l42.00,0.00 L45.00,18.00 z M 15.00,30.00L6.00,30.00 L6.00,21.00 l9.00,0.00 L15.00,30.00 z M 12.00,36.00L6.00,36.00 l0.00,-3.00 l6.00,0.00 L12.00,36.00 z M 21.00,36.00L15.00,36.00 l0.00,-3.00 l6.00,0.00 L21.00,36.00 z M 30.00,36.00L24.00,36.00 l0.00,-3.00 l6.00,0.00 L30.00,36.00 z M 36.00,36.00l-3.00,0.00 l0.00,-3.00 l3.00,0.00 L36.00,36.00 z M 42.00,36.00l-3.00,0.00 l0.00,-3.00 l3.00,0.00 L42.00,36.00 z" >;
  }
});

module.exports = SwitchOn;
