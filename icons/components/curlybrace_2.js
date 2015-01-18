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
    return <path d="M 39.00,30.00L 39.00,30.00c-1.659,0.00-3.00,1.341-3.00,3.00l0.00,6.00 c0.00,4.968-4.032,9.00-9.00,9.00l0.00,-6.00 c 1.659,0.00, 3.00-1.341, 3.00-3.00l0.00,-6.00 c0.00-4.968, 4.032-9.00, 9.00-9.00c-4.968,0.00-9.00-4.029-9.00-9.00L30.00,9.00 l0.00,0.00c0.00-1.656-1.341-3.00-3.00-3.00L27.00,0.00 c 4.968,0.00, 9.00,4.029, 9.00,9.00l0.00,6.00 c0.00,1.656, 1.341,3.00, 3.00,3.00c 3.312,0.00, 6.00,2.688, 6.00,6.00S 42.312,30.00, 39.00,30.00z M 12.00,39.00l0.00,-6.00 c0.00-1.659-1.344-3.00-3.00-3.00l0.00,0.00c-3.312,0.00-6.00-2.688-6.00-6.00s 2.688-6.00, 6.00-6.00 c 1.656,0.00, 3.00-1.344, 3.00-3.00L12.00,9.00 c0.00-4.971, 4.029-9.00, 9.00-9.00l0.00,6.00 C 19.344,6.00, 18.00,7.344, 18.00,9.00l0.00,0.00l0.00,6.00 c0.00,4.971-4.029,9.00-9.00,9.00c 4.971,0.00, 9.00,4.032, 9.00,9.00l0.00,6.00 c0.00,1.659, 1.344,3.00, 3.00,3.00l0.00,6.00 C 16.029,48.00, 12.00,43.968, 12.00,39.00z" >;
  }
});

module.exports = SwitchOn;
