/**
 * Author: Jennifer Snyder
 * Date: 04/19/2026
 * File Name: index.js
 * Description: CLI program to interact with the TacoStandEmitter class 
 */

"use strict";

const readline = require("readline");
const TacoStandEmitter = require("./tacoStand");

const tacoStand = new TacoStandEmitter();

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Event listeners for the tacoStand object
tacoStand.on("serve", (customer) => {
  console.log(`Taco Stand serves: ${customer}`);
});

tacoStand.on("prepare", (taco) => {
  console.log(`Taco Stand prepares: ${taco}`);
});

tacoStand.on("rush", (rush) => {
  console.log(`Taco Stand rush: ${rush}`);
});

// TODO: Set up event listeners for the tacoStand object
rl.on("line", (input) => {
  const [command, ...args] = input.split(" ");
  const argument = args.join(" ");

  if (command === "serve") {
    tacoStand.serveCustomer(argument);
  } else if (command === "prepare") {
    tacoStand.prepareTaco(argument);
  } else if (command === "rush") {
    tacoStand.handleRush(argument);
} else if (command === "exit" || command === "quit") {
    rl.close(); // Give yourself a way out!
  } else {
      console.log("Invalid command! Try again.");
  }
});

console.log(`Enter a command: "serve", "prepare", or "rush", followed by a space and the argument.`);