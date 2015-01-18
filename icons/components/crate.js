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
    return <path d="M 47.133,42.798L 42.00,37.665L42.00,10.431 l 5.169-5.166 C 47.688,6.405, 48.00,7.662, 48.00,9.00l0.00,30.00 C 48.00,40.362, 47.676,41.64, 47.133,42.798z M 10.056,6.00L 5.022,0.966C 6.225,0.369, 7.563,0.00, 9.00,0.00l30.00,0.00 c 1.437,0.00, 2.775,0.369, 3.978,0.966L 37.944,6.00L10.056,6.00 z M 6.00,37.665l-5.133,5.133C 0.324,41.64,0.00,40.362,0.00,39.00L0.00,9.00 c0.00-1.338, 0.312-2.595, 0.834-3.735L 6.00,10.431L6.00,37.665 z M 36.00,36.00L12.00,36.00 l0.00,-6.00 l24.00,0.00 L36.00,36.00 z M 12.00,12.00l24.00,0.00 l0.00,6.00 L12.00,18.00 L12.00,12.00 z M 36.00,27.00L12.00,27.00 L12.00,21.00 l24.00,0.00 L36.00,27.00 z M 37.851,42.00l 5.067,5.067 C 41.73,47.649, 40.413,48.00, 39.00,48.00L9.00,48.00 c-1.41,0.00-2.73-0.351-3.918-0.933L 10.149,42.00L37.851,42.00 z" >;
  }
});

module.exports = SwitchOn;
