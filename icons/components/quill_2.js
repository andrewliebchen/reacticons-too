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
    return <path d="M 18.00,42.00c-2.547,0.00-4.899-0.807-6.84-2.16L 3.00,48.00L0.00,48.00 l0.00,-3.00 l 8.16-8.16l0.00,0.00 L 36.00,9.00l-29.514,24.291C 6.186,32.241, 6.00,31.146, 6.00,30.00C 6.00,23.373, 38.373,0.00, 45.00,0.00c 3.00,0.00, 3.00,0.00, 3.00,3.00C 48.00,9.627, 24.627,42.00, 18.00,42.00z" >;
  }
});

module.exports = SwitchOn;