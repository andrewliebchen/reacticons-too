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
    return <path d="M 39.00,48.00L9.00,48.00 c-4.971,0.00-9.00-4.029-9.00-9.00l0.00,-9.00 l 12.00-12.00l3.00,0.00 l0.00,6.00 L14.487,24.00 L 6.00,33.00l9.00,0.00 l0.00,3.00 c0.00,1.659, 1.344,3.00, 3.00,3.00l12.00,0.00 c 1.659,0.00, 3.00-1.341, 3.00-3.00l0.00,-3.00 l9.00,0.00 l-8.484-9.00L33.00,24.00 L33.00,18.00 l3.00,0.00 l 12.00,12.00l0.00,9.00 C 48.00,43.971, 43.971,48.00, 39.00,48.00z M 30.00,12.00L27.00,12.00 l0.00,9.00 c0.00,1.656-1.341,3.00-3.00,3.00 C 22.344,24.00, 21.00,22.656, 21.00,21.00L21.00,12.00 L18.00,12.00 C 16.788,12.00, 15.69,11.268, 15.228,10.149c-0.462-1.122-0.204-2.412, 0.651-3.27l 6.00-6.00C 22.464,0.294, 23.232,0.00, 24.00,0.00 s 1.536,0.294, 2.121,0.879l 6.00,6.00c 0.858,0.858, 1.113,2.148, 0.651,3.27C 32.31,11.268, 31.212,12.00, 30.00,12.00z" >;
  }
});

module.exports = SwitchOn;
