const express = require("express");
const router = express.Router();
const blogsController = require('../controllers/blogs.controller');

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
