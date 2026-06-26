// Import
const mongoose = require("mongoose");

const SpellScheme = new mongoose.Schema({
  _id:  String,
 
  folder: String,
  img:  String,
  name:  String,
  system: {
    area: {},
    cost: {
      value: String,
    },
    counteraction: Boolean,
    damage: {},
    defense: {
      save: {
        basic: Boolean,
        statistic: String,
      },
    },
    description: {
      value: String,
    },
    duration: {
      sustained: Boolean,
      value: String,
    },
    heightening: {
      damage: {},
      interval: Number,
      type: String,
    },
    level: {
      value: Number,
    },
    publication: {
      license: String,
      remaster: Boolean,
      title: String,
    },
    range: {
      value: String,
    },
    requirements: String,
    rules: [{}],
    target: {
      value: String,
    },
    time: {
      value: String,
    },
    traits: {
      rarity: String,
      traditions: [String],
      value: [String],
    },
  },
  type: String,
});

// Export
module.exports = mongoose.model("spells", SpellScheme, "spells");
