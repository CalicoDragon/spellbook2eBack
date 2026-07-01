// This util builds the array the $and of the mongoose find will use, using the full query of the user.

// Definition of the different filters and their find structure, ready for a mongo find()
const expressionMapper = (field, subquery) => {
  switch (field) {
    case "name":
      return { name: new RegExp(subquery, "i") };

    case "description":
    case "desc":
      return { "system.description.value": new RegExp(subquery, "i") };

    case "tradition":
    case "trad":
      return { "system.traits.traditions": subquery };

    case "!tradition":
    case "!trad":
      return { "system.traits.traditions": { $not: { $eq: subquery } } };

    case "rank":
    case "lvl":
    case "r":
      return { "system.level.value": parseInt(subquery) };

    case "!rank":
    case "!lvl":
    case "!r":
      return { "system.level.value": { $not: { $eq: parseInt(subquery) } } };

    case ">rank":
    case ">lvl":
    case ">r":
      return { "system.level.value": {$gt: parseInt(subquery)} };

    case "<rank":
    case "<lvl":
    case "<r":
      return { "system.level.value": {$lt: parseInt(subquery)} };

    case "trait":
    case "tr":
    case "t":
      return { "system.traits.value": subquery };

    case "!trait":
    case "!tr":
    case "!t":
      return { "system.traits.value": { $not: { $eq: subquery } } };

    case "actions":
    case "a":
      return { "system.time.value": subquery };

    case "!actions":
    case "!a":
      return { "system.time.value": { $not: { $eq: subquery } } };

    case "save":
      return { "system.defense.save.statistic": subquery };

    case "!save":
      return { "system.defense.save.statistic": { $not: { $eq: subquery } } };

    case "area":
      return { "system.area.type": subquery };

    case "!area":
      return { "system.area.type": { $not: { $eq: subquery } } };

    case "sustained":
      return { "system.duration.sustained": subquery };

    case "range":
      return { "system.range.value": subquery };

    case "!range":
      return { "system.range.value": { $not:{ $eq: subquery } } };

    case "duration":
      return { "system.duration.value": subquery };

    case "!duration":
      return { "system.duration.value": { $not:{ $eq: subquery } } };

    case "target":
      return { "system.target.value": subquery };

    case "!target":
      return { "system.target.value": { $not:{ $eq: subquery } } };

    default:
      console.log("expressionMapper hit default");
      break;
  }
};

const buildQuery = (query) => {
  // Using regex to separate the query in arrays but keeping inside quotes unsplit
  let queryArray = query.match(
    /\w+:\w+|\!\w+:\w+|<\w+:\w+|>\w+:\w+|\w+?:"[\w\s]*"|\!\w+?:"[\w\s]*"|\w+/g,
  );

  queryArray.forEach((element, i) => {
    // Remove quotations marks
    element = element.replace(/["]+/g, "");

    // If the element does not contain ':', it means that the user wrote a name filter since those dont require it
    const [field, subquery] = element.includes(":")
      ? element.split(":")
      : ["name", element];

    queryArray[i] = expressionMapper(field, subquery);
  });

  return queryArray;
};

// export
module.exports = buildQuery;
