const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let Player = new Schema({
    player: {
      type: String
    },
    rank: {
      type: String
    },
    score: {
      type: String
    },
    time: {
      type: String
    },
    game_history: {
      type: [String],
      default : ""
    },
    favorite: {
      type: String
    },
    status : {
        type : String
    },
    joinable : {
        type : String
    }
  })
  module.exports = mongoose.model('Player', Player)
