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
    return <path d="M 6.00,32.448L6.00,15.00 c0.00-4.971, 4.029-9.00, 9.00-9.00l23.448,0.00 C 37.209,2.511, 33.915,0.00, 30.00,0.00 L9.00,0.00 C 4.029,0.00,0.00,4.029,0.00,9.00l0.00,15.00 C0.00,27.915, 2.514,31.209, 6.00,32.448z M 9.00,18.00l0.00,12.00 c0.00,4.968, 4.029,9.00, 9.00,9.00l9.00,0.00 l 6.00,9.00l 6.00-9.00c 4.971,0.00, 9.00-4.032, 9.00-9.00L48.00,18.00 c0.00-4.971-4.029-9.00-9.00-9.00L18.00,9.00 C 13.029,9.00, 9.00,13.029, 9.00,18.00z M 42.00,18.00l0.00,12.00 c0.00,1.659-1.341,3.00-3.00,3.00l-2.001,0.00 L 33.00,39.00l-3.999-6.00L18.00,33.00 c-1.659,0.00-3.00-1.341-3.00-3.00L15.00,18.00 c0.00-1.656, 1.341-3.00, 3.00-3.00l21.00,0.00 C 40.659,15.00, 42.00,16.344, 42.00,18.00z" >;
  }
});

module.exports = SwitchOn;