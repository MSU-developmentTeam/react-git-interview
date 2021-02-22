const mongoose = require('mongoose');
const db = require('../models');
const config = require('config');

mongoose.connect(
    process.env.MONGODB_URI || config.get('mongoURI')
);

const questionSeed = [
    {
        topic: "HTML",
        body: "Why are you interested in using HTML to build websites?",
        answer: "Web-building tools are great for laymen and professional developers, but I think it’s important to understand the underlying technology so I have more control over how sites look and behave. For instance, when I use WordPress to build a site, I often find that I can get better results by inserting my own HTML instead of relying on the provided tools",
        keyWords: ["HTML", "HTML5"],
        date: new Date(Date.now())
    },
    {
        topic: "JavaScript",
        body: "How can you convert the string of any base to integer in JavaScript?",
        answer: "The parseInt() function is used to convert numbers between different bases parseInt() takes the string to be converted as its first parameter, and the second parameter is the base of the given string.",
        keyWords: ["JavaScript", "parseInt()", "parse"],
        date: new Date(Date.now())
    }

]


db.Question
  .remove({})
  .then(() => db.Question.collection.insertMany(questionSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
