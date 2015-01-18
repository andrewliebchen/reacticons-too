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
    return <path d="M 45.00,42.00c-4.59,0.201-13.341,0.987-18.09,3.453 C 26.685,46.887, 25.497,48.00, 24.00,48.00c-1.494,0.00-2.685-1.113-2.91-2.547C 16.341,42.987, 7.59,42.201, 3.00,42.00c-1.656,0.00-3.00-1.341-3.00-3.00L0.00,3.00 c0.00-1.656, 1.344-3.00, 3.00-3.00c 0.105,0.00, 0.192,0.051, 0.297,0.06C 23.928,0.594, 24.00,6.00, 24.00,6.00s 0.072-5.406, 20.703-5.94C 44.808,0.051, 44.895,0.00, 45.00,0.00 c 1.659,0.00, 3.00,1.344, 3.00,3.00l0.00,36.00 C 48.00,40.659, 46.659,42.00, 45.00,42.00z M 21.00,9.402C 17.13,7.434, 10.728,6.615, 6.00,6.264l0.00,29.898 C 14.052,36.573, 18.558,37.779, 21.00,39.00 L21.00,9.402 z M 42.00,6.264c-4.725,0.351-11.13,1.17-15.00,3.135L27.00,39.00 c 2.442-1.221, 6.945-2.427, 15.00-2.835L42.00,6.264 z" >;
  }
});

module.exports = SwitchOn;
