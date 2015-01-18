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
    return <path d="M 39.00,48.00L9.00,48.00 c-4.971,0.00-9.00-4.029-9.00-9.00l0.00,-9.00 l 10.335-10.335 C 10.701,20.268, 11.124,20.844, 11.637,21.36l 2.748,2.748L 6.00,33.00l9.00,0.00 l0.00,3.00 c0.00,1.659, 1.344,3.00, 3.00,3.00l12.00,0.00 c 1.659,0.00, 3.00-1.341, 3.00-3.00l0.00,-3.00 l9.00,0.00 l-8.385-8.892 l 2.748-2.748c 0.516-0.516, 0.936-1.092, 1.305-1.692L 48.00,30.00l0.00,9.00 C 48.00,43.971, 43.971,48.00, 39.00,48.00z M 26.121,23.118 C 25.536,23.703, 24.768,23.997, 24.00,23.997S 22.464,23.703, 21.879,23.118l-6.00-6.00C 15.024,16.26, 14.766,14.97, 15.228,13.848C 15.69,12.729, 16.788,12.00, 18.00,12.00l3.00,0.00 L21.00,3.00 c0.00-1.656, 1.344-3.00, 3.00-3.00c 1.659,0.00, 3.00,1.344, 3.00,3.00l0.00,9.00 l3.00,0.00 c 1.212,0.00, 2.31,0.732, 2.772,1.851c 0.462,1.122, 0.207,2.409-0.651,3.267L 26.121,23.118z" >;
  }
});

module.exports = SwitchOn;
