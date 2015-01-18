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
    return <path d="M 27.00,33.00c-2.547,0.00-4.899-0.807-6.84-2.16L 12.00,39.00L9.00,39.00 l0.00,-3.00 l 8.16-8.16l0.00,0.00 L 36.00,9.00L 15.486,24.291C 15.186,23.241, 15.00,22.146, 15.00,21.00c0.00-6.627, 23.373-21.00, 30.00-21.00c 3.00,0.00, 3.00,0.00, 3.00,3.00C 48.00,9.627, 33.627,33.00, 27.00,33.00zM 42.00,28.041 C 44.202,25.17 46.242,22.023 48.00,18.885 L 48.00,39.00 C 48.00,43.971 43.971,48.00 39.00,48.00 L 9.00,48.00 C 4.029,48.00 0.00,43.971 0.00,39.00 L 0.00,9.00 C 0.00,4.029 4.029,0.00 9.00,0.00 L 29.115,0.00 C 25.977,1.758 22.83,3.798 19.959,6.00 L 9.00,6.00 C 7.341,6.00 6.00,7.341 6.00,9.00 L 6.00,39.00 C 6.00,40.659 7.341,42.00 9.00,42.00 L 39.00,42.00 C 40.659,42.00 42.00,40.659 42.00,39.00 L 42.00,28.041 Z" >;
  }
});

module.exports = SwitchOn;