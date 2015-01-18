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
    return <path d="M 24.00,48.00c 13.254,0.00, 24.00-10.746, 24.00-24.00c0.00-13.254-10.746-24.00-24.00-24.00S0.00,10.746,0.00,24.00 C0.00,37.254, 10.746,48.00, 24.00,48.00z M 24.00,6.00c 9.939,0.00, 18.00,8.061, 18.00,18.00c0.00,9.942-8.061,18.00-18.00,18.00s-18.00-8.058-18.00-18.00C 6.00,14.061, 14.061,6.00, 24.00,6.00z M 12.00,24.00 c0.00-6.627, 5.373-12.00, 12.00-12.00L24.00,9.00 C 15.714,9.00, 9.00,15.717, 9.00,24.00L12.00,24.00 z M 15.00,24.00c0.00,4.968, 4.029,9.00, 9.00,9.00s 9.00-4.032, 9.00-9.00c0.00-4.971-4.029-9.00-9.00-9.00S 15.00,19.029, 15.00,24.00z M 24.00,21.00 c 1.659,0.00, 3.00,1.344, 3.00,3.00S 25.659,27.00, 24.00,27.00S 21.00,25.656, 21.00,24.00S 22.341,21.00, 24.00,21.00z M 24.00,36.00l0.00,3.00 c 8.286,0.00, 15.00-6.714, 15.00-15.00l-3.00,0.00 C 36.00,30.627, 30.627,36.00, 24.00,36.00z" >;
  }
});

module.exports = SwitchOn;
