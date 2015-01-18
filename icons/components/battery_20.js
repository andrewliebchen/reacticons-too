'use strict';

var React = require('react/addons');

var Battery20 = React.createClass({
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
    return <path d="M 45.00,18.00L45.00,12.00 c0.00-1.656-1.341-3.00-3.00-3.00L3.00,9.00 C 1.344,9.00,0.00,10.344,0.00,12.00l0.00,27.00 c0.00,1.659, 1.344,3.00, 3.00,3.00l39.00,0.00 c 1.659,0.00, 3.00-1.341, 3.00-3.00l0.00,-6.00 c 1.659,0.00, 3.00-1.341, 3.00-3.00L48.00,21.00 C 48.00,19.344, 46.659,18.00, 45.00,18.00z M 39.00,33.00c0.00,1.659-1.341,3.00-3.00,3.00L9.00,36.00 c-1.656,0.00-3.00-1.341-3.00-3.00L6.00,18.00 c0.00-1.656, 1.344-3.00, 3.00-3.00l27.00,0.00 c 1.659,0.00, 3.00,1.344, 3.00,3.00L39.00,33.00 z M 10.50,18.00C 9.672,18.00, 9.00,18.672, 9.00,19.50l0.00,12.00 C 9.00,32.328, 9.672,33.00, 10.50,33.00 C 11.328,33.00, 12.00,32.328, 12.00,31.50l0.00,-12.00 C 12.00,18.672, 11.328,18.00, 10.50,18.00z" >;
  }
});

module.exports = Battery20;
