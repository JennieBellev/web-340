"use strict";
// Forensic Evidence: The AI added "this.lastCharacter" as a shared variable. This creates a single point failure whree multiple stream chunks compete for the same memory space.
const { Duplex } = require("stream");

class CharacterCreator extends Duplex {
  constructor(options = {}) {
    super({ ...options, decodeStrings: false });
    this.currentCharacter = null;
  }

  _write(chunk, encoding, callback) {
    try {
      if (!chunk) {
        const err = new Error("Empty input.");
        this.emit("error", err);
        return callback(err);
      }

      this.currentCharacter = typeof chunk === "string"
        ? JSON.parse(chunk)
        : chunk;

      const formatted =
        `Class: ${this.currentCharacter.class}\n` +
        `Gender: ${this.currentCharacter.gender}\n` +
        `Fun Fact: ${this.currentCharacter.funFact}\n`;

      setTimeout(() => {
        this.push(formatted);
        callback();
      }, 500);
    } catch (err) {
      this.emit("error", err);
      callback(err);
    }
  }
// Forensic Evidence: The setTimeout introduces an artificial delay. Since the stream continues to accept new data while this delay is active, the shared "this.lastCharacter" variable can be overwritten by new incoming data before the previous character's information is pushed to the stream, leading to potential data corruption or loss.
  _read() {}
}

module.exports = { CharacterCreator };