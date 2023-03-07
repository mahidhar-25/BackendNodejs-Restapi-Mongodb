const fs = require("fs");

path = `${__dirname}/../dev-data/data/tours-simple.json`;
tours = JSON.parse(fs.readFileSync(path));

exports.checkId = (req, res, next, val) => {
  const tour = tours.find((el) => el.id === val);

  if (typeof tour === "undefined") {
    return res.status(404).json({
      status: "fail",
      message: "invalid id",
    });
  }
  next();
};

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
    tours: tours,
  });
};

exports.getSpecificTour = (req, res) => {
  res.status(200).json({
    status: "success",
    data: {
      tour: tour,
    },
  });
};

exports.createTour = (req, res) => {
  const newid = tours[tours.length - 1].id + 1;
  const newObj = Object.assign({ id: newid }, req.body);
  tours.push(newObj);

  fs.writeFile(path, JSON.stringify(tours), (err) => {
    res.status(201).json({
      stauts: "success",
      data: {
        tour: newObj,
      },
    });
  });
};

exports.updateTour = (req, res) => {
  const id = req.params.id * 1;

  const updated_tours = tours.map((ele) => {
    if (ele.id === id) {
      return { ...ele, ...req.body };
    }
    return ele;
  });

  const tour = updated_tours.find((el) => el.id === id);

  fs.writeFile(path, JSON.stringify(updated_tours), (err) => {
    res.status(200).json({
      stauts: "updated",
      data: {
        tour: tour,
      },
    });
  });
};

exports.deleteTour = (req, res) => {
  const id = req.params.id * 1;
  const updated_tours = tours.filter((ele) => {
    return ele.id != id;
  });

  fs.writeFile(path, JSON.stringify(updated_tours), (err) => {
    res.status(204).json({
      stauts: "deleted",
      message: "succesfully deleted",
    });
  });
};
