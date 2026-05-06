// Imports
const spellModel = require("../models/spell.model");
const buildQuery = require("../utils/queryBuilder.util");

// Functions
const getSpellsByQuery = async (req, res) => {
  try {
    // use $and which takes an array of queries (made in the queryBuidler.util)
    const spells = await spellModel
      .find({
        $and: buildQuery(req.body.query),
      })
      .sort({ "system.level.value": 1, name: 1 });

    res.send(spells);
  } catch (error) {
    console.log(`[spell.controller > getSpellsByQuery] ERROR: ${error}`);
    res.status(500).send({ error: "Something broke!" });
  }
};

const getAllSpells = async (req, res) => {
  try {
    const spells = await spellModel
      .find({})
      .sort({ "system.level.value": 1, name: 1 });

    res.send(spells);
  } catch (error) {
    console.log(`[spell.controller > getAllSpells] ERROR: ${error}`);
    res.status(500).send({ error: "Something broke!" });
  }
};

// Exports
module.exports = { getSpellsByQuery, getAllSpells };
