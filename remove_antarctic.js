const fs = require("fs");
const path = require("path");

const file = fs.readFileSync(path.join("countries", "110m", "all.geojson"), "utf8");
const geojson = JSON.parse(file);

console.log(geojson.features.length);

geojson.features = geojson.features.filter(f => f.properties.NAME !== "Antarctica");

console.log(geojson.features.length);
fs.writeFileSync("out.geojson", JSON.stringify(geojson));
