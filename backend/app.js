const express = require("express");
const router = require("./routers/router");

const cors = require("cors");

const app = express();

app.use(express.json());

app.use(cors());
app.use("/api", router);
module.exports = app;
