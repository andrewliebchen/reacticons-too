'use strict';

var React = require('react/addons');

var Asterisk = React.createClass({
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
    return <path d="M 42.588,20.196C 41.058,21.078, 36.348,22.911, 32.034,24.00 c 4.314,1.089, 9.024,2.922, 10.557,3.804C 45.456,29.46, 46.44,33.129, 44.784,36.00c-1.656,2.871-5.325,3.852-8.193,2.196 c-1.533-0.885-5.475-4.053-8.574-7.245C 29.232,35.235, 30.00,40.233, 30.00,42.00c0.00,3.312-2.688,6.00-6.00,6.00s-6.00-2.688-6.00-6.00 c0.00-1.767, 0.768-6.765, 1.986-11.049c-3.099,3.192-7.041,6.36-8.574,7.245C 8.541,39.852, 4.872,38.871, 3.216,36.00S 2.541,29.46, 5.412,27.804 C 6.942,26.922, 11.652,25.089, 15.969,24.00C 11.652,22.911, 6.942,21.078, 5.412,20.196C 2.541,18.54, 1.56,14.871, 3.216,12.00s 5.325-3.852, 8.196-2.196 c 1.533,0.885, 5.475,4.053, 8.574,7.245C 18.768,12.765, 18.00,7.767, 18.00,6.00c0.00-3.312, 2.688-6.00, 6.00-6.00s 6.00,2.688, 6.00,6.00c0.00,1.767-0.768,6.765-1.986,11.049 c 3.099-3.192, 7.044-6.36, 8.574-7.245c 2.868-1.656, 6.54-0.675, 8.193,2.196C 46.44,14.871, 45.456,18.54, 42.588,20.196z" >;
  }
});

module.exports = Asterisk;
