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
    return <path d="M 45.00,45.00L3.00,45.00 c-1.659,0.00-3.00-1.341-3.00-3.00L0.00,12.00 c0.00-1.656, 1.341-3.00, 3.00-3.00l9.00,0.00 L12.00,6.00 c0.00-1.656, 1.341-3.00, 3.00-3.00l18.00,0.00 c 1.659,0.00, 3.00,1.344, 3.00,3.00l0.00,3.00 l9.00,0.00 c 1.659,0.00, 3.00,1.344, 3.00,3.00l0.00,30.00 C 48.00,43.659, 46.659,45.00, 45.00,45.00z M 42.00,15.00l-9.00,0.00 l-3.00,0.00 L30.00,9.00 L18.00,9.00 l0.00,6.00 L15.00,15.00 L6.00,15.00 l0.00,24.00 l36.00,0.00 L42.00,15.00 z M 10.50,18.00C 11.328,18.00, 12.00,18.672, 12.00,19.50C 12.00,20.328, 11.328,21.00, 10.50,21.00S 9.00,20.328, 9.00,19.50C 9.00,18.672, 9.672,18.00, 10.50,18.00z M 24.00,18.00c 4.971,0.00, 9.00,4.029, 9.00,9.00 c0.00,4.968-4.029,9.00-9.00,9.00s-9.00-4.032-9.00-9.00C 15.00,22.029, 19.029,18.00, 24.00,18.00z M 24.00,33.00c 3.312,0.00, 6.00-2.688, 6.00-6.00S 27.312,21.00, 24.00,21.00S 18.00,23.688, 18.00,27.00S 20.688,33.00, 24.00,33.00z" >;
  }
});

module.exports = SwitchOn;