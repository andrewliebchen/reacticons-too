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
    return <path d="M 24.00,0.00C 10.746,0.00,0.00,10.746,0.00,24.00s 10.746,24.00, 24.00,24.00c 13.254,0.00, 24.00-10.746, 24.00-24.00 S 37.254,0.00, 24.00,0.00z M 24.00,42.00c-9.939,0.00-18.00-8.061-18.00-18.00s 8.061-18.00, 18.00-18.00s 18.00,8.061, 18.00,18.00S 33.939,42.00, 24.00,42.00z M 33.00,21.00L27.00,21.00 L27.00,15.00 c0.00-1.659-1.344-3.00-3.00-3.00S 21.00,13.341, 21.00,15.00l0.00,9.00 c0.00,1.659, 1.344,3.00, 3.00,3.00l9.00,0.00 c 1.659,0.00, 3.00-1.341, 3.00-3.00S 34.659,21.00, 33.00,21.00z" >;
  }
});

module.exports = SwitchOn;
