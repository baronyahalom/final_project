const db = require("../models");
const part1DB = db.part1;

exports.create = (req, res) => {
  console.log("bka bka bka bka");
  // Validate request
  if (!req.body.id || !req.body.q1 || !req.body.q2 || !req.body.q3 || !req.body.q4 || !req.body.q5 || !req.body.A ||
    !req.body.B || !req.body.C || !req.body.D || !req.body.E || !req.body.numOfTrying) {
    res.status(400).send({ message: "Content can not be empty!" });
    return;
  }

  // Create a answer
  const answers = new part1DB({
    id: req.body.id,
    q1: req.body.q1,
    q2: req.body.q2,
    q3: req.body.q3,
    q4: req.body.q4,
    q5: req.body.q5,
    A: req.body.A,
    B: req.body.B,
    C: req.body.C,
    D: req.body.D,
    E: req.body.E,
    q6: req.body.q6,
    numOfTrying: req.body.numOfTrying
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


