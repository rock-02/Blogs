const mongoose = require("mongoose");
// console.log(process.env.DB_URI);
require("dotenv").config();
const connectDatabse = () => {
  mongoose
    .connect(process.env.DB_URI)
    .then((db) =>
      console.log(
        `Connected to the database ${db.connection.name} to ${process.env.DB_URI}`
      )
    )
    .catch((e) => {
      console.log(e);
    });
};

module.exports = connectDatabse;
