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
    return <path d="M 24.00,45.00c-9.939,0.00-18.00-4.029-18.00-9.00c0.00-1.836, 1.113-3.54, 3.00-4.962L9.00,24.00 c0.00-6.195, 3.759-11.511, 9.123-13.80C 18.042,9.813, 18.00,9.411, 18.00,9.00c0.00-3.312, 2.688-6.00, 6.00-6.00s 6.00,2.688, 6.00,6.00c0.00,0.411-0.042,0.813-0.123,1.20 C 35.238,12.489, 39.00,17.805, 39.00,24.00l0.00,7.038 c 1.887,1.425, 3.00,3.126, 3.00,4.962C 42.00,40.971, 33.939,45.00, 24.00,45.00z M 24.00,30.00c-6.627,0.00-12.00,2.688-12.00,6.00s 5.373,6.00, 12.00,6.00 s 12.00-2.688, 12.00-6.00S 30.627,30.00, 24.00,30.00z M 24.00,39.00c-2.931,0.00-5.361-2.103-5.886-4.878C 19.695,33.432, 21.738,33.00, 24.00,33.00s 4.308,0.432, 5.889,1.122 C 29.361,36.897, 26.931,39.00, 24.00,39.00z" >;
  }
});

module.exports = SwitchOn;