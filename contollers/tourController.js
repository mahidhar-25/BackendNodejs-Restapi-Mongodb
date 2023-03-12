const fs = require("fs");
const Tour = require("../models/TourModel");

// path = `${__dirname}/../dev-data/data/tours-simple.json`;
// tours = JSON.parse(fs.readFileSync(path));

// exports.checkId = (req, res, next, val) => {
//   // const tour = tours.filter((el) => el.id === val);

//   // if (Object.keys(tour).length === 0) {
//   //   return res.status(404).json({
//   //     status: "fail",
//   //     message: "invalid id",
//   //   });
//   // }
//   next();
// };

exports.checkBody = (req, res, next) => {
  if (!req.body.name || !req.body.price) {
    return res.status(400).json({
      status: "fail",
      message: "missing name or price",
    });
  }
  next();
};

exports.getAllTours = (req, res) => {
  res.status(200).json({
    status: "success",
    // tours: tours,
  });
};

exports.getSpecificTour = (req, res) => {
  const val = req.params.id * 1;
  // const tour = tours.filter((el) => el.id === val);
  // console.log(tour);
  res.status(200).json({
    status: "success",
    // data: {
    //   tour: tour,
    // },
  });
};

exports.createTour = (req, res) => {
  res.status(201).json({
    stauts: "success",
    //  data: {
    //    tour: newObj,
    //  },
  });
};

exports.updateTour = (req, res) => {
  const id = req.params.id * 1;
  res.status(200).json({
    status: "success",
  });
};

exports.deleteTour = (req, res) => {
  const id = req.params.id * 1;
  res.status(204).json({
    stauts: "deleted",
    message: "succesfully deleted",
  });
};
