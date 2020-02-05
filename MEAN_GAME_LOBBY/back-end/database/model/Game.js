const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let Game = new Schema({
    title: {
      type: String
    },
    platform: {
      type: String
    },
    genre: {
      type: String
    },
    rating: {
      type: String
    },
    publisher: {
      type: String
    },
    release: {
      type: String
    },
    status : {
        type : String
    }
  })
  module.exports = mongoose.model('Game', Game)
