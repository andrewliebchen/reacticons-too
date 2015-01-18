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
    return <path d="M 39.00,12.00 C 43.971,12.00 48.00,16.032 48.00,21.00 L 48.00,33.00 C 48.00,37.971 43.971,42.00 39.00,42.00 L 9.00,42.00 C 4.029,42.00 0.00,37.971 0.00,33.00 L 0.00,21.00 C 0.00,16.032 4.029,12.00 9.00,12.00 L 21.00,12.00 L 21.00,9.003 C 21.00,7.791 21.732,6.693 22.851,6.231 C 23.973,5.766 25.263,6.021 26.121,6.882 L 32.121,12.879 C 32.706,13.464 33.00,14.232 33.00,15.00 C 33.00,15.768 32.706,16.536 32.121,17.121 L 26.121,23.121 C 25.266,23.979 23.973,24.234 22.851,23.772 C 21.732,23.31 21.00,22.212 21.00,21.00 L 21.00,18.00 L 9.00,18.00 C 7.344,18.00 6.00,19.341 6.00,21.00 L 6.00,33.00 C 6.00,34.659 7.344,36.00 9.00,36.00 L 39.00,36.00 C 40.659,36.00 42.00,34.659 42.00,33.00 L 42.00,21.00 C 42.00,19.341 40.659,18.00 39.00,18.00 L 38.454,18.00 C 38.793,17.046 39.00,16.044 39.00,15.00 C 39.00,13.956 38.793,12.954 38.454,12.00 L 39.00,12.00 Z" >;
  }
});

module.exports = SwitchOn;
