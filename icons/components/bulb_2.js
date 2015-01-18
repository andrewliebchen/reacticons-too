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
    return <path d="M 37.131,22.161C 36.942,22.758, 36.624,23.376, 36.00,24.00c-3.00,3.00-3.00,6.00-3.00,6.00l0.00,3.00 c0.00,1.659-1.341,3.00-3.00,3.00L18.00,36.00 c-1.659,0.00-3.00-1.341-3.00-3.00l0.00,-3.00 c0.00-2.181-1.572-4.341-2.439-5.373c-0.027-0.03-0.051-0.063-0.072-0.09 C 12.195,24.195, 12.00,24.00, 12.00,24.00L12.00,23.895 C 10.134,21.411, 9.00,18.351, 9.00,15.00c0.00-8.286, 6.714-15.00, 15.00-15.00s 15.00,6.714, 15.00,15.00C 39.00,17.607, 38.31,20.037, 37.131,22.161z M 24.00,6.00 C 19.029,6.00, 15.00,10.029, 15.00,15.00c0.00,3.915, 2.514,7.209, 6.00,8.448L21.00,27.00 c0.00,1.659, 1.341,3.00, 3.00,3.00s 3.00-1.341, 3.00-3.00L27.00,23.448 C 30.486,22.209, 33.00,18.915, 33.00,15.00 C 33.00,10.029, 28.971,6.00, 24.00,6.00z M 19.50,39.00l9.00,0.00 c 0.828,0.00, 1.50,0.672, 1.50,1.50S 29.328,42.00, 28.50,42.00l-9.00,0.00 C 18.672,42.00, 18.00,41.328, 18.00,40.50S 18.672,39.00, 19.50,39.00z M 22.50,45.00 l3.00,0.00 C 26.328,45.00, 27.00,45.672, 27.00,46.50S 26.328,48.00, 25.50,48.00l-3.00,0.00 C 21.672,48.00, 21.00,47.328, 21.00,46.50S 21.672,45.00, 22.50,45.00z" >;
  }
});

module.exports = SwitchOn;
