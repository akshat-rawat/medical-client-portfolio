import mongoose from "mongoose";

const BlogsSchema = new mongoose.Schema({
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

const Blogs = mongoose.model("Blogs", BlogsSchema);

module.exports = Blogs;
