const express = require('express');
const app = express();
const gameRoute = express.Router();

// Student model
let Game = require('../database/model/Game');

// Get all student
gameRoute.route('/').get((req, res) => {
  Game.find((error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
})


// Add player backend work
gameRoute.route('/add-game').post((req, res, next) => {
  console.log(req.body  )
  Game.create(req.body, (error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
});

module.exports = gameRoute;