//import './map-style.css';

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


const sd_center = [-117.419, 32.929];

const garden = document.getElementById('garden');
const latitude = garden.querySelectorAll('div.latitude').item(0).innerHTML;
const longitude = garden.querySelectorAll('div.longitude').item(0).innerHTML;

if (latitude && longitude) {
  const map = new Map({
    target: 'map',
    view: new View({
      center: fromLonLat([longitude, latitude]),
      zoom: 12,
    }),
    layers: [
      new TileLayer({
        source: new OSM(),
      }),
      new VectorLayer({
        source: new VectorSource({
          features: [
            new Feature(new Point(fromLonLat([longitude, latitude]))),
          ],
        }),
        style: {
          'circle-radius': 7,
          'circle-fill-color': 'red',
        },
      }),
    ],
  });
  document.getElementById('map').style = "width: 100%; height: 425px;"
}
