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
    return <path d="M 39.00,0.00L 21.00,6.00L12.00,6.00 C 7.029,6.00, 3.00,10.029, 3.00,15.00C 1.344,15.00,0.00,16.344,0.00,18.00 s 1.344,3.00, 3.00,3.00c0.00,3.702, 2.241,6.879, 5.436,8.262L 6.00,45.00c0.00,1.659, 1.344,3.00, 3.00,3.00l6.00,0.00 c 1.656,0.00, 3.00-1.341, 3.00-3.00l 2.25-15.00L21.00,30.00 l 18.00,6.00c 4.968,0.00, 9.00-8.061, 9.00-18.00 S 43.968,0.00, 39.00,0.00z M 12.00,18.00L9.00,18.00 L9.00,12.00 l3.00,0.00 L12.00,18.00 z M 18.00,18.00L15.00,18.00 L15.00,12.00 l3.00,0.00 L18.00,18.00 z M 39.00,30.00c-3.312,0.00-6.00-5.373-6.00-12.00s 2.688-12.00, 6.00-12.00s 6.00,5.373, 6.00,12.00S 42.312,30.00, 39.00,30.00z M 39.00,15.00l-2.724,0.00 C 36.108,15.942, 36.00,16.941, 36.00,18.00s 0.108,2.058, 0.276,3.00L39.00,21.00 c 1.659,0.00, 3.00-1.344, 3.00-3.00S 40.659,15.00, 39.00,15.00z" >;
  }
});

module.exports = SwitchOn;
