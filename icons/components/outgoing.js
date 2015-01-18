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
    return <path d="M 50.664,33.636c-0.003-0.009-0.009-0.015-0.012-0.027l 0.018-0.006 C 50.667,33.612, 50.667,33.627, 50.664,33.636z M 39.00,48.00L9.00,48.00 c-4.971,0.00-9.00-4.032-9.00-9.00L0.00,9.00 c0.00-4.971, 4.029-9.00, 9.00-9.00l15.00,0.00 l0.00,6.00 L9.00,6.00 C 7.341,6.00, 6.00,7.344, 6.00,9.00l0.00,30.00 c0.00,1.659, 1.341,3.00, 3.00,3.00l30.00,0.00 c 1.659,0.00, 3.00-1.341, 3.00-3.00l0.00,-7.998 l 6.00-5.001L48.00,39.00 C 48.00,43.968, 43.971,48.00, 39.00,48.00z M 30.00,21.126 C 20.292,21.78, 12.387,28.959, 10.743,38.364C 9.627,35.802, 9.00,32.976, 9.00,30.00c0.00-11.598, 9.402-21.00, 21.00-21.00L30.00,0.00 l 18.00,15.00l-18.00,15.00L30.00,21.126 z" >;
  }
});

module.exports = SwitchOn;
