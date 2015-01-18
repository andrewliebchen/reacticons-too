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
    return <path d="M 46.599,40.236l-10.545-10.545C 37.89,26.718, 39.00,23.25, 39.00,19.50 C 39.00,8.73, 30.27,0.00, 19.50,0.00S0.00,8.73,0.00,19.50S 8.73,39.00, 19.50,39.00c 3.75,0.00, 7.218-1.11, 10.188-2.943l 10.548,10.545c 1.758,1.758, 4.605,1.758, 6.363,0.00 S 48.357,41.994, 46.599,40.236z M 19.50,33.00C 12.045,33.00, 6.00,26.955, 6.00,19.50S 12.045,6.00, 19.50,6.00S 33.00,12.045, 33.00,19.50S 26.955,33.00, 19.50,33.00z" >;
  }
});

module.exports = SwitchOn;
