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
    return <path d="M 24.00,45.00c-16.218,0.00-24.00-21.00-24.00-21.00s 7.782-21.00, 24.00-21.00s 24.00,21.00, 24.00,21.00S 40.218,45.00, 24.00,45.00z M 24.00,9.00 C 15.714,9.00, 9.00,15.714, 9.00,24.00s 6.714,15.00, 15.00,15.00s 15.00-6.714, 15.00-15.00S 32.286,9.00, 24.00,9.00z M 24.00,33.00c-4.971,0.00-9.00-4.029-9.00-9.00c0.00-1.059, 0.216-2.058, 0.552-3.00L21.00,21.00 L21.00,15.552 C 21.942,15.216, 22.941,15.00, 24.00,15.00c 4.971,0.00, 9.00,4.029, 9.00,9.00S 28.971,33.00, 24.00,33.00z" >;
  }
});

module.exports = SwitchOn;
