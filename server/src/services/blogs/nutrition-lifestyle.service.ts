const nutritions_lifestyleModel = require("../../models/blogs/nutrition-lifestyle.model");

export async function getMultiple(page = 1) {
  const nutritions_lifestyle = await nutritions_lifestyleModel.find({});

  return {
    nutritions_lifestyle,
  };
}

export async function getSingle(id: Number) {
  const nutrition_lifestyles = await nutritions_lifestyleModel.findById(id);

  return {
    nutrition_lifestyles,
  };
}

export async function create(nutrition_lifestyleBody: Object) {
  const nutrition_lifestyle = new nutritions_lifestyleModel(nutrition_lifestyleBody);
  await nutrition_lifestyle.save();

  return {
    nutrition_lifestyle,
  };
}

export async function update(id: Number, nutrition_lifestyleBody: Object) {
  const nutrition_lifestyle = await nutritions_lifestyleModel.findByIdAndUpdate(id, nutrition_lifestyleBody);

  return {
    nutrition_lifestyle,
  };
}

export async function remove(id: Number) {
  const nutrition_lifestyle = await nutritions_lifestyleModel.findByIdAndRemove(id);

  return {
    nutrition_lifestyle,
  };
}
