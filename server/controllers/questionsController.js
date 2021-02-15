const Question = require('../models/Question');

require('express-async-errors');

const questionsController = {
  async all(req, res) {
    const questions = await Question.find().sort('asc');
    res.send(questions);
  },

  async name(req, res) {
    const questions = await Question.find({
      channel: '#' + req.params.name,
    }).sort('asc');
    res.send(questions);
  },

  async clear(req, rex) {
    const questions = await Question.find();
  },
};

module.exports = questionsController;
