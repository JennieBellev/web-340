/**
 * Author:Jennifer Snyder
 * Date: 04/19/2026
 * File Name:taco-stand.js
 * Description: Class module for the TacoStandEmitter class that extends EventEmitter and implements the following methods: serveCustomer, prepareTaco, and handleRush
 */
"use strict";

const EventEmitter = require('events');

class TacoStandEmitter extends EventEmitter {
    serveCustomer(customer) {
        this.emit("serve", customer);
    }

    prepareTaco(taco) {
        this.emit("prepare", taco);
    }

    handleRush(rush) {
        this.emit("rush", rush);
    }
}

module.exports = TacoStandEmitter;  