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
    return <path d="M 46.599,46.599c-1.758,1.758-4.605,1.758-6.363,0.00l-10.548-10.545 C 26.718,37.89, 23.25,39.00, 19.50,39.00C 8.73,39.00,0.00,30.27,0.00,19.50S 8.73,0.00, 19.50,0.00S 39.00,8.73, 39.00,19.50c0.00,3.75-1.11,7.218-2.943,10.191l 10.545,10.545 C 48.357,41.994, 48.357,44.841, 46.599,46.599z M 19.50,6.00C 12.045,6.00, 6.00,12.045, 6.00,19.50S 12.045,33.00, 19.50,33.00S 33.00,26.955, 33.00,19.50S 26.955,6.00, 19.50,6.00z M 21.00,27.00L18.00,27.00 L18.00,21.00 L12.00,21.00 L12.00,18.00 l6.00,0.00 L18.00,12.00 l3.00,0.00 l0.00,6.00 l6.00,0.00 l0.00,3.00 L21.00,21.00 L21.00,27.00 z" >;
  }
});

module.exports = SwitchOn;
