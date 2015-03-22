'use strict';

var React = require('react/addons');
var IconMixin = require('../icon_mixin');

module.exports = React.createClass({
  mixins: [IconMixin],

  renderGraphic: function(type) {
    return (
      <g>
        {!type ? <path d="M 24.00,48.00c-9.939,0.00-18.00-4.029-18.00-9.00l0.00,0.00l0.00,-5.064 C 6.00,38.91, 14.061,42.00, 24.00,42.00 s 18.00-3.09, 18.00-8.064L42.00,39.00 l0.00,0.00C 42.00,43.971, 33.939,48.00, 24.00,48.00z M 24.00,39.00c-9.939,0.00-18.00-4.029-18.00-9.00L6.00,24.936 C 6.00,29.91, 14.061,33.00, 24.00,33.00s 18.00-3.09, 18.00-8.064L42.00,30.00 C 42.00,34.971, 33.939,39.00, 24.00,39.00z M 24.00,30.00c-9.939,0.00-18.00-4.029-18.00-9.00L6.00,15.936 C 6.00,20.91, 14.061,24.00, 24.00,24.00s 18.00-3.09, 18.00-8.064L42.00,21.00 C 42.00,25.971, 33.939,30.00, 24.00,30.00z M 24.00,21.00 C 14.061,21.00, 6.00,16.971, 6.00,12.00L6.00,9.00 c0.00-4.971, 8.061-9.00, 18.00-9.00s 18.00,4.029, 18.00,9.00l0.00,3.00 C 42.00,16.971, 33.939,21.00, 24.00,21.00z" /> : null}
        {type === 'add' ? <path d="M 31.50,48.00C 24.045,48.00, 18.00,41.955, 18.00,34.50S 24.045,21.00, 31.50,21.00 S 45.00,27.045, 45.00,34.50S 38.955,48.00, 31.50,48.00z M 31.50,27.00C 27.357,27.00, 24.00,30.357, 24.00,34.50S 27.357,42.00, 31.50,42.00s 7.50-3.357, 7.50-7.50S 35.643,27.00, 31.50,27.00z M 33.00,39.00 l-3.00,0.00 l0.00,-3.00 L27.00,36.00 l0.00,-3.00 l3.00,0.00 l0.00,-3.00 l3.00,0.00 l0.00,3.00 l3.00,0.00 l0.00,3.00 l-3.00,0.00 L33.00,39.00 z M 39.00,15.936l0.00,3.942 c-0.45-0.231-0.885-0.48-1.359-0.672C 38.508,18.24, 39.00,17.148, 39.00,15.936z M 33.927,18.243 C 33.129,18.126, 32.331,18.00, 31.50,18.00C 28.011,18.00, 24.789,19.095, 22.122,20.943C 21.744,20.955, 21.384,21.00, 21.00,21.00C 11.061,21.00, 3.00,16.971, 3.00,12.00L3.00,9.00 c0.00-4.971, 8.061-9.00, 18.00-9.00 s 18.00,4.029, 18.00,9.00l0.00,3.00 C 39.00,14.43, 37.056,16.626, 33.927,18.243z M 18.936,23.919C 17.55,25.566, 16.494,27.471, 15.831,29.577C 8.43,28.461, 3.00,25.065, 3.00,21.00L3.00,15.936 C 3.00,20.556, 9.978,23.517, 18.936,23.919z M 15.192,32.586C 15.117,33.222, 15.00,33.843, 15.00,34.50c0.00,1.401, 0.228,2.736, 0.558,4.035 C 8.295,37.377, 3.00,34.017, 3.00,30.00L3.00,24.936 C 3.00,28.887, 8.118,31.617, 15.192,32.586z M 16.764,41.784c 1.221,2.463, 3.003,4.587, 5.229,6.168 C 21.66,47.958, 21.339,48.00, 21.00,48.00c-9.939,0.00-18.00-4.029-18.00-9.00l0.00,-5.064 C 3.00,38.175, 8.877,41.028, 16.764,41.784z" /> : null}
        {type === 'remove' ? <path d="M 31.50,48.00C 24.045,48.00, 18.00,41.955, 18.00,34.50S 24.045,21.00, 31.50,21.00 S 45.00,27.045, 45.00,34.50S 38.955,48.00, 31.50,48.00z M 31.50,27.00C 27.357,27.00, 24.00,30.357, 24.00,34.50S 27.357,42.00, 31.50,42.00s 7.50-3.357, 7.50-7.50S 35.643,27.00, 31.50,27.00z M 27.00,36.00 l0.00,-3.00 l9.00,0.00 l0.00,3.00 L27.00,36.00 z M 39.00,15.936l0.00,3.942 c-0.45-0.231-0.885-0.48-1.359-0.672C 38.508,18.24, 39.00,17.148, 39.00,15.936z M 33.927,18.243 C 33.129,18.126, 32.331,18.00, 31.50,18.00C 28.011,18.00, 24.789,19.095, 22.122,20.943C 21.744,20.955, 21.384,21.00, 21.00,21.00C 11.061,21.00, 3.00,16.971, 3.00,12.00L3.00,9.00 c0.00-4.971, 8.061-9.00, 18.00-9.00 s 18.00,4.029, 18.00,9.00l0.00,3.00 C 39.00,14.43, 37.056,16.626, 33.927,18.243z M 18.936,23.919C 17.55,25.566, 16.494,27.471, 15.831,29.577C 8.43,28.461, 3.00,25.065, 3.00,21.00L3.00,15.936 C 3.00,20.556, 9.978,23.517, 18.936,23.919z M 15.192,32.586C 15.117,33.222, 15.00,33.843, 15.00,34.50c0.00,1.401, 0.228,2.736, 0.558,4.035 C 8.295,37.377, 3.00,34.017, 3.00,30.00L3.00,24.936 C 3.00,28.887, 8.118,31.617, 15.192,32.586z M 16.764,41.784c 1.221,2.463, 3.003,4.587, 5.229,6.168 C 21.66,47.958, 21.339,48.00, 21.00,48.00c-9.939,0.00-18.00-4.029-18.00-9.00l0.00,-5.064 C 3.00,38.175, 8.877,41.028, 16.764,41.784z" /> : null}
      </g>
    );
  }
});
