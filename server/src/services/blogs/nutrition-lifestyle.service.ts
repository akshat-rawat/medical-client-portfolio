async function getMultiple(page = 1) {
    return {
      message: "Get multiple blogs",
    };
  }
  
  async function getSingle(id: Number) {
    return {
      message: "Get single blog",
    };
  }
  
  async function create(content: String) {
    return {
      message: "Create new blog",
    };
  }
  
  async function update(id: Number, content: String) {
    return {
      message: "Update blog",
    };
  }
  
  async function remove(id: Number) {
    return {
      message: "Delete a blog",
    };
  }
  
  module.exports = {
    getMultiple,
    getSingle,
    create,
    update,
    remove,
  };
  