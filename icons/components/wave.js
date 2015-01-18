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
    return <path d="M 42.00,45.00c-1.659,0.00-3.00-1.341-3.00-3.00L39.00,15.00 c0.00-3.312-2.688-6.00-6.00-6.00S 27.00,11.688, 27.00,15.00l0.00,18.00 c0.00,6.627-5.373,12.00-12.00,12.00s-12.00-5.373-12.00-12.00L3.00,6.00 c0.00-1.656, 1.341-3.00, 3.00-3.00s 3.00,1.344, 3.00,3.00l0.00,27.00 c0.00,3.312, 2.688,6.00, 6.00,6.00s 6.00-2.688, 6.00-6.00L21.00,15.00 c0.00-6.627, 5.373-12.00, 12.00-12.00 s 12.00,5.373, 12.00,12.00l0.00,27.00 C 45.00,43.659, 43.659,45.00, 42.00,45.00z" >;
  }
});

module.exports = SwitchOn;
