const express = require("express");
const dbfn = require("../contollers/userController");

const Router = express.Router();

// Router.get("/", dbfn.getAllUsers); //get all users
// Router.get("/:id", dbfn.getSpecificUser); //get specific user
// Router.post("/", dbfn.createUser); //send user
// Router.patch("/:id", dbfn.updateUser); //update user
// Router.delete("/:id", dbfn.deleteUser); //delete user

Router.route("/").get(dbfn.getAllUsers).post(dbfn.createUser);
Router.route("/:id")
  .get(dbfn.getSpecificUser)
  .patch(dbfn.updateUser)
  .delete(dbfn.deleteUser);

module.exports = Router;
