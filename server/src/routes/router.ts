import express from "express";
const blogsRouter = require("./blogs/blogs.route");

const router = express.Router();

router.use("/blogs", blogsRouter);

module.exports = router;
