'use strict';

var React = require('react/addons');
var IconMixin = require('../icon_mixin');

module.exports = React.createClass({
  mixins: [IconMixin],

  renderGraphic: function(type) {
    return (
      <g>
        {!type ? <path d="M 45.00,21.00l-3.00,0.00 c-0.105,0.00-0.192,0.051-0.297,0.06 c-0.456-2.769-1.527-5.316-3.093-7.506c 0.075-0.063, 0.168-0.087, 0.24-0.159l 2.121-2.121c 1.173-1.173, 1.173-3.069,0.00-4.242 s-3.072-1.173-4.242,0.00L 34.605,9.15c-0.069,0.069-0.096,0.165-0.159,0.24C 32.259,7.821, 29.709,6.753, 26.94,6.297 C 26.949,6.192, 27.00,6.105, 27.00,6.00L27.00,3.00 c0.00-1.656-1.341-3.00-3.00-3.00S 21.00,1.344, 21.00,3.00l0.00,3.00 c0.00,0.105, 0.051,0.192, 0.06,0.297 C 18.291,6.753, 15.741,7.821, 13.554,9.39C 13.491,9.315, 13.464,9.222, 13.395,9.15L 11.274,7.029c-1.173-1.173-3.072-1.173-4.245,0.00 c-1.17,1.173-1.17,3.069,0.00,4.242l 2.124,2.121C 9.222,13.464, 9.312,13.491, 9.39,13.554C 7.821,15.744, 6.753,18.291, 6.297,21.06 C 6.192,21.051, 6.105,21.00, 6.00,21.00L3.00,21.00 C 1.341,21.00,0.00,22.344,0.00,24.00s 1.341,3.00, 3.00,3.00l3.00,0.00 c 0.105,0.00, 0.192-0.048, 0.297-0.06 c 0.456,2.769, 1.527,5.316, 3.093,7.506c-0.075,0.063-0.168,0.087-0.237,0.159l-2.124,2.121c-1.17,1.173-1.17,3.072,0.00,4.242 c 1.173,1.173, 3.072,1.173, 4.245,0.00l 2.121-2.121c 0.069-0.069, 0.096-0.165, 0.159-0.24c 2.187,1.569, 4.737,2.637, 7.506,3.096 C 21.051,41.808, 21.00,41.895, 21.00,42.00l0.00,3.00 c0.00,1.659, 1.341,3.00, 3.00,3.00s 3.00-1.341, 3.00-3.00l0.00,-3.00 c0.00-0.105-0.051-0.192-0.06-0.297 c 2.769-0.459, 5.316-1.527, 7.506-3.096c 0.063,0.075, 0.087,0.171, 0.159,0.24l 2.124,2.121c 1.17,1.173, 3.069,1.173, 4.242,0.00 c 1.173-1.17, 1.173-3.069,0.00-4.242l-2.121-2.121c-0.072-0.069-0.165-0.093-0.24-0.159c 1.566-2.19, 2.637-4.737, 3.093-7.506 C 41.808,26.952, 41.895,27.00, 42.00,27.00l3.00,0.00 c 1.659,0.00, 3.00-1.344, 3.00-3.00S 46.659,21.00, 45.00,21.00z M 24.00,36.00c-6.627,0.00-12.00-5.373-12.00-12.00s 5.373-12.00, 12.00-12.00s 12.00,5.373, 12.00,12.00 S 30.627,36.00, 24.00,36.00z" /> : null}
        {type === 'alt' ? <path d="M 45.00,21.00l-3.00,0.00 c-0.105,0.00-0.192,0.051-0.297,0.06 c-0.456-2.769-1.527-5.316-3.093-7.506c 0.075-0.063, 0.168-0.087, 0.24-0.159l 2.121-2.121c 1.173-1.173, 1.173-3.069,0.00-4.242 s-3.072-1.173-4.245,0.00L 34.605,9.15c-0.069,0.069-0.096,0.165-0.159,0.24C 32.259,7.821, 29.709,6.753, 26.94,6.297 C 26.949,6.192, 27.00,6.105, 27.00,6.00L27.00,3.00 c0.00-1.656-1.341-3.00-3.00-3.00S 21.00,1.344, 21.00,3.00l0.00,3.00 c0.00,0.105, 0.051,0.192, 0.06,0.297 C 18.291,6.753, 15.741,7.821, 13.554,9.39C 13.491,9.315, 13.464,9.222, 13.395,9.15L 11.274,7.029c-1.173-1.173-3.072-1.173-4.245,0.00 c-1.17,1.173-1.17,3.069,0.00,4.242l 2.124,2.121C 9.222,13.464, 9.312,13.491, 9.39,13.554C 7.821,15.744, 6.753,18.291, 6.297,21.06 C 6.192,21.051, 6.105,21.00, 6.00,21.00L3.00,21.00 C 1.341,21.00,0.00,22.344,0.00,24.00s 1.341,3.00, 3.00,3.00l3.00,0.00 c 0.105,0.00, 0.192-0.048, 0.297-0.06 c 0.456,2.769, 1.527,5.316, 3.093,7.506c-0.075,0.063-0.168,0.087-0.237,0.159l-2.124,2.121c-1.17,1.173-1.17,3.072,0.00,4.242 c 1.173,1.173, 3.072,1.173, 4.245,0.00l 2.121-2.121c 0.069-0.069, 0.096-0.165, 0.159-0.24c 2.187,1.569, 4.737,2.637, 7.506,3.096 C 21.051,41.808, 21.00,41.895, 21.00,42.00l0.00,3.00 c0.00,1.659, 1.341,3.00, 3.00,3.00s 3.00-1.341, 3.00-3.00l0.00,-3.00 c0.00-0.105-0.051-0.192-0.06-0.297 c 2.769-0.459, 5.316-1.527, 7.506-3.096c 0.063,0.075, 0.087,0.171, 0.159,0.24l 2.121,2.121c 1.173,1.173, 3.072,1.173, 4.245,0.00 c 1.173-1.17, 1.173-3.069,0.00-4.242l-2.121-2.121c-0.072-0.069-0.165-0.093-0.24-0.159c 1.566-2.19, 2.637-4.737, 3.093-7.506 C 41.808,26.952, 41.895,27.00, 42.00,27.00l3.00,0.00 c 1.659,0.00, 3.00-1.344, 3.00-3.00S 46.659,21.00, 45.00,21.00z M 24.00,33.00c-4.971,0.00-9.00-4.032-9.00-9.00c0.00-4.971, 4.029-9.00, 9.00-9.00s 9.00,4.029, 9.00,9.00 C 33.00,28.968, 28.971,33.00, 24.00,33.00z" /> : null}
        {type === 'gears' ? <path d="M 45.00,33.00c 1.659,0.00, 3.00,1.341, 3.00,3.00s-1.341,3.00-3.00,3.00l-0.552,0.00 c-0.105,0.294-0.216,0.579-0.348,0.858l 0.384,0.384c 1.173,1.173, 1.173,3.069,0.00,4.242s-3.069,1.173-4.242,0.00L 39.858,44.10 c-0.279,0.132-0.564,0.243-0.858,0.348L39.00,45.00 c0.00,1.659-1.341,3.00-3.00,3.00s-3.00-1.341-3.00-3.00l0.00,-0.552 c-0.294-0.105-0.579-0.216-0.858-0.348 l-0.384,0.384c-1.173,1.173-3.069,1.173-4.242,0.00s-1.173-3.069,0.00-4.242L 27.90,39.858C 27.768,39.579, 27.657,39.294, 27.552,39.00L27.00,39.00 c-1.659,0.00-3.00-1.341-3.00-3.00s 1.341-3.00, 3.00-3.00l0.552,0.00 c 0.105-0.294, 0.216-0.579, 0.348-0.858l-0.384-0.384c-1.173-1.173-1.173-3.069,0.00-4.242 s 3.069-1.173, 4.242,0.00L 32.142,27.90C 32.421,27.768, 32.706,27.657, 33.00,27.552L33.00,27.00 c0.00-1.656, 1.341-3.00, 3.00-3.00s 3.00,1.344, 3.00,3.00l0.00,0.552 c 0.294,0.105, 0.579,0.216, 0.858,0.348l 0.384-0.384c 1.173-1.173, 3.069-1.173, 4.242,0.00s 1.173,3.069,0.00,4.242L 44.10,32.142 c 0.132,0.279, 0.243,0.564, 0.348,0.858L45.00,33.00 z M 36.00,30.00c-3.312,0.00-6.00,2.688-6.00,6.00s 2.688,6.00, 6.00,6.00s 6.00-2.688, 6.00-6.00S 39.312,30.00, 36.00,30.00z M 27.00,18.00L26.574,18.00 C 26.295,19.092, 25.86,20.115, 25.302,21.06l 0.306,0.303c 1.173,1.173, 1.173,3.072,0.00,4.242c-1.173,1.173-3.069,1.173-4.242,0.00L 21.06,25.302 C 20.115,25.86, 19.092,26.295, 18.00,26.574L18.00,27.00 c0.00,1.659-1.344,3.00-3.00,3.00S 12.00,28.659, 12.00,27.00L12.00,26.574 C 10.908,26.295, 9.885,25.86, 8.94,25.302L 8.637,25.605 c-1.173,1.173-3.072,1.173-4.245,0.00c-1.173-1.17-1.173-3.069,0.00-4.242L 4.698,21.06C 4.137,20.115, 3.708,19.092, 3.426,18.00L3.00,18.00 C 1.344,18.00,0.00,16.656,0.00,15.00s 1.344-3.00, 3.00-3.00l0.426,0.00 c 0.282-1.092, 0.714-2.115, 1.272-3.06L 4.392,8.637c-1.173-1.173-1.173-3.072,0.00-4.245 s 3.072-1.173, 4.245,0.00L 8.94,4.698C 9.885,4.137, 10.908,3.708, 12.00,3.426L12.00,3.00 c0.00-1.656, 1.344-3.00, 3.00-3.00s 3.00,1.344, 3.00,3.00l0.00,0.426 c 1.092,0.282, 2.115,0.714, 3.06,1.272l 0.303-0.306c 1.173-1.173, 3.069-1.173, 4.242,0.00s 1.173,3.072,0.00,4.245L 25.302,8.94 C 25.86,9.885, 26.295,10.908, 26.574,12.00L27.00,12.00 c 1.659,0.00, 3.00,1.344, 3.00,3.00S 28.659,18.00, 27.00,18.00z M 15.00,9.00C 11.688,9.00, 9.00,11.688, 9.00,15.00s 2.688,6.00, 6.00,6.00s 6.00-2.688, 6.00-6.00S 18.312,9.00, 15.00,9.00 z" /> : null}
      </g>
    );
  }
});
