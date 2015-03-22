'use strict';

var React = require('react/addons');
var IconMixin = require('../icon_mixin');

module.exports = React.createClass({
  mixins: [IconMixin],

  renderGraphic: function(type) {
    return (
      <g>
        {type === 'alt' ?
          <path d="M 37.131,22.161C 36.942,22.758, 36.624,23.376, 36.00,24.00c-3.00,3.00-3.00,6.00-3.00,6.00l0.00,3.00 c0.00,1.659-1.341,3.00-3.00,3.00L18.00,36.00 c-1.659,0.00-3.00-1.341-3.00-3.00l0.00,-3.00 c0.00-2.181-1.572-4.341-2.439-5.373c-0.027-0.03-0.051-0.063-0.072-0.09 C 12.195,24.195, 12.00,24.00, 12.00,24.00L12.00,23.895 C 10.134,21.411, 9.00,18.351, 9.00,15.00c0.00-8.286, 6.714-15.00, 15.00-15.00s 15.00,6.714, 15.00,15.00C 39.00,17.607, 38.31,20.037, 37.131,22.161z M 24.00,6.00 C 19.029,6.00, 15.00,10.029, 15.00,15.00c0.00,3.915, 2.514,7.209, 6.00,8.448L21.00,27.00 c0.00,1.659, 1.341,3.00, 3.00,3.00s 3.00-1.341, 3.00-3.00L27.00,23.448 C 30.486,22.209, 33.00,18.915, 33.00,15.00 C 33.00,10.029, 28.971,6.00, 24.00,6.00z M 19.50,39.00l9.00,0.00 c 0.828,0.00, 1.50,0.672, 1.50,1.50S 29.328,42.00, 28.50,42.00l-9.00,0.00 C 18.672,42.00, 18.00,41.328, 18.00,40.50S 18.672,39.00, 19.50,39.00z M 22.50,45.00 l3.00,0.00 C 26.328,45.00, 27.00,45.672, 27.00,46.50S 26.328,48.00, 25.50,48.00l-3.00,0.00 C 21.672,48.00, 21.00,47.328, 21.00,46.50S 21.672,45.00, 22.50,45.00z" />
        :
          <path d="M 31.458,27.942c-0.474,0.666-0.969,1.302-1.497,1.866 C 29.964,29.877, 30.00,29.934, 30.00,30.00l0.00,6.00 c0.00,1.659-1.341,3.00-3.00,3.00L21.00,39.00 c-1.659,0.00-3.00-1.341-3.00-3.00l0.00,-6.00 c0.00-0.066, 0.036-0.123, 0.039-0.189 c-0.528-0.564-1.023-1.20-1.497-1.866C 12.057,25.35, 9.00,20.556, 9.00,15.00c0.00-8.286, 6.714-15.00, 15.00-15.00s 15.00,6.714, 15.00,15.00C 39.00,20.556, 35.943,25.35, 31.458,27.942z M 22.50,42.00l3.00,0.00 C 26.328,42.00, 27.00,42.672, 27.00,43.50S 26.328,45.00, 25.50,45.00l-3.00,0.00 C 21.672,45.00, 21.00,44.328, 21.00,43.50S 21.672,42.00, 22.50,42.00z" />
        }
      </g>
    );
  }
});
