import express from "express";
const counsellingController = require("../../controllers/blogs/counselling.controller");

const router = express.Router();

router.get("/", counsellingController.getAll);
router.get("/:id", counsellingController.get);

router.post("/", counsellingController.create);

router.put("/:id", counsellingController.update);

router.delete("/:id", counsellingController.remove);

module.exports = router;
