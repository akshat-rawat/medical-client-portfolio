import express, { Application } from "express";
const router = require("./src/routes/router");

const app: Application = express();
const port = 8080;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/", router);

app.listen(port, () => {
  console.log(`Connected successfully on port ${port}`);
});
