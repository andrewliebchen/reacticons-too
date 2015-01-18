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
    return <path d="M 39.00,0.00L9.00,0.00 C 4.029,0.00,0.00,4.029,0.00,9.00l0.00,30.00 c0.00,4.971, 4.029,9.00, 9.00,9.00l30.00,0.00 c 4.971,0.00, 9.00-4.029, 9.00-9.00L48.00,9.00 C 48.00,4.029, 43.971,0.00, 39.00,0.00z M 6.00,9.00 c0.00-1.656, 1.344-3.00, 3.00-3.00l3.00,0.00 c 1.656,0.00, 3.00,1.344, 3.00,3.00l0.00,3.00 c0.00,1.656-1.344,3.00-3.00,3.00L9.00,15.00 C 7.344,15.00, 6.00,13.656, 6.00,12.00L6.00,9.00 z M 42.00,39.00c0.00,1.659-1.341,3.00-3.00,3.00L9.00,42.00 c-1.656,0.00-3.00-1.341-3.00-3.00L6.00,21.00 l10.758,0.00 l 7.143,7.143l-2.022,2.073c-0.858,0.858-1.116,2.373-0.651,3.492S 22.785,36.00, 24.00,36.00l8.484,0.00 c 0.828,0.00, 1.836-0.78, 2.379-1.317C 35.406,34.137, 36.00,32.946, 36.00,32.118L36.00,23.631 c0.00-1.212-0.99-2.307-2.109-2.772 c-1.119-0.465-2.67-0.207-3.528,0.651L 28.086,23.847L 21.00,16.758L21.00,6.00 l18.00,0.00 c 1.659,0.00, 3.00,1.344, 3.00,3.00L42.00,39.00 z" >;
  }
});

module.exports = SwitchOn;
