const db = require("../models");
const opQDB = db.opStrategy;

exports.create = (req, res) => {
  console.log("bka bka bka bka");
  // Validate request
  if (!req.body.q1 || !req.body.q2) {
    res.status(400).send({ message: "Content can not be empty!" });
    return;
  }

  // Create a answer
  const answers = new opQDB({
    id: req.body.id,
    tutorialAns: req.body.tutorialAns,
    q1: req.body.q1,
    q2: req.body.q2,
    countBack: req.body.countBack,
    whoWin: req.body.whoWin
  });

  // Save User in the database
  answers.save(answers)
    .then(data => {
      console.log(data._id)
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the User."
      });
    });


};


