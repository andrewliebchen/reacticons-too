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
    return <path d="M 39.00,9.00L9.00,9.00 l0.00,30.00 l30.00,0.00 L39.00,9.00 z M 12.00,12.00l9.00,0.00 l0.00,3.00 L12.00,15.00 L12.00,12.00 z M 12.00,21.00l15.00,0.00 l0.00,3.00 L12.00,24.00 L12.00,21.00 z M 24.00,36.00L12.00,36.00 l0.00,-3.00 l12.00,0.00 L24.00,36.00 z M 33.00,30.00L12.00,30.00 L12.00,27.00 l21.00,0.00 L33.00,30.00 z M 36.00,15.00l-3.00,0.00 L33.00,12.00 l3.00,0.00 L36.00,15.00 z M 48.00,9.00L48.00,3.00 c0.00-1.656-1.341-3.00-3.00-3.00l-6.00,0.00 c0.00,1.659-1.341,3.00-3.00,3.00s-3.00-1.341-3.00-3.00L27.00,0.00 c0.00,1.659-1.341,3.00-3.00,3.00 S 21.00,1.659, 21.00,0.00L15.00,0.00 c0.00,1.659-1.341,3.00-3.00,3.00S 9.00,1.659, 9.00,0.00L3.00,0.00 C 1.341,0.00,0.00,1.344,0.00,3.00l0.00,6.00 c 1.659,0.00, 3.00,1.344, 3.00,3.00c0.00,1.659-1.341,3.00-3.00,3.00l0.00,6.00 c 1.659,0.00, 3.00,1.344, 3.00,3.00c0.00,1.659-1.341,3.00-3.00,3.00l0.00,6.00 c 1.659,0.00, 3.00,1.344, 3.00,3.00c0.00,1.659-1.341,3.00-3.00,3.00l0.00,6.00 c0.00,1.659, 1.341,3.00, 3.00,3.00l6.00,0.00 c0.00-1.656, 1.341-3.00, 3.00-3.00s 3.00,1.344, 3.00,3.00l6.00,0.00 c0.00-1.656, 1.341-3.00, 3.00-3.00s 3.00,1.344, 3.00,3.00l6.00,0.00 c0.00-1.656, 1.341-3.00, 3.00-3.00s 3.00,1.344, 3.00,3.00l6.00,0.00 c 1.659,0.00, 3.00-1.341, 3.00-3.00l0.00,-6.00 c-1.659,0.00-3.00-1.341-3.00-3.00c0.00-1.656, 1.341-3.00, 3.00-3.00L48.00,27.00 c-1.659,0.00-3.00-1.341-3.00-3.00c0.00-1.656, 1.341-3.00, 3.00-3.00L48.00,15.00 c-1.659,0.00-3.00-1.341-3.00-3.00 C 45.00,10.344, 46.341,9.00, 48.00,9.00z M 42.00,42.00L6.00,42.00 L6.00,6.00 l36.00,0.00 L42.00,42.00 z" >;
  }
});

module.exports = SwitchOn;