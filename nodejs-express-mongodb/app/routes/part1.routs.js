module.exports = app => {
  const opStrategy = require("../controller/part1.controller.js");

  var router = require("express").Router();


  router.post("/part1", opStrategy.create);
  //router.get("/users/:id",user.findOne );
  app.use('/api/hex', router);
};
