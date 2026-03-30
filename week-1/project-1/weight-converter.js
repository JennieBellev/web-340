/**
 * Author: Jennifer Snyder
 * Date: 03/29/2026
 * File Name: weight-converter.js
 * Description: Week 1 Chapter 1 Project 1 - Weight Converter
*/

"use strict";

const args = process.argv.slice(2);

if (args.length === 0) {
  console.error("Usage: node weight-converter.js <pounds>");
  process.exit(1);
}

const pounds = Number(args[0]);

if (isNaN(pounds)) {
  console.error("Input must be a number.");
  process.exit(1);
}

const kilograms = pounds * 0.453592;

console.log(kilograms.toFixed(2));