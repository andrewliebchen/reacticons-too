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
    return <path d="M 42.00,15.00l0.00,24.00 c0.00,4.968-4.032,9.00-9.00,9.00L15.00,48.00 c-4.971,0.00-9.00-4.032-9.00-9.00L6.00,15.00 C 4.344,15.00, 3.00,13.656, 3.00,12.00s 1.344-3.00, 3.00-3.00l9.00,0.00 c0.00-4.971, 4.029-9.00, 9.00-9.00c 4.968,0.00, 9.00,4.029, 9.00,9.00l9.00,0.00 c 1.659,0.00, 3.00,1.344, 3.00,3.00S 43.659,15.00, 42.00,15.00z M 24.00,6.00 C 22.344,6.00, 21.00,7.344, 21.00,9.00l6.00,0.00 C 27.00,7.344, 25.656,6.00, 24.00,6.00z M 36.00,15.00L12.00,15.00 l0.00,24.00 c0.00,1.659, 1.344,3.00, 3.00,3.00l18.00,0.00 c 1.659,0.00, 3.00-1.341, 3.00-3.00L36.00,15.00 z M 30.00,18.00l3.00,0.00 l0.00,21.00 l-3.00,0.00 L30.00,18.00 z M 21.00,18.00l6.00,0.00 l0.00,21.00 L21.00,39.00 L21.00,18.00 z M 15.00,18.00l3.00,0.00 l0.00,21.00 L15.00,39.00 L15.00,18.00 z" >;
  }
});

module.exports = SwitchOn;