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
    return <path d="M 39.00,48.00L9.00,48.00 c-4.971,0.00-9.00-4.029-9.00-9.00L0.00,9.00 c0.00-4.971, 4.029-9.00, 9.00-9.00l30.00,0.00 c 4.971,0.00, 9.00,4.029, 9.00,9.00l0.00,30.00 C 48.00,43.971, 43.971,48.00, 39.00,48.00z M 9.00,3.00C 7.344,3.00, 6.00,4.344, 6.00,6.00s 1.344,3.00, 3.00,3.00s 3.00-1.344, 3.00-3.00S 10.656,3.00, 9.00,3.00z M 42.00,12.00L6.00,12.00 l0.00,27.00 c0.00,1.659, 1.344,3.00, 3.00,3.00l30.00,0.00 c 1.659,0.00, 3.00-1.341, 3.00-3.00L42.00,12.00 z M 30.00,30.00L18.00,30.00 c-1.656,0.00-3.00-1.341-3.00-3.00c0.00-1.656, 1.344-3.00, 3.00-3.00l12.00,0.00 c 1.659,0.00, 3.00,1.344, 3.00,3.00 C 33.00,28.659, 31.659,30.00, 30.00,30.00z" >;
  }
});

module.exports = SwitchOn;