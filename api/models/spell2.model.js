// Import
const mongoose = require("mongoose");

const SpellScheme = new mongoose.Schema({
  _id: { type: "String" },
  folder: { type: "String" },
  img: { type: "String" },
  name: { type: "String" },
  system: {
    area: { type: "Mixed" },
    cost: {
      value: { type: "String" },
    },
    counteraction: { type: "Boolean" },
    damage: {
      0: {
        applyMod: { type: "Boolean" },
        category: { type: "Mixed" },
        formula: { type: "String" },
        kinds: { type: ["String"] },
        type: { type: "String" },
      },
    },
    defense: { type: "Mixed" },
    description: {
      value: { type: "String" },
    },
    duration: {
      sustained: { type: "Boolean" },
      value: { type: "String" },
    },
    heightening: {
      damage: {
        0: { type: "String" },
      },
      interval: { type: "Number" },
      type: { type: "String" },
    },
    level: {
      value: { type: "Number" },
    },
    publication: {
      license: { type: "String" },
      remaster: { type: "Boolean" },
      title: { type: "String" },
    },
    range: {
      value: { type: "String" },
    },
    requirements: { type: "String" },
    rules: { type: "Array" },
    target: {
      value: { type: "String" },
    },
    time: {
      value: { type: "Date" },
    },
    traits: {
      rarity: { type: "String" },
      traditions: { type: ["String"] },
      value: { type: ["String"] },
    },
  },
  type: { type: "String" },
});

// Export
module.exports = mongoose.model("Spell", SpellScheme);
