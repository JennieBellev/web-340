"use strict";
function calculateDistance(planet1, planet2) {
  // TODO: Implement this function
}

module.exports = calculateDistance;

function calculateDistance(planet1AU, planet2AU) {
    // Subtract one distance from the other
    let distance = Math.abs(planet1AU - planet2AU);
    
    // Round to 2 decimal places to match test expectations
    return parseFloat(distance.toFixed(2));
}

// Export the function so the test file can see it
module.exports = { calculateDistance };