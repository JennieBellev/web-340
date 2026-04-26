/**
 * Author: Jennifer Snyder
 * Date: 04/26/2026
 * File Name: pie.js
 * Description:
 */
"use strict";

function bakePie(pieType, ingredients) {
  // Base Ingredients
  const essentials = ["flour", "sugar", "butter"];

  // Check if the base ingredients are included
  const hasEverything = essentials.every(item => ingredients.includes(item));

  if (!hasEverything) {
    console.warn("Missing essential ingredients! Please include flour, sugar, and butter.");
    process.exit(1);
  }

  // The Successful Message
  return `Successfully baked a ${pieType} pie!`;
}

module.exports = { bakePie };