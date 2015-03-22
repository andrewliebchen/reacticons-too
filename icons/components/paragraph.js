'use strict';

var React = require('react/addons');
var IconMixin = require('../icon_mixin');

module.exports = React.createClass({
  mixins: [IconMixin],

  renderGraphic: function(type) {
    return (
      <g>
        {type === 'center' ? <path d="M 0.00,3.00 L 48.00,3.00 L 48.00,9.00 L 0.00,9.00 L 0.00,3.00 Z M 6.00,15.00 L 42.00,15.00 L 42.00,21.00 L 6.00,21.00 L 6.00,15.00 Z M 3.00,33.00 L 3.00,27.00 L 45.00,27.00 L 45.00,33.00 L 3.00,33.00 Z M 9.00,45.00 L 9.00,39.00 L 39.00,39.00 L 39.00,45.00 L 9.00,45.00 Z" /> : null}
        {type === 'centerOutline' ? <path d="M 39.00,48.00L9.00,48.00 c-4.971,0.00-9.00-4.032-9.00-9.00L0.00,9.00 c0.00-4.971, 4.029-9.00, 9.00-9.00l30.00,0.00 c 4.968,0.00, 9.00,4.029, 9.00,9.00l0.00,30.00 C 48.00,43.968, 43.968,48.00, 39.00,48.00z M 42.00,9.00c0.00-1.656-1.341-3.00-3.00-3.00L9.00,6.00 C 7.344,6.00, 6.00,7.344, 6.00,9.00l0.00,30.00 c0.00,1.659, 1.344,3.00, 3.00,3.00l30.00,0.00 c 1.659,0.00, 3.00-1.341, 3.00-3.00L42.00,9.00 z M 15.00,15.00L12.00,15.00 L12.00,12.00 l3.00,0.00 l18.00,0.00 l3.00,0.00 l0.00,3.00 l-3.00,0.00 L15.00,15.00 z M 30.00,18.00l0.00,3.00 L18.00,21.00 L18.00,18.00 L30.00,18.00 z M 33.00,27.00L15.00,27.00 L15.00,24.00 l18.00,0.00 L33.00,27.00 z M 27.00,33.00L21.00,33.00 l0.00,-3.00 l6.00,0.00 L27.00,33.00 z" /> : null}
        {type === 'justify' ? <path d="M 0.00,3.00 L 48.00,3.00 L 48.00,9.00 L 0.00,9.00 L 0.00,3.00 Z M 0.00,21.00 L 0.00,15.00 L 48.00,15.00 L 48.00,21.00 L 0.00,21.00 Z M 0.00,33.00 L 0.00,27.00 L 48.00,27.00 L 48.00,33.00 L 0.00,33.00 Z M 0.00,45.00 L 0.00,39.00 L 24.00,39.00 L 24.00,45.00 L 0.00,45.00 Z" /> : null}
        {type === 'justifyOutline' ? <path d="M 39.00,48.00L9.00,48.00 c-4.971,0.00-9.00-4.032-9.00-9.00L0.00,9.00 c0.00-4.971, 4.029-9.00, 9.00-9.00l30.00,0.00 c 4.968,0.00, 9.00,4.029, 9.00,9.00l0.00,30.00 C 48.00,43.968, 43.968,48.00, 39.00,48.00z M 42.00,9.00c0.00-1.656-1.341-3.00-3.00-3.00L9.00,6.00 C 7.344,6.00, 6.00,7.344, 6.00,9.00l0.00,30.00 c0.00,1.659, 1.344,3.00, 3.00,3.00l30.00,0.00 c 1.659,0.00, 3.00-1.341, 3.00-3.00L42.00,9.00 z M 12.00,24.00l24.00,0.00 l0.00,3.00 L12.00,27.00 L12.00,24.00 z M 12.00,18.00l24.00,0.00 l0.00,3.00 L12.00,21.00 L12.00,18.00 z M 12.00,12.00l24.00,0.00 l0.00,3.00 L12.00,15.00 L12.00,12.00 z M 24.00,33.00L12.00,33.00 l0.00,-3.00 l12.00,0.00 L24.00,33.00 z" /> : null}
        {type === 'left' ? <path d="M 0.00,3.00 L 48.00,3.00 L 48.00,9.00 L 0.00,9.00 L 0.00,3.00 Z M 36.00,15.00 L 36.00,21.00 L 0.00,21.00 L 0.00,15.00 L 36.00,15.00 Z M 0.00,33.00 L 0.00,27.00 L 42.00,27.00 L 42.00,33.00 L 0.00,33.00 Z M 0.00,45.00 L 0.00,39.00 L 30.00,39.00 L 30.00,45.00 L 0.00,45.00 Z" /> : null}
        {type === 'leftOutline' ? <path d="M 39.00,48.00L9.00,48.00 c-4.971,0.00-9.00-4.032-9.00-9.00L0.00,9.00 c0.00-4.971, 4.029-9.00, 9.00-9.00l30.00,0.00 c 4.968,0.00, 9.00,4.029, 9.00,9.00l0.00,30.00 C 48.00,43.968, 43.968,48.00, 39.00,48.00z M 42.00,9.00c0.00-1.656-1.341-3.00-3.00-3.00L9.00,6.00 C 7.344,6.00, 6.00,7.344, 6.00,9.00l0.00,30.00 c0.00,1.659, 1.344,3.00, 3.00,3.00l30.00,0.00 c 1.659,0.00, 3.00-1.341, 3.00-3.00L42.00,9.00 z M 12.00,12.00l18.00,0.00 l0.00,3.00 L12.00,15.00 L12.00,12.00 z M 24.00,18.00l0.00,3.00 L12.00,21.00 L12.00,18.00 L24.00,18.00 z M 27.00,27.00L12.00,27.00 L12.00,24.00 l15.00,0.00 L27.00,27.00 z M 21.00,33.00L12.00,33.00 l0.00,-3.00 l9.00,0.00 L21.00,33.00 z" /> : null}
        {type === 'right' ? <path d="M 0.00,3.00 L 48.00,3.00 L 48.00,9.00 L 0.00,9.00 L 0.00,3.00 Z M 12.00,21.00 L 12.00,15.00 L 48.00,15.00 L 48.00,21.00 L 12.00,21.00 Z M 6.00,33.00 L 6.00,27.00 L 48.00,27.00 L 48.00,33.00 L 6.00,33.00 Z M 18.00,45.00 L 18.00,39.00 L 48.00,39.00 L 48.00,45.00 L 18.00,45.00 Z" /> : null}
        {type === 'rightOutline' ? <path d="M 39.00,48.00L9.00,48.00 c-4.971,0.00-9.00-4.032-9.00-9.00L0.00,9.00 c0.00-4.971, 4.029-9.00, 9.00-9.00l30.00,0.00 c 4.971,0.00, 9.00,4.029, 9.00,9.00l0.00,30.00 C 48.00,43.968, 43.971,48.00, 39.00,48.00z M 42.00,9.00c0.00-1.656-1.341-3.00-3.00-3.00L9.00,6.00 C 7.344,6.00, 6.00,7.344, 6.00,9.00l0.00,30.00 c0.00,1.659, 1.344,3.00, 3.00,3.00l30.00,0.00 c 1.659,0.00, 3.00-1.341, 3.00-3.00L42.00,9.00 z M 27.00,30.00l9.00,0.00 l0.00,3.00 L27.00,33.00 L27.00,30.00 z M 21.00,24.00l15.00,0.00 l0.00,3.00 L21.00,27.00 L21.00,24.00 z M 24.00,18.00l12.00,0.00 l0.00,3.00 L24.00,21.00 L24.00,18.00 z M 18.00,12.00l18.00,0.00 l0.00,3.00 L18.00,15.00 L18.00,12.00 z" /> : null}
      </g>
    );
  }
});
