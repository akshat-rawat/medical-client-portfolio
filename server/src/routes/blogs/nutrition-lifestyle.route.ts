import express from "express";
const nutrition_lifestyleController = require("../../controllers/blogs/nutrition-lifestyle.controller");

const router = express.Router();

router.get("/", nutrition_lifestyleController.getAll);
router.get("/:id", nutrition_lifestyleController.get);

router.post("/", nutrition_lifestyleController.create);

router.put("/:id", nutrition_lifestyleController.update);

router.delete("/:id", nutrition_lifestyleController.remove);

module.exports = router;
