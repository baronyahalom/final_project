module.exports = app => {
  const user = require("../controller/user.controller.js");

  var router = require("express").Router();


  router.post("/users", user.create);
  router.get("/users/:id",user.findOne );
  app.use('/api/hex', router);
};
