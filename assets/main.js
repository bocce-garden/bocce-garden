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
const coronado_dunes = new Point(fromLonLat([-117.182, 32.682]));
const tijuana_slough = new Point(fromLonLat([-117.132, 32.565]));
const golden_hill_park = new Point(fromLonLat([-117.140, 32.720]));
const sandburg_park = new Point(fromLonLat([-117.148, 32.924]));
const liberty_station_knolls = new Point(fromLonLat([-117.2142, 32.7328]));
const south_belmont = new Point(fromLonLat([-117.2522, 32.7681]));
const old_trolley_barn_park = new Point(fromLonLat([-117.1441, 32.7627]));
const pioneer_park = new Point(fromLonLat([-117.1774, 32.7492]));
const sdsu_river_park = new Point(fromLonLat([-117.1223, 32.7807]));
const south_ponto = new Point(fromLonLat([-117.3121, 33.0850]));
const ob_lifeguard_tower = new Point(fromLonLat([-117.2525, 32.7486]));
const mathewson_park = new Point(fromLonLat([-117.1727, 32.6872]));
const bonita_cove = new Point(fromLonLat([-117.2487, 32.7700]));
const beachcombers = new Point(fromLonLat([-117.2496, 32.7657]));
const river_park_rocks = new Point(fromLonLat([-117.1245, 32.7790]));
const memorial_park = new Point(fromLonLat([-117.0810, 32.6388]));
const mission_bay_dune = new Point(fromLonLat([-117.2090, 32.7848]));
const park_west = new Point(fromLonLat([-117.1581, 32.7268]));
const death_valley = new Point(fromLonLat([-117.0523, 36.6281]));

const map = new Map({
  target: 'map',
  view: new View({
			center: fromLonLat(sd_center),
			zoom: 9,
  }),
  layers: [
    new TileLayer({
      source: new OSM(),
    }),
		new VectorLayer({
				source: new VectorSource({
						features: [
								new Feature(coronado_dunes),
								new Feature(tijuana_slough),
								new Feature(golden_hill_park),
								new Feature(sandburg_park),
								new Feature(liberty_station_knolls),
								new Feature(south_belmont),
								new Feature(old_trolley_barn_park),
								new Feature(sdsu_river_park),
								new Feature(south_ponto),
								new Feature(ob_lifeguard_tower),
								new Feature(mathewson_park),
								new Feature(bonita_cove),
								new Feature(beachcombers),
								new Feature(river_park_rocks),
								new Feature(memorial_park),
								new Feature(mission_bay_dune),
								new Feature(park_west),
								new Feature(death_valley),
						],
				}),
				style: {
						'circle-radius': 7,
						'circle-fill-color': 'red',
				},
		}),
  ],
});
