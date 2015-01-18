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
    return <path d="M 45.363,23.637l-21.00-21.00C 22.605,0.879, 20.304,0.00, 18.00,0.00L0.00,0.00 l0.00,18.00 c0.00,2.304, 0.879,4.605, 2.637,6.363l 21.00,21.00c 3.516,3.516, 9.21,3.516, 12.726,0.00l 9.00-9.00C 48.879,32.847, 48.879,27.153, 45.363,23.637z M 41.121,32.121l-9.00,9.00c-1.173,1.173-3.069,1.173-4.242,0.00l-21.00-21.00C 6.294,19.536, 6.00,18.768, 6.00,18.00L6.00,6.00 l12.00,0.00 c 0.768,0.00, 1.536,0.294, 2.121,0.879l 21.00,21.00 C 42.294,29.052, 42.294,30.948, 41.121,32.121z M 12.00,9.00C 10.341,9.00, 9.00,10.341, 9.00,12.00s 1.341,3.00, 3.00,3.00s 3.00-1.341, 3.00-3.00S 13.659,9.00, 12.00,9.00z" >;
  }
});

module.exports = SwitchOn;
