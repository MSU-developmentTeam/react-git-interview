const db = require("../models/");

module.exports = {
  findAll: function (req, res) {
    db.Question.findAll(req.query).then((dbModel) => res.json(dbModel)).catch(err => res.status(422).json(err));;
  },

  findByTopic: function (req, res) {
    db.Question.findByTopic(req.params.topic).then((dbModel) =>
      res.json(dbModel)
    );
  },

  findById: function (req, res) {
    db.Question.findById(req.params.id).then((dbModel) => res.json(dbModel));
  },

  create: function (req, res) {
    db.Question.create({
      UserId: req.user.id,
      topic: req.body.topic,
      body: req.body.body,
      answer: req.body.answer,
    }).then((dbModel) => res.json(dbModel));
  },

  remove: function (req, res) {
    db.Question.findById({ _id: req.params.id })
      .then((dbModel) => dbModel.remove())
      .then((dbModel) => res.json(dbModel));
  },

  update: function (req, res) {
    db.Question.findById({ _id: req.params.id }, req.body).then((dbModel) =>
      res.json(dbModel)
    );
  },
};
