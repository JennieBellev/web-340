/**
 * Author:Jennifer Snyder
 * Date: 04/19/2026
 * File Name:taco-stand.spec.js
 * Description:Class module test for taco stand event
 */

"use strict";

const assert = require("assert");
const TacoStandEmitter = require("../src/taco-stand");
const tacoStand = new TacoStandEmitter();

// TODO: Write tests for the TacoStandEmitter methods
function testServeCustomer() {
    try {
        // Register a listener here
        tacoStand.once("serve", (customer) => {
            assert.strictEqual(customer, "Jennie");
        });

        // Trigger the action
        tacoStand.serveCustomer("Jennie");

            console.log("Passed testServeCustomer");
            return true;
        } catch (err) {
        console.error(`Failed testServeCustomer: ${err}`);
        return false;
    }
}

// Run the test
testServeCustomer();