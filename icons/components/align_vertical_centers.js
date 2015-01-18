'use strict';

var React = require('react/addons');

var AlignVerticalCenters = React.createClass({
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
    return <path d="M 18.00,12.00L15.00,12.00 C 13.344,12.00, 12.00,13.341, 12.00,15.00l0.00,18.00 c0.00,1.659, 1.344,3.00, 3.00,3.00l3.00,0.00 c 1.656,0.00, 3.00-1.341, 3.00-3.00L21.00,15.00 C 21.00,13.341, 19.656,12.00, 18.00,12.00z M 18.00,33.00L15.00,33.00 L15.00,15.00 l3.00,0.00 L18.00,33.00 z M 39.00,0.00L9.00,0.00 C 4.029,0.00,0.00,4.029,0.00,9.00l0.00,30.00 c0.00,4.971, 4.029,9.00, 9.00,9.00l30.00,0.00 c 4.968,0.00, 9.00-4.029, 9.00-9.00L48.00,9.00 C 48.00,4.029, 43.968,0.00, 39.00,0.00z M 42.00,39.00c0.00,1.659-1.341,3.00-3.00,3.00L9.00,42.00 c-1.656,0.00-3.00-1.341-3.00-3.00L6.00,9.00 c0.00-1.659, 1.344-3.00, 3.00-3.00l30.00,0.00 c 1.659,0.00, 3.00,1.341, 3.00,3.00L42.00,39.00 z M 33.00,18.00l-3.00,0.00 C 28.341,18.00, 27.00,19.344, 27.00,21.00l0.00,6.00 c0.00,1.659, 1.341,3.00, 3.00,3.00l3.00,0.00 c 1.659,0.00, 3.00-1.341, 3.00-3.00L36.00,21.00 C 36.00,19.344, 34.659,18.00, 33.00,18.00z M 33.00,27.00l-3.00,0.00 L30.00,21.00 l3.00,0.00 L33.00,27.00 z" >;
  }
});

module.exports = AlignVerticalCenters;
