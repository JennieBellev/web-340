const assert = require("assert");
const { calculateDistance } = require("../src/distance-calculator");

function testEarthToMars() {
  try {
    assert.strictEqual(calculateDistance("Earth", "Mars"), 0.52);
    console.log("PASSED: testEarthToMars");
    return true;
  } catch (error) {
    console.error(`Failed testEarthToMars: ${error.message}`);
    return false;
  }
}

function testVenusToJupiter() {
  try {
    assert.strictEqual(calculateDistance("Venus", "Jupiter"), 4.48);
    console.log("PASSED: testVenusToJupiter");
    return true;
  } catch (error) {
    console.error(`Failed testVenusToJupiter: ${error.message}`);
    return false;
  }
}

function testMercuryToEarth() {
  try {
    assert.strictEqual(calculateDistance("Mercury", "Earth"), 0.61);
    console.log("PASSED: testMercuryToEarth");
    return true;
  } catch (error) {
    console.error(`Failed testMercuryToEarth: ${error.message}`);
    return false;
  }
}

// Run the tests
testEarthToMars();
testVenusToJupiter();
testMercuryToEarth();