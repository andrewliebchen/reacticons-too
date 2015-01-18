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
    return <path d="M 39.00,48.00l-6.00,0.00 l0.00,-6.00 l6.00,0.00 c 1.659,0.00, 3.00-1.341, 3.00-3.00L42.00,12.00 L6.00,12.00 l0.00,27.00 c0.00,1.659, 1.341,3.00, 3.00,3.00l6.00,0.00 l0.00,6.00 L9.00,48.00 c-4.971,0.00-9.00-4.032-9.00-9.00L0.00,9.00 c0.00-4.971, 4.029-9.00, 9.00-9.00l30.00,0.00 c 4.971,0.00, 9.00,4.029, 9.00,9.00l0.00,30.00 C 48.00,43.968, 43.971,48.00, 39.00,48.00z M 9.00,3.00C 7.341,3.00, 6.00,4.344, 6.00,6.00 s 1.341,3.00, 3.00,3.00s 3.00-1.344, 3.00-3.00S 10.659,3.00, 9.00,3.00z M 21.879,24.876C 22.464,24.291, 23.232,23.997, 24.00,23.997s 1.536,0.294, 2.121,0.879l 6.00,6.00 c 0.855,0.858, 1.113,2.148, 0.651,3.273C 32.31,35.268, 31.212,36.00, 30.00,36.00L27.00,36.00 l0.00,9.00 c0.00,1.659-1.341,3.00-3.00,3.00c-1.656,0.00-3.00-1.341-3.00-3.00l0.00,-9.00 L18.00,36.00 c-1.212,0.00-2.31-0.732-2.772-1.851c-0.462-1.122-0.207-2.415, 0.651-3.273L 21.879,24.876z" >;
  }
});

module.exports = SwitchOn;
