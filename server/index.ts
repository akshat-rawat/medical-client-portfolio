import express, { Application } from "express";
const mongoose = require("mongoose");
const router = require("./src/routes/router");

const app: Application = express();
const port: number = 8080;

mongoose.connect("mongodb://localhost:27017/portfoliodb", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;
db.on("error", console.error.bind(console, "Connection Error:"));
db.once("open", () => {
  console.log("Database Connected");
});

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/", router);

app.listen(port, () => {
  console.log(`Connected successfully on port ${port}`);
});
