const assert = require('assert');
const { calculateDistance } = require('../src/distance-calculator');

function testEarthToMars() {
    try {
        assert.strictEqual(calculateDistance(1.00, 1.52), 0.52);
        console.log("PASSED: testEarthToMars");
        return true;
    } catch (error) {
        console.error(`Failed testEarthToMars: ${error.message}`);
        return false;
    }
}

function testVenusToJupiter() {
    try {
        assert.strictEqual(calculateDistance(0.72, 5.20), 4.48);
        console.log("PASSED: testVenusToJupiter");
        return true;
    } catch (error) {
        console.error(`Failed testVenusToJupiter: ${error.message}`);
        return false;
    }
}

function testMercuryToEarth() {
    try {
        assert.strictEqual(calculateDistance(0.39, 1.00), 0.61);
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