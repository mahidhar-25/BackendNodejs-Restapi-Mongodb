const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config({ path: "./config.env" });
const app = require("./app");

const DB = process.env.DATABASE_URL.replace(
  "<password>",
  process.env.DATABASE_PASSWORD
);

mongoose
  .connect(DB, {
    useNewUrlParser: true,
  })
  .then((con) => {
    console.log("DB connection succesful");
  });

const port = process.env.PORT || 3030;

app.listen(port, () => {
  console.log(`app is running on ${port}....`);
});
