const db = require("../models");
const userDB = db.users;

exports.create = (req, res) => {
  console.log("bka bka bka bka");
  // Validate request
  if (!req.body.workerID) {
    res.status(400).send({ message: "Content can not be empty!" });
    return;
  }

  // Create a User
  const user = new userDB({
    workerID: req.body.workerID,
    age: req.body.age,
    gender: req.body.gender,
    hand: req.body.hand,
    education: req.body.education
  });

  // Save User in the database
  user.save(user)
    .then(data => {
      console.log(data._id)
      res.send(data._id);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the User."
      });
    });
};

exports.findOne  = (req, res) => {
  const id = req.params.id;
  console.log(req.params.id);
  userDB.findById(id)
    .then(data => {
      if (!data)
        res.status(404).send({ message: "Not found Tutorial with id " + id });
      else res.send(data);
    })
    .catch(err => {
      res
        .status(500)
        .send({ message: "Error retrieving Tutorial with id=" + id });
    });
};
