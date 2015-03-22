'use strict';

var React = require('react/addons');
var IconMixin = require('../icon_mixin');

module.exports = React.createClass({
  mixins: [IconMixin],

  renderGraphic: function(type) {
    return (
      <g>
        {type === 'columnCenter' || !type ? <path d="M 39.00,48.00L9.00,48.00 c-4.971,0.00-9.00-4.029-9.00-9.00L0.00,9.00 c0.00-4.971, 4.029-9.00, 9.00-9.00l30.00,0.00 c 4.968,0.00, 9.00,4.029, 9.00,9.00l0.00,30.00 C 48.00,43.971, 43.968,48.00, 39.00,48.00z M 33.00,42.00L33.00,18.00 L15.00,18.00 l0.00,24.00 L33.00,42.00 z M 6.00,39.00c0.00,1.659, 1.344,3.00, 3.00,3.00l3.00,0.00 L12.00,18.00 L6.00,18.00 L6.00,39.00 z M 42.00,9.00 c0.00-1.656-1.341-3.00-3.00-3.00L9.00,6.00 C 7.344,6.00, 6.00,7.344, 6.00,9.00l0.00,6.00 l6.00,0.00 l3.00,0.00 l18.00,0.00 l3.00,0.00 l6.00,0.00 L42.00,9.00 z M 42.00,18.00l-6.00,0.00 l0.00,24.00 l3.00,0.00 c 1.659,0.00, 3.00-1.341, 3.00-3.00L42.00,18.00 z" /> : null}
        {type === 'contentLeft' ? <path d="M 39.00,48.00L9.00,48.00 c-4.971,0.00-9.00-4.029-9.00-9.00L0.00,9.00 c0.00-4.971, 4.029-9.00, 9.00-9.00l30.00,0.00 c 4.968,0.00, 9.00,4.029, 9.00,9.00l0.00,30.00 C 48.00,43.971, 43.968,48.00, 39.00,48.00z M 42.00,9.00c0.00-1.656-1.341-3.00-3.00-3.00L9.00,6.00 C 7.344,6.00, 6.00,7.344, 6.00,9.00l0.00,30.00 c0.00,1.659, 1.344,3.00, 3.00,3.00l30.00,0.00 c 1.659,0.00, 3.00-1.341, 3.00-3.00L42.00,9.00 z M 27.00,27.00l9.00,0.00 l0.00,9.00 L27.00,36.00 L27.00,27.00 z M 27.00,12.00l9.00,0.00 l0.00,9.00 L27.00,21.00 L27.00,12.00 z M 12.00,12.00l9.00,0.00 l0.00,24.00 L12.00,36.00 L12.00,12.00 z" /> : null}
        {type === 'contentRight' ? <path d="M 9.00,48.00l30.00,0.00 c 4.968,0.00, 9.00-4.029, 9.00-9.00L48.00,9.00 c0.00-4.971-4.032-9.00-9.00-9.00L9.00,0.00 C 4.029,0.00,0.00,4.029,0.00,9.00l0.00,30.00 C0.00,43.971, 4.029,48.00, 9.00,48.00z M 6.00,9.00c0.00-1.656, 1.344-3.00, 3.00-3.00l30.00,0.00 c 1.659,0.00, 3.00,1.344, 3.00,3.00l0.00,30.00 c0.00,1.659-1.341,3.00-3.00,3.00L9.00,42.00 c-1.656,0.00-3.00-1.341-3.00-3.00L6.00,9.00 z M 21.00,27.00L12.00,27.00 l0.00,9.00 l9.00,0.00 L21.00,27.00 z M 21.00,12.00L12.00,12.00 l0.00,9.00 l9.00,0.00 L21.00,12.00 z M 36.00,12.00L27.00,12.00 l0.00,24.00 l9.00,0.00 L36.00,12.00 z" /> : null}
        {type === 'sidebarLeft' ? <path d="M 39.00,48.00L9.00,48.00 c-4.971,0.00-9.00-4.029-9.00-9.00L0.00,9.00 c0.00-4.971, 4.029-9.00, 9.00-9.00l30.00,0.00 c 4.968,0.00, 9.00,4.029, 9.00,9.00l0.00,30.00 C 48.00,43.971, 43.968,48.00, 39.00,48.00z M 42.00,39.00L42.00,18.00 L18.00,18.00 l0.00,24.00 l21.00,0.00 C 40.659,42.00, 42.00,40.659, 42.00,39.00z M 9.00,42.00l6.00,0.00 L15.00,18.00 L6.00,18.00 l0.00,21.00 C 6.00,40.659, 7.344,42.00, 9.00,42.00z M 39.00,6.00L9.00,6.00 C 7.344,6.00, 6.00,7.344, 6.00,9.00l0.00,6.00 l9.00,0.00 l3.00,0.00 l24.00,0.00 L42.00,9.00 C 42.00,7.344, 40.659,6.00, 39.00,6.00z" /> : null}
        {type === 'sidebarRight' ? <path d="M 9.00,48.00l30.00,0.00 c 4.968,0.00, 9.00-4.029, 9.00-9.00L48.00,9.00 c0.00-4.971-4.032-9.00-9.00-9.00L9.00,0.00 C 4.029,0.00,0.00,4.029,0.00,9.00l0.00,30.00 C0.00,43.971, 4.029,48.00, 9.00,48.00z M 6.00,39.00L6.00,18.00 l24.00,0.00 l0.00,24.00 L9.00,42.00 C 7.344,42.00, 6.00,40.659, 6.00,39.00z M 39.00,42.00l-6.00,0.00 L33.00,18.00 l9.00,0.00 l0.00,21.00 C 42.00,40.659, 40.659,42.00, 39.00,42.00 z M 9.00,6.00l30.00,0.00 c 1.659,0.00, 3.00,1.344, 3.00,3.00l0.00,6.00 l-9.00,0.00 l-3.00,0.00 L6.00,15.00 L6.00,9.00 C 6.00,7.344, 7.344,6.00, 9.00,6.00z" /> : null}
      </g>
    );
  }
});
