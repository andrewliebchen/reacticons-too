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
    return <path d="M 46.599,46.599c-1.758,1.758-4.605,1.758-6.363,0.00l-7.941-7.941 C 29.028,40.749, 25.167,42.00, 21.00,42.00c-11.598,0.00-21.00-9.402-21.00-21.00s 9.402-21.00, 21.00-21.00s 21.00,9.402, 21.00,21.00c0.00,4.167-1.251,8.028-3.342,11.295l 7.941,7.941 C 48.357,41.994, 48.357,44.841, 46.599,46.599z M 21.00,6.00C 12.717,6.00, 6.00,12.717, 6.00,21.00c0.00,8.286, 6.717,15.00, 15.00,15.00c 8.286,0.00, 15.00-6.714, 15.00-15.00 C 36.00,12.717, 29.286,6.00, 21.00,6.00z M 27.00,24.00L24.00,24.00 l0.00,3.00 c0.00,1.659-1.341,3.00-3.00,3.00S 18.00,28.659, 18.00,27.00L18.00,24.00 L15.00,24.00 C 13.344,24.00, 12.00,22.656, 12.00,21.00s 1.344-3.00, 3.00-3.00l3.00,0.00 L18.00,15.00 c0.00-1.656, 1.341-3.00, 3.00-3.00 s 3.00,1.344, 3.00,3.00l0.00,3.00 l3.00,0.00 c 1.659,0.00, 3.00,1.344, 3.00,3.00S 28.659,24.00, 27.00,24.00z" >;
  }
});

module.exports = SwitchOn;
