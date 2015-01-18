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
    return <path d="M 38.85,12.153c-8.202-8.202-21.498-8.202-29.697,0.00L 4.908,7.908 c 10.545-10.545, 27.642-10.545, 38.187,0.00L 38.85,12.153z M 15.516,18.516L 11.274,14.271c 7.029-7.029, 18.426-7.029, 25.452,0.00l-4.242,4.245 C 27.801,13.827, 20.199,13.827, 15.516,18.516z M 39.00,45.00c0.00,1.659-1.341,3.00-3.00,3.00L12.00,48.00 c-1.659,0.00-3.00-1.341-3.00-3.00l0.00,-3.00 c 0.87-4.275, 3.855-7.89, 7.518-10.002 C 15.564,30.567, 15.00,28.851, 15.00,27.00c0.00-4.971, 4.029-9.00, 9.00-9.00s 9.00,4.029, 9.00,9.00c0.00,1.851-0.564,3.567-1.518,4.998C 35.145,34.11, 38.13,37.725, 39.00,42.00L39.00,45.00 z M 24.00,24.00C 22.341,24.00, 21.00,25.341, 21.00,27.00s 1.341,3.00, 3.00,3.00s 3.00-1.341, 3.00-3.00S 25.659,24.00, 24.00,24.00z M 32.448,42.00C 31.209,38.514, 27.915,36.00, 24.00,36.00s-7.209,2.514-8.448,6.00 L32.448,42.00 z" >;
  }
});

module.exports = SwitchOn;