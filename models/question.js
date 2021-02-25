const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const questionsSchema = new Schema({
  topic: {
    type: String,
    required: true
  },
  body: {
    type: String,
    required: true
  },
  answer: {
    type: String,
    required: false
  },
  keyWords: [{
    type: String,
    required: false
  }],
  createdAt: {
    type: Date,
    default: Date.now
}

})

module.exports = mongoose.model('Question', questionsSchema);