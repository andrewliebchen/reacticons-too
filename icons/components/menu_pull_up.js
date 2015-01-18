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
    return <path d="M 9.00,24.00l30.00,0.00 L39.00,21.00 L9.00,21.00 L9.00,24.00 z M 9.00,18.00l30.00,0.00 L39.00,15.00 L9.00,15.00 L9.00,18.00 z M 39.00,0.00L9.00,0.00 C 4.029,0.00,0.00,4.029,0.00,9.00l0.00,30.00 c0.00,4.971, 4.029,9.00, 9.00,9.00l30.00,0.00 c 4.971,0.00, 9.00-4.029, 9.00-9.00L48.00,9.00 C 48.00,4.029, 43.971,0.00, 39.00,0.00z M 42.00,39.00c0.00,1.659-1.341,3.00-3.00,3.00L9.00,42.00 c-1.656,0.00-3.00-1.341-3.00-3.00L6.00,9.00 c0.00-1.656, 1.344-3.00, 3.00-3.00l30.00,0.00 c 1.659,0.00, 3.00,1.344, 3.00,3.00L42.00,39.00 z M 9.00,12.00l30.00,0.00 L39.00,9.00 L9.00,9.00 L9.00,12.00 z M 26.121,27.882C 25.536,27.297, 24.768,27.00, 24.00,27.00S 22.464,27.297, 21.879,27.882 l-6.00,6.00c-0.855,0.855-1.113,2.142-0.651,3.267C 15.69,38.271, 16.788,39.00, 18.00,39.00l12.00,0.00 c 1.212,0.00, 2.31-0.729, 2.772-1.851 c 0.462-1.119, 0.207-2.415-0.651-3.27L 26.121,27.882z" >;
  }
});

module.exports = SwitchOn;