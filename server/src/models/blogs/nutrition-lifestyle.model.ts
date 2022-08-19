import mongoose from "mongoose";

const NutritionLifestyleSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  content: {
    type: String,
    required: true,
  },
  dateCreated: {
    type: String,
    required: true,
  },
  picURL: {
    type: String,
    default: "",
  },
});

const NutritionLifestyle = mongoose.model("NutritionLifestyle", NutritionLifestyleSchema);

module.exports = NutritionLifestyle;
