/**
 * Author: Jennifer Snyder
 * Date: 04/01/2026
 * File Name: index.js
 * Description: This file contains the main entry point for the CLI program
*/

"use strict";

const { createRecipe, setTimer, quit } = require("./recipes");  

// TODO: Import your module using require
console.log(createRecipe(["flour", "sugar", "eggs"])); 
console.log(setTimer(30));
console.log(quit());


// TODO: Implement your CLI program here