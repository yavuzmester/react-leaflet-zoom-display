"use strict";

const React = require("react");
const ReactDOM = require("react-dom");
const {GeoMap} = require("components");

ReactDOM.render(
    React.createElement(GeoMap, {center: [51.505, -0.09], zoom: 13}),
    document.getElementById("container")
);
