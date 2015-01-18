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
    return <path d="M 45.363,36.363l-9.00,9.00c-3.516,3.516-9.21,3.516-12.726,0.00l-15.00-15.00 C 6.879,28.605, 6.00,26.304, 6.00,24.00L6.00,6.00 l9.00,0.00 c0.00-1.659-1.341-3.00-3.00-3.00L6.00,3.00 C 4.341,3.00, 3.00,4.341, 3.00,6.00l0.00,4.50 C 3.00,11.328, 2.328,12.00, 1.50,12.00S0.00,11.328,0.00,10.50L0.00,6.00 c0.00-3.312, 2.688-6.00, 6.00-6.00l6.00,0.00 c 3.312,0.00, 6.00,2.688, 6.00,6.00l0.00,0.00l0.00,10.50 C 18.00,17.328, 17.328,18.00, 16.50,18.00S 15.00,17.328, 15.00,16.50L15.00,12.303 C 13.26,12.927, 12.00,14.547, 12.00,16.50 C 12.00,18.984, 14.016,21.00, 16.50,21.00S 21.00,18.984, 21.00,16.50L21.00,6.00 l3.00,0.00 c 2.304,0.00, 4.605,0.879, 6.363,2.637l 15.00,15.00C 48.879,27.153, 48.879,32.847, 45.363,36.363z" >;
  }
});

module.exports = SwitchOn;
