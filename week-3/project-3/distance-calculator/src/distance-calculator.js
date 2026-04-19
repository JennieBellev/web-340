"use strict";

const planetDistances = {
  Mercury: 0.39,
  Venus: 0.72,
  Earth: 1.0,
  Mars: 1.52,
  Jupiter: 5.2,
  Saturn: 9.58,
  Uranus: 19.2,
  Neptune: 30.05
};

function calculateDistance(planet1, planet2) {
  let planet1AU = planetDistances[planet1];
  let planet2AU = planetDistances[planet2];

  let distance = Math.abs(planet1AU - planet2AU);

  return parseFloat(distance.toFixed(2));
}


module.exports = { calculateDistance };