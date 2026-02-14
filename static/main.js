import Feature from './node_modules/ol/Feature.js';
import Map from './node_modules/ol/Map.js';
import Overlay from './node_modules/ol/Overlay.js';
import Point from './node_modules/ol/geom/Point.js';
import View from './node_modules/ol/View.js';
import TileLayer from './node_modules/ol/layer/Tile.js';
import VectorLayer from './node_modules/ol/layer/Vector.js';
import {useGeographic, fromLonLat} from './node_modules/ol/proj.js';
import OSM from './node_modules/ol/source/OSM.js';
import VectorSource from './node_modules/ol/source/Vector.js';


const place = [-117, 33];
const point = new Point(fromLonLat(place));

const map = new Map({
  target: 'map',
  view: new View({
			center: fromLonLat(place),
			zoom: 8,
  }),
  layers: [
    new TileLayer({
      source: new OSM(),
    }),
		new VectorLayer({
				source: new VectorSource({
						features: [new Feature(point)],
				}),
				style: {
						'circle-radius': 9,
						'circle-fill-color': 'red',
				},
		}),
  ],
});
