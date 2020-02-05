const express = require('express');
const playerRoute = express.Router();

// player model
let Player = require('../database/model/Player');

// Add player backend work
playerRoute.route('/add-player').post((req, res, next) => {
  console.log(req.body  )
  Player.create(req.body, (error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
});

// Get all student
playerRoute.route('/').get((req, res) => {
  Player.find((error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
})

// Get single player backend work
playerRoute.route('/get-player/:id').get((req, res , next) => {
  Player.findById(req.params.id, (error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
})


// Update backend work
playerRoute.route('/update-player/:id').post((req, res, next) => {
  console.log("Updated Player backend")
  Player.findByIdAndUpdate(req.params.id, {
    $set: req.body
  }, (error, data) => {
    if (error) {
      return next(error);
    } else {
      res.json(data)
      console.log('Player successfully updated!')
    }
  })
})



// Delete backend work
playerRoute.route('/delete-player/:id').delete((req, res, next) => {
  Player.findByIdAndRemove(req.params.id, (error, data) => {
    if (error) {
      return next(error);
    } else {
      res.status(200).json({
        msg: data
      })
    }
  })
})

module.exports = playerRoute;