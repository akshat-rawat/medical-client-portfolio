import express from "express";
const nutrition_lifestyleRouter = require("./nutrition-lifestyle.route");
const counsellingRouter = require("./counselling.route");
const blogsController = require("../../controllers/blogs/blogs.controller");

const router = express.Router();

router.use("/nutrition-lifestyle", nutrition_lifestyleRouter);
router.use("/counselling", counsellingRouter);

/* GET blogs */
router.get("/", blogsController.getAll);
router.get("/:id", blogsController.get);

/* POST blogs */
router.post("/", blogsController.create);

/* PUT blogs */
router.put("/:id", blogsController.update);

/* DELETE blogs */
router.delete("/:id", blogsController.remove);

module.exports = router;
