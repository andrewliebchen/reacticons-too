'use strict';

var React = require('react/addons');

var ArrowDown = React.createClass({
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
    return <path d="M 48.00,24.00c0.00-13.254-10.746-24.00-24.00-24.00S0.00,10.746,0.00,24.00s 10.746,24.00, 24.00,24.00 S 48.00,37.254, 48.00,24.00z M 42.00,24.00c0.00,9.939-8.061,18.00-18.00,18.00s-18.00-8.061-18.00-18.00s 8.061-18.00, 18.00-18.00S 42.00,14.061, 42.00,24.00zM 26.121,35.124C 25.536,35.709, 24.768,36.003, 24.00,36.003 s-1.536-0.294-2.121-0.879l-6.00-6.00C 15.021,28.266, 14.766,26.973, 15.228,25.851C 15.69,24.732, 16.788,24.00, 18.00,24.00l3.00,0.00 L21.00,15.00 c0.00-1.659, 1.341-3.00, 3.00-3.00s 3.00,1.341, 3.00,3.00 l0.00,9.00 l3.00,0.00 c 1.212,0.00, 2.31,0.732, 2.772,1.851c 0.462,1.125, 0.204,2.415-0.651,3.273L 26.121,35.124z" >;
  }
});

module.exports = ArrowDown;
