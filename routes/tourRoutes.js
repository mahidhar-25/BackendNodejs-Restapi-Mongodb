const express = require("express");
const dbfn = require("../contollers/tourController");

const Router = express.Router();
Router.param("id", dbfn.checkId);
// Router.get("/", dbfn.getAllTours); //get all tours
// Router.get("/:id", dbfn.getSpecificTour); //get specific tour
// Router.post("/", dbfn.createTour); //send tour
// Router.patch("/:id", dbfn.updateTour); //update tour
// Router.delete("/:id", dbfn.deleteTour); //delete tour

Router.route("/").get(dbfn.getAllTours).post(dbfn.checkBody, dbfn.createTour);
Router.route("/:id")
  .get(dbfn.getSpecificTour)
  .patch(dbfn.updateTour)
  .delete(dbfn.deleteTour);

module.exports = Router;
