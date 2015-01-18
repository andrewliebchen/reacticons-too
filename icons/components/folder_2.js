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
    return <path d="M 39.00,48.00L9.00,48.00 c-4.971,0.00-9.00-4.029-9.00-9.00L0.00,9.00 c0.00-4.971, 4.029-9.00, 9.00-9.00l12.00,0.00 c 3.912,0.00, 7.206,2.514, 8.448,6.00L39.00,6.00 c 4.968,0.00, 9.00,4.029, 9.00,9.00l0.00,24.00 C 48.00,43.971, 43.968,48.00, 39.00,48.00z M 39.00,12.00L24.00,12.00 L24.00,9.00 c0.00-1.659-1.344-3.00-3.00-3.00L9.00,6.00 C 7.344,6.00, 6.00,7.341, 6.00,9.00l0.00,30.00 c0.00,1.659, 1.344,3.00, 3.00,3.00l3.00,0.00 L12.00,21.00 c0.00-1.659, 1.344-3.00, 3.00-3.00l27.00,0.00 L42.00,15.00 C 42.00,13.341, 40.659,12.00, 39.00,12.00z" >;
  }
});

module.exports = SwitchOn;
