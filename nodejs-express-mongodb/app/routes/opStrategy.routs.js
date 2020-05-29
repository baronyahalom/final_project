module.exports = app => {
  const opStrategy = require("../controller/opStrategy.controller.js");

  var router = require("express").Router();


  router.post("/opStrategy", opStrategy.create);
  //router.get("/users/:id",user.findOne );
  app.use('/api/hex', router);
};
