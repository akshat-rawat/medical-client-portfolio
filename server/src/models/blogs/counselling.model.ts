import mongoose from "mongoose";

const CounsellingSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  content: {
    type: String,
    required: true
  },
  dateCreated: {
    type: String,
    required: true
  },
  picURL: {
    type: String,
    default: ""
  }
});

const Counselling = mongoose.model("Counselling", CounsellingSchema);

module.exports = Counselling;
