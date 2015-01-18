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
    return <path d="M 24.00,48.00c-13.254,0.00-24.00-10.746-24.00-24.00s 10.746-24.00, 24.00-24.00c 13.254,0.00, 24.00,10.746, 24.00,24.00 S 37.254,48.00, 24.00,48.00z M 24.00,42.00c 8.817,0.00, 16.122-6.348, 17.67-14.715c-5.886,4.596-14.376,4.251-19.791-1.164c-3.516-3.516-9.213-3.516-12.729,0.00 C 8.121,27.153, 7.428,28.38, 7.002,29.679C 9.39,36.819, 16.056,42.00, 24.00,42.00z M 24.00,6.00C 15.183,6.00, 7.878,12.348, 6.33,20.715 c 5.886-4.596, 14.376-4.251, 19.791,1.164c 3.516,3.516, 9.213,3.516, 12.726,0.00c 1.032-1.032, 1.722-2.259, 2.151-3.558 C 38.61,11.184, 31.944,6.00, 24.00,6.00z" >;
  }
});

module.exports = SwitchOn;
