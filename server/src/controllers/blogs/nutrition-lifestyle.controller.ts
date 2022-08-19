import { Request, Response, NextFunction } from "express";
const nutrition_lifestyleService = require("../../services/blogs/nutrition-lifestyle.service");

async function getAll(req: Request, res: Response, next: NextFunction) {
  try {
    res.json(await nutrition_lifestyleService.getMultiple(req.query.page));
  } catch (err) {
    next(err);
  }
}

async function get(req: Request, res: Response, next: NextFunction) {
  try {
    res.json(await nutrition_lifestyleService.getSingle(req.params.id));
  } catch (err) {
    next(err);
  }
}

async function create(req: Request, res: Response, next: NextFunction) {
  try {
    res.json(await nutrition_lifestyleService.create(req.body));
  } catch (err) {
    next(err);
  }
}

async function update(req: Request, res: Response, next: NextFunction) {
  try {
    res.json(await nutrition_lifestyleService.update(req.params.id, req.body));
  } catch (err) {
    next(err);
  }
}

async function remove(req: Request, res: Response, next: NextFunction) {
  try {
    res.json(await nutrition_lifestyleService.remove(req.params.id));
  } catch (err) {
    next(err);
  }
}

module.exports = {
  getAll,
  get,
  create,
  update,
  remove,
};
