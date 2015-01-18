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
    return <path d="M 39.00,23.331L39.00,23.28 L39.00,12.00 L 27.00,0.00L6.00,0.00 C 4.341,0.00, 3.00,1.341, 3.00,3.00l0.00,42.00 c0.00,1.659, 1.341,3.00, 3.00,3.00l25.50,0.00 c 7.455,0.00, 13.50-6.045, 13.50-13.50C 45.00,29.829, 42.606,25.749, 39.00,23.331z M 20.28,42.00L9.00,42.00 L9.00,6.00 l15.00,0.00 l0.00,9.00 l9.00,0.00 l0.00,6.114 L33.00,21.15 C 32.505,21.081, 32.013,21.00, 31.50,21.00C 24.045,21.00, 18.00,27.045, 18.00,34.50C 18.00,37.278, 18.843,39.855, 20.28,42.00z M 31.50,42.00C 27.357,42.00, 24.00,38.643, 24.00,34.50 S 27.357,27.00, 31.50,27.00s 7.50,3.357, 7.50,7.50S 35.643,42.00, 31.50,42.00zM 33.00,33.00 L 36.00,33.00 L 36.00,36.00 L 33.00,36.00 L 33.00,39.00 L 30.00,39.00 L 30.00,36.00 L 27.00,36.00 L 27.00,33.00 L 30.00,33.00 L 30.00,30.00 L 33.00,30.00 Z" >;
  }
});

module.exports = SwitchOn;
