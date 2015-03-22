'use strict';

var React = require('react/addons');
var IconMixin = require('../icon_mixin');

module.exports = React.createClass({
  mixins: [IconMixin],

  renderGraphic: function(type) {
    return (
      <g>
        {type === 'alt' ?
          <path d="M 39.00,30.00L 39.00,30.00c-1.659,0.00-3.00,1.341-3.00,3.00l0.00,6.00 c0.00,4.968-4.032,9.00-9.00,9.00l0.00,-6.00 c 1.659,0.00, 3.00-1.341, 3.00-3.00l0.00,-6.00 c0.00-4.968, 4.032-9.00, 9.00-9.00c-4.968,0.00-9.00-4.029-9.00-9.00L30.00,9.00 l0.00,0.00c0.00-1.656-1.341-3.00-3.00-3.00L27.00,0.00 c 4.968,0.00, 9.00,4.029, 9.00,9.00l0.00,6.00 c0.00,1.656, 1.341,3.00, 3.00,3.00c 3.312,0.00, 6.00,2.688, 6.00,6.00S 42.312,30.00, 39.00,30.00z M 12.00,39.00l0.00,-6.00 c0.00-1.659-1.344-3.00-3.00-3.00l0.00,0.00c-3.312,0.00-6.00-2.688-6.00-6.00s 2.688-6.00, 6.00-6.00 c 1.656,0.00, 3.00-1.344, 3.00-3.00L12.00,9.00 c0.00-4.971, 4.029-9.00, 9.00-9.00l0.00,6.00 C 19.344,6.00, 18.00,7.344, 18.00,9.00l0.00,0.00l0.00,6.00 c0.00,4.971-4.029,9.00-9.00,9.00c 4.971,0.00, 9.00,4.032, 9.00,9.00l0.00,6.00 c0.00,1.659, 1.344,3.00, 3.00,3.00l0.00,6.00 C 16.029,48.00, 12.00,43.968, 12.00,39.00z" />
        :
          <path d="M 42.00,18.00 C 45.312,18.00 48.00,20.688 48.00,24.00 C 48.00,27.312 45.312,30.00 42.00,30.00 C 40.341,30.00 39.00,31.341 39.00,33.00 L 39.00,39.00 C 39.00,43.968 34.968,48.00 30.00,48.00 L 30.00,42.00 C 31.659,42.00 33.00,40.659 33.00,39.00 L 33.00,33.00 C 33.00,28.032 37.032,24.00 42.00,24.00 C 37.032,24.00 33.00,19.971 33.00,15.00 L 33.00,9.00 C 33.00,7.344 31.659,6.00 30.00,6.00 L 30.00,0.00 C 34.968,0.00 39.00,4.029 39.00,9.00 L 39.00,15.00 C 39.00,16.656 40.341,18.00 42.00,18.00 Z M 9.00,9.00 C 9.00,4.029 13.029,0.00 18.00,0.00 L 18.00,6.00 C 16.344,6.00 15.00,7.344 15.00,9.00 L 15.00,15.00 C 15.00,19.971 10.971,24.00 6.00,24.00 C 10.971,24.00 15.00,28.032 15.00,33.00 L 15.00,39.00 C 15.00,40.659 16.344,42.00 18.00,42.00 L 18.00,48.00 C 13.029,48.00 9.00,43.968 9.00,39.00 L 9.00,33.00 C 9.00,31.341 7.656,30.00 6.00,30.00 C 2.688,30.00 0.00,27.312 0.00,24.00 C 0.00,20.688 2.688,18.00 6.00,18.00 C 7.656,18.00 9.00,16.656 9.00,15.00 L 9.00,9.00 Z M 24.00,21.00 C 25.656,21.00 27.00,22.344 27.00,24.00 C 27.00,25.656 25.656,27.00 24.00,27.00 C 22.344,27.00 21.00,25.656 21.00,24.00 C 21.00,22.344 22.344,21.00 24.00,21.00 Z" />
        }
      </g>
    );
  }
});
