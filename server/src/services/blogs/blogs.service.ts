const blogsModel = require("../../models/blogs/blogs.model");

export async function getMultiple(page = 1) {
  const blogs = await blogsModel.find({});

  return {
    blogs,
  };
}

export async function getSingle(id: Number) {
  const blog = await blogsModel.findById(id);

  return {
    blog,
  };
}

export async function create(blogBody: Object) {
  const blog = new blogsModel(blogBody);
  await blog.save();

  return {
    blog,
  };
}

export async function update(id: Number, blogBody: Object) {
  const blog = await blogsModel.findByIdAndUpdate(id, blogBody);

  return {
    blog,
  };
}

export async function remove(id: Number) {
  const blog = await blogsModel.findByIdAndRemove(id);

  return {
    blog,
  };
}
