const counsellingModel = require("../../models/blogs/counselling.model");

export async function getMultiple(page = 1) {
  const counsellings = await counsellingModel.find({});

  return {
    counsellings,
  };
}

export async function getSingle(id: Number) {
  const counselling = await counsellingModel.findById(id);

  return {
    counselling,
  };
}

export async function create(counsellingBody: Object) {
  const counselling = new counsellingModel(counsellingBody);
  await counselling.save();

  return {
    counselling,
  };
}

export async function update(id: Number, counsellingBody: Object) {
  const counselling = await counsellingModel.findByIdAndUpdate(
    id,
    counsellingBody
  );

  return {
    counselling,
  };
}

export async function remove(id: Number) {
  const counselling = await counsellingModel.findByIdAndRemove(id);

  return {
    counselling,
  };
}
