const db = require("../models/");

module.exports = {
  findAll: function (req, res) {
    db.Question.find({}).sort({ createdAt: -1 }).then((dbModel) => res.json(dbModel)).catch(err => res.status(400).json(err));
  },

  findByTopic: function (req, res) {
    db.Question.find({ topic: req.params.topic }, console.log(req.params.topic)).then((dbModel) => {
      console.log('This is the request' + req);
      console.log('-------------------------')
      console.log('This is the response' + res);
      res.json(dbModel)
    }).catch(err => console.log('Backend Catch Statement' + err));
  },

  findById: function (req, res) {
    db.Question.findById(req.params.id).then((dbModel) => res.json(dbModel));
  },

  create: function (req, res) {
    db.Question.create({
      // UserId: req.user.id,
      topic: req.body.topic,
      body: req.body.body,
      answer: req.body.answer,
      keyWords: req.body.keyWords
    }).then((dbModel) => res.json(dbModel)).catch(err => res.status(400).json(err));
  },

  remove: function (req, res) {
    db.Question.findById({ _id: req.params.id })
      .then((dbModel) => dbModel.remove())
      .then((dbModel) => res.json(dbModel)).catch(err => res.status(400).json(err));
  },

  update: function (req, res) {
    db.Question.findOneAndUpdate({ _id: req.params.id }, {
      answer: req.body.answer 
    }, {new: true})
      .then((dbModel) => {
        console.log("DbModel Answer = " + dbModel.answer);
        res.status(200).json(dbModel)
      }).catch(err => res.status(422).json(err));
  },
};
