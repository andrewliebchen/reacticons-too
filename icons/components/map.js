'use strict';

var React = require('react/addons');
var IconMixin = require('../icon_mixin');

module.exports = React.createClass({
  mixins: [IconMixin],

  renderGraphic: function(type) {
    return (
      <g>
        {type === 'alt' ?
          <path d="M 9.00,30.00l0.00,3.00 l3.00,0.00 l0.00,-3.00 L9.00,30.00 z M 9.00,39.00l3.00,0.00 l0.00,-3.00 L9.00,36.00 L9.00,39.00 z M 18.00,39.00l0.00,-3.00 L15.00,36.00 l0.00,3.00 L18.00,39.00 z M 12.00,36.00l3.00,0.00 l0.00,-3.00 L12.00,33.00 L12.00,36.00 z M 18.00,9.00L15.00,9.00 l0.00,3.00 l3.00,0.00 L18.00,9.00 z M 12.00,21.00l3.00,0.00 L15.00,18.00 L12.00,18.00 L12.00,21.00 z M 36.00,18.00l-3.00,0.00 l0.00,3.00 l3.00,0.00 L36.00,18.00 z M 12.00,12.00L9.00,12.00 l0.00,3.00 l3.00,0.00 L12.00,12.00 z M 21.00,36.00l3.00,0.00 l0.00,-3.00 L21.00,33.00 L21.00,36.00 z M 36.00,27.00l3.00,0.00 L39.00,24.00 l-3.00,0.00 L36.00,27.00 z M 33.00,33.00l3.00,0.00 l0.00,-3.00 l-3.00,0.00 L33.00,33.00 z M 27.00,18.00l3.00,0.00 L30.00,15.00 L27.00,15.00 L27.00,18.00 z M 39.00,0.00L9.00,0.00 C 4.029,0.00,0.00,4.029,0.00,9.00l0.00,30.00 c0.00,4.968, 4.029,9.00, 9.00,9.00l30.00,0.00 c 4.971,0.00, 9.00-4.032, 9.00-9.00L48.00,9.00 C 48.00,4.029, 43.971,0.00, 39.00,0.00z M 42.00,39.00 c0.00,1.659-1.341,3.00-3.00,3.00L9.00,42.00 c-1.659,0.00-3.00-1.341-3.00-3.00L6.00,9.00 c0.00-1.656, 1.341-3.00, 3.00-3.00l30.00,0.00 c 1.659,0.00, 3.00,1.344, 3.00,3.00L42.00,39.00 z M 15.00,33.00l3.00,0.00 l0.00,-3.00 L15.00,30.00 L15.00,33.00 z M 27.00,21.00L24.00,21.00 l0.00,3.00 l3.00,0.00 L27.00,21.00 z M 27.00,36.00l3.00,0.00 l0.00,-3.00 L27.00,33.00 L27.00,36.00 z M 21.00,21.00L18.00,21.00 l0.00,3.00 l3.00,0.00 L21.00,21.00 z" />
        :
          <path d="M 39.00,48.00L9.00,48.00 c-4.971,0.00-9.00-4.032-9.00-9.00L0.00,9.00 c0.00-4.971, 4.029-9.00, 9.00-9.00l1.674,0.00 C 8.88,1.989, 7.554,4.374, 6.789,7.014C 6.312,7.545, 6.00,8.232, 6.00,9.00l0.00,30.00 c0.00,1.659, 1.341,3.00, 3.00,3.00l30.00,0.00 c 1.659,0.00, 3.00-1.341, 3.00-3.00L42.00,9.00 c0.00-0.768-0.312-1.455-0.789-1.986C 40.446,4.374, 39.12,1.989, 37.329,0.00L39.00,0.00 c 4.971,0.00, 9.00,4.029, 9.00,9.00l0.00,30.00 C 48.00,43.968, 43.971,48.00, 39.00,48.00z M 12.00,12.00 c0.00-6.627, 5.373-12.00, 12.00-12.00s 12.00,5.373, 12.00,12.00s-12.00,24.00-12.00,24.00S 12.00,18.627, 12.00,12.00z M 30.00,12.00c0.00-3.312-2.688-6.00-6.00-6.00S 18.00,8.688, 18.00,12.00s 2.688,6.00, 6.00,6.00S 30.00,15.312, 30.00,12.00z" />
        }
      </g>
    );
  }
});
