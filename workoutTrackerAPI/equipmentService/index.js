const serverless = require('serverless-http');
const express = require('express');
const app = express();

app.get('/', function (req, res) {
  res.send('Hello World!');
});

app.post('/equipment', function (req, res) {
  let equipment = JSON.parse(req.body);
  if (validateEquipmentObject(equipment)) {
    res.status(400); // should actually tell error here lol
  }
  res.send(`${equipment.name} successfully added to equipment DB`);
});

const validateEquipmentObject = (equipment) => {
  if (equipment.name.length > 50) {
    return 'Equipment name too long'; // just throw here instead?
  } else if (equipment.weight < 0 || equipment.weight > 1000) {
    return 'Equipment must weight between 0 and 1000 pounds';
  } else if (equipment.substitutes.length > 5) {
    return 'Equipment can only have 5 substitutes';
  } else if (equipment.plateWeights.length > 15) {
    return 'Equipment cannot have more than 15 plate weights';
  }
  return null;
};

module.exports.handler = serverless(app);
