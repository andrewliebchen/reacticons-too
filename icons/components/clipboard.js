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
    return <path d="M 42.00,48.00L6.00,48.00 c-1.659,0.00-3.00-1.341-3.00-3.00L3.00,6.00 c0.00-1.656, 1.341-3.00, 3.00-3.00l6.00,0.00 l0.00,6.00 L9.00,9.00 l0.00,33.00 l30.00,0.00 L39.00,9.00 l-3.00,0.00 L36.00,3.00 l6.00,0.00 c 1.659,0.00, 3.00,1.344, 3.00,3.00l0.00,39.00 C 45.00,46.659, 43.659,48.00, 42.00,48.00z M 12.00,12.00l3.00,0.00 c0.00,1.656, 1.341,3.00, 3.00,3.00l12.00,0.00 c 1.659,0.00, 3.00-1.344, 3.00-3.00l3.00,0.00 l0.00,27.00 L12.00,39.00 L12.00,12.00 z M 30.00,12.00L18.00,12.00 C 16.341,12.00, 15.00,10.656, 15.00,9.00L15.00,3.00 l0.00,0.00l6.00,0.00 L21.00,0.00 l6.00,0.00 l0.00,3.00 l6.00,0.00 l0.00,0.00l0.00,6.00 C 33.00,10.656, 31.659,12.00, 30.00,12.00z M 27.00,6.00L21.00,6.00 l0.00,3.00 l6.00,0.00 L27.00,6.00 z" >;
  }
});

module.exports = SwitchOn;
