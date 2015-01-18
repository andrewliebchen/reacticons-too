'use strict';

var React = require('react/addons');

var Anchor = React.createClass({
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
    return <path d="M 24.00,48.00c-13.254,0.00-24.00-10.746-24.00-24.00l0.00,0.00L0.00,18.00 l 12.00,12.00L7.059,30.00 C 9.213,36.054, 14.508,40.602, 21.00,41.697L21.00,27.00 L18.00,27.00 C 16.344,27.00, 15.00,25.659, 15.00,24.00s 1.344-3.00, 3.00-3.00l3.00,0.00 L21.00,17.448 C 17.511,16.209, 15.00,12.915, 15.00,9.00 c0.00-4.557, 3.399-8.283, 7.791-8.877C 23.181,0.042, 23.586,0.00, 24.00,0.00s 0.819,0.042, 1.209,0.123C 29.601,0.717, 33.00,4.443, 33.00,9.00 c0.00,3.915-2.514,7.209-6.00,8.448L27.00,21.00 l3.00,0.00 c 1.659,0.00, 3.00,1.341, 3.00,3.00s-1.341,3.00-3.00,3.00L27.00,27.00 l0.00,14.697 c 6.492-1.095, 11.79-5.646, 13.941-11.697L36.00,30.00 l 12.00-12.00l0.00,6.00 l0.00,0.00 C 48.00,37.254, 37.254,48.00, 24.00,48.00z M 24.00,6.00C 22.344,6.00, 21.00,7.341, 21.00,9.00s 1.344,3.00, 3.00,3.00s 3.00-1.341, 3.00-3.00S 25.656,6.00, 24.00,6.00z" >;
  }
});

module.exports = Anchor;