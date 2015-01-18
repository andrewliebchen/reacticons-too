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
    return <path d="M 45.00,48.00L15.00,48.00 c-1.656,0.00-3.00-1.341-3.00-3.00l0.00,-9.00 L3.00,36.00 c-1.656,0.00-3.00-1.341-3.00-3.00L0.00,3.00 c0.00-1.659, 1.344-3.00, 3.00-3.00l30.00,0.00 c 1.659,0.00, 3.00,1.341, 3.00,3.00l0.00,9.00 l9.00,0.00 c 1.659,0.00, 3.00,1.344, 3.00,3.00l0.00,30.00 C 48.00,46.659, 46.659,48.00, 45.00,48.00z M 30.00,18.00L18.00,18.00 l0.00,12.00 l12.00,0.00 L30.00,18.00 z" >;
  }
});

module.exports = SwitchOn;
