var express = require("express");
var router = express.Router();
let mongoose = require("mongoose");
let PostModel = require("../model/PostModel");
let multer = require("multer");

//add user
router.post("/add", function (req, res, next) {
  var newPost = new PostModel(req.body);
  newPost
    .save()
    .then((user) => res.json(user))
    .catch((err) => console.log(err));
});

/* GET users listing. */
router.get("/get", function (req, res, next) {
  PostModel.find()
    .then((result) => res.send(result))
    .catch((err) => res.send(err));
});

module.exports = router;
