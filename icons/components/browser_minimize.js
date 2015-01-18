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
    return <path d="M 39.00,48.00L9.00,48.00 c-4.971,0.00-9.00-4.029-9.00-9.00L0.00,9.00 c0.00-4.971, 4.029-9.00, 9.00-9.00l30.00,0.00 c 4.971,0.00, 9.00,4.029, 9.00,9.00l0.00,30.00 C 48.00,43.971, 43.971,48.00, 39.00,48.00z M 42.00,9.00c0.00-1.656-1.341-3.00-3.00-3.00L9.00,6.00 C 7.344,6.00, 6.00,7.344, 6.00,9.00l0.00,6.00 l36.00,0.00 L42.00,9.00 z M 42.00,18.00L6.00,18.00 l0.00,21.00 c0.00,1.659, 1.344,3.00, 3.00,3.00l30.00,0.00 c 1.659,0.00, 3.00-1.341, 3.00-3.00L42.00,18.00 z M 30.00,33.00L18.00,33.00 c-1.656,0.00-3.00-1.341-3.00-3.00s 1.344-3.00, 3.00-3.00l12.00,0.00 c 1.659,0.00, 3.00,1.341, 3.00,3.00S 31.659,33.00, 30.00,33.00z M 12.00,12.00L9.00,12.00 L9.00,9.00 l3.00,0.00 L12.00,12.00 z M 18.00,12.00L15.00,12.00 L15.00,9.00 l3.00,0.00 L18.00,12.00 z M 39.00,12.00L21.00,12.00 L21.00,9.00 l18.00,0.00 L39.00,12.00 z" >;
  }
});

module.exports = SwitchOn;
