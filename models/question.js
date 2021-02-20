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
    required: true
  },
  keyWords: {
    type: Array,
    required: false
  },
  createdAt: {
    type: Date,
    default: Date.now
}

})

module.export = mongoose.model('Question', questionsSchema);