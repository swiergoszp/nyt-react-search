const db = require("../models");

module.exports = {
  find: function(req, res) {
    console.log("Gathering saved articles from the db");
    db.Article.find()
      .sort({ date: -1 })
      .then(doc => res.json(doc))
      .catch(err => res.status(422).json(err));
  },
  insert: function(req, res) {
    console.log("Adding saved artice to the db");
    console.log("req.body: ", req.body);
    db.Article.create(req.body)
      .then(doc => res.json(doc))
      .catch(err => res.status(422).json(err));
  },
  delete: function(req, res) {
    db.Article.findById({ _id: req.params.id })
      .then(doc => doc.remove())
      .then(doc => res.json(doc))
      .catch(err => res.status(422).json(err));
  }
};