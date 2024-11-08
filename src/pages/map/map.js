import Map from "https://cdn.skypack.dev/ol/Map.js";
import View from "https://cdn.skypack.dev/ol/View.js";
import TileLayer from "https://cdn.skypack.dev/ol/layer/Tile.js";
import OSM from "https://cdn.skypack.dev/ol/source/OSM.js";
import { fromLonLat } from "https://cdn.skypack.dev/ol/proj.js";
import loadComponent from "/src/helpers/loadComponent.js";
import sidebarTogle from "/src/components/sidebar/sidebar.js";
import smoothScroll from "/src/helpers/smoothScroll.js";

const attributions =
  '<a href="https://petapedia.github.io/" target="_blank">&copy; PetaPedia Indonesia</a> ';

const place = [107.13563336552649, -6.8165156551551505];

const basemap = new TileLayer({
  source: new OSM({ attributions: attributions }),
});

const defaultstartmap = new View({
  center: fromLonLat(place),
  zoom: 9,
});

export default function loadMap() {
  const promises = [
    loadComponent("aside.sidebar", "/src/components/sidebar/sidebar.html"),
    loadComponent("header.topbar", "/src/components/topbar/topbar.html"),
    loadComponent("", "/src/pages/map/map.html"),
  ];

  Promise.all(promises)
    .then(() => {
      sidebarTogle();
      smoothScroll();
      const map = new Map({
        target: "content-map",
        layers: [basemap],
        view: defaultstartmap,
      });

      console.log(map);
    })
    .catch((error) => {
      console.error("Error loading components:", error);
    });
}
