'use strict';

var React = require('react/addons');
var IconMixin = require('../icon_mixin');

module.exports = React.createClass({
  mixins: [IconMixin],

  renderGraphic: function(type) {
    return (
      <g>
        {type === 'alt' ?
          <path d="M 42.00,21.00c-3.312,0.00-6.00-2.688-6.00-6.00c0.00,3.312-2.688,6.00-6.00,6.00S 24.00,18.312, 24.00,15.00 c0.00,3.312-2.688,6.00-6.00,6.00S 12.00,18.312, 12.00,15.00c0.00,3.312-2.688,6.00-6.00,6.00S0.00,18.312,0.00,15.00l 6.00-15.00l36.00,0.00 l 6.00,15.00C 48.00,18.312, 45.312,21.00, 42.00,21.00z M 6.00,42.00L6.00,24.00 c 2.316,0.00, 4.404-0.90, 6.00-2.334L12.00,36.00 l0.00,0.00l0.00,6.00 L6.00,42.00 z M 42.00,24.00l0.00,18.00 l-6.00,0.00 l0.00,-6.00 l0.00,0.00L36.00,21.666 C 37.593,23.10, 39.687,24.00, 42.00,24.00z M 12.00,48.00l3.00,0.00 l0.00,-6.00 l18.00,0.00 l0.00,6.00 l3.00,0.00 l0.00,-3.00 l9.00,0.00 l0.00,3.00 L3.00,48.00 l0.00,-3.00 l9.00,0.00 L12.00,48.00 z" />
        :
          <path d="M 6.00,24.00 C 8.316,24.00 10.404,23.10 12.00,21.666 L 12.00,36.00 L 36.00,36.00 L 36.00,21.666 C 37.593,23.10 39.687,24.00 42.00,24.00 L 42.00,42.00 L 6.00,42.00 L 6.00,24.00 Z M 42.00,0.00 L 48.00,15.00 C 48.00,18.312 45.312,21.00 42.00,21.00 C 38.688,21.00 36.00,18.312 36.00,15.00 C 36.00,18.312 33.312,21.00 30.00,21.00 C 26.688,21.00 24.00,18.312 24.00,15.00 C 24.00,18.312 21.312,21.00 18.00,21.00 C 14.688,21.00 12.00,18.312 12.00,15.00 C 12.00,18.312 9.312,21.00 6.00,21.00 C 2.688,21.00 0.00,18.312 0.00,15.00 L 6.00,0.00 L 42.00,0.00 Z M 3.00,48.00 L 3.00,45.00 L 45.00,45.00 L 45.00,48.00 L 3.00,48.00 Z" />
        }
      </g>
    );
  }
});
