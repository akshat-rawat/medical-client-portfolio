import express, { Application } from "express";
const blogsRouter = require("./src/routes/blogs.route");

const app: Application = express();
const port = 8080;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/blogs", blogsRouter);

app.listen(port, () => {
  console.log(`Connected successfully on port ${port}`);
});
