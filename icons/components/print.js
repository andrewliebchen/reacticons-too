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
    return <path d="M 39.00,42.00l0.00,3.00 c0.00,1.659-1.341,3.00-3.00,3.00L12.00,48.00 c-1.656,0.00-3.00-1.341-3.00-3.00l0.00,-3.00 c-4.971,0.00-9.00-4.029-9.00-9.00L0.00,24.00 c0.00-4.971, 4.029-9.00, 9.00-9.00L9.00,3.00 c0.00-1.659, 1.344-3.00, 3.00-3.00l24.00,0.00 c 1.659,0.00, 3.00,1.341, 3.00,3.00l0.00,12.00 c 4.968,0.00, 9.00,4.029, 9.00,9.00l0.00,9.00 C 48.00,37.971, 43.968,42.00, 39.00,42.00z M 12.00,45.00l24.00,0.00 l0.00,-12.00 L12.00,33.00 L12.00,45.00 z M 36.00,3.00L12.00,3.00 l0.00,12.00 l3.00,0.00 L15.00,6.00 l18.00,0.00 l0.00,9.00 l3.00,0.00 L36.00,3.00 z M 18.00,9.00l0.00,6.00 l12.00,0.00 L30.00,9.00 L18.00,9.00 z M 36.00,21.00l-3.00,0.00 l0.00,3.00 l3.00,0.00 L36.00,21.00 z M 36.00,27.00L12.00,27.00 c-3.312,0.00-6.00,2.688-6.00,6.00 l0.00,3.00 l3.00,0.00 l0.00,-3.00 c0.00-1.659, 1.344-3.00, 3.00-3.00l24.00,0.00 c 1.659,0.00, 3.00,1.341, 3.00,3.00l0.00,3.00 l3.00,0.00 l0.00,-3.00 C 42.00,29.688, 39.312,27.00, 36.00,27.00z M 42.00,21.00l-3.00,0.00 l0.00,3.00 l3.00,0.00 L42.00,21.00 z" >;
  }
});

module.exports = SwitchOn;
