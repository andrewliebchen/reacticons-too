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
    return <path d="M 9.00,48.00l30.00,0.00 c 4.971,0.00, 9.00-4.029, 9.00-9.00L48.00,9.00 c0.00-4.971-4.029-9.00-9.00-9.00L9.00,0.00 C 4.029,0.00,0.00,4.029,0.00,9.00l0.00,30.00 C0.00,43.971, 4.029,48.00, 9.00,48.00z M 6.00,9.00c0.00-1.659, 1.341-3.00, 3.00-3.00l30.00,0.00 c 1.659,0.00, 3.00,1.341, 3.00,3.00l0.00,30.00 c0.00,1.659-1.341,3.00-3.00,3.00L9.00,42.00 c-1.659,0.00-3.00-1.341-3.00-3.00L6.00,9.00 z M 15.00,30.00l3.00,0.00 l0.00,0.00l0.00,9.00 l3.00,0.00 L21.00,27.00 L21.00,21.00 L21.00,9.00 L18.00,9.00 l0.00,9.00 l0.00,0.00L15.00,18.00 C 13.341,18.00, 12.00,19.344, 12.00,21.00l0.00,6.00 C 12.00,28.659, 13.341,30.00, 15.00,30.00z M 15.00,21.00l3.00,0.00 l0.00,6.00 L15.00,27.00 L15.00,21.00 z M 30.00,36.00l3.00,0.00 l0.00,3.00 l3.00,0.00 l0.00,-6.00 L36.00,15.00 L36.00,9.00 l-3.00,0.00 l0.00,3.00 l-3.00,0.00 C 28.341,12.00, 27.00,13.341, 27.00,15.00l0.00,18.00 C 27.00,34.659, 28.341,36.00, 30.00,36.00z M 30.00,15.00l3.00,0.00 l0.00,18.00 l-3.00,0.00 L30.00,15.00 z" >;
  }
});

module.exports = SwitchOn;
