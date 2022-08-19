import express from "express";
const blogsRouter = require("./blogs/blogs.route");
const counsellingRouter = require("./blogs/counselling.route");
const nutrition_lifestyleRouter = require("./blogs/nutrition-lifestyle.route");

const router = express.Router();

router.use("/blogs", blogsRouter);
router.use("/counselling", counsellingRouter);
router.use("/nutrition-lifestyle", nutrition_lifestyleRouter);

module.exports = router;
