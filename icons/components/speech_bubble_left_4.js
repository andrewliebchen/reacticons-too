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
    return <path d="M 42.00,32.448L42.00,15.00 c0.00-4.971-4.029-9.00-9.00-9.00L9.552,6.00 C 10.791,2.511, 14.085,0.00, 18.00,0.00l21.00,0.00 c 4.971,0.00, 9.00,4.029, 9.00,9.00l0.00,15.00 C 48.00,27.915, 45.486,31.209, 42.00,32.448z M 39.00,18.00l0.00,12.00 c0.00,4.968-4.029,9.00-9.00,9.00L21.00,39.00 l-6.00,9.00l-6.00-9.00c-4.971,0.00-9.00-4.032-9.00-9.00L0.00,18.00 c0.00-4.971, 4.029-9.00, 9.00-9.00l21.00,0.00 C 34.971,9.00, 39.00,13.029, 39.00,18.00z M 6.00,18.00l0.00,12.00 c0.00,1.659, 1.341,3.00, 3.00,3.00l2.001,0.00 L 15.00,39.00l 3.999-6.00L30.00,33.00 c 1.659,0.00, 3.00-1.341, 3.00-3.00L33.00,18.00 c0.00-1.656-1.341-3.00-3.00-3.00L9.00,15.00 C 7.341,15.00, 6.00,16.344, 6.00,18.00z" >;
  }
});

module.exports = SwitchOn;
