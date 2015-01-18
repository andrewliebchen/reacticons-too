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
    return <path d="M 39.00,39.00L 39.00,39.00L39.00,9.00 c0.00-1.656-1.341-3.00-3.00-3.00s-3.00,1.344-3.00,3.00l0.00,30.00 l0.00,0.00 c0.00,4.968-4.029,9.00-9.00,9.00s-9.00-4.032-9.00-9.00L15.00,9.00 c0.00-1.656-1.341-3.00-3.00-3.00S 9.00,7.344, 9.00,9.00l0.00,30.00 l0.00,0.00c0.00,4.968-4.029,9.00-9.00,9.00l0.00,-6.00 c 1.659,0.00, 3.00-1.341, 3.00-3.00l0.00,0.00L3.00,9.00 c0.00-4.971, 4.029-9.00, 9.00-9.00s 9.00,4.029, 9.00,9.00l0.00,30.00 c0.00,1.659, 1.341,3.00, 3.00,3.00s 3.00-1.341, 3.00-3.00L27.00,9.00 l0.00,0.00c0.00-4.971, 4.029-9.00, 9.00-9.00s 9.00,4.029, 9.00,9.00l0.00,30.00 c0.00,1.659, 1.341,3.00, 3.00,3.00l0.00,6.00 C 43.029,48.00, 39.00,43.968, 39.00,39.00z" >;
  }
});

module.exports = SwitchOn;
