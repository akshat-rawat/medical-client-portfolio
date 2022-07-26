import { Request, Response, NextFunction } from "express";
const counsellingService = require("../../services/blogs/counselling.service");

async function getAll(req: Request, res: Response, next: NextFunction) {
  try {
    res.json(await counsellingService.getMultiple(req.query.page));
  } catch (err) {
    next(err);
  }
}

async function get(req: Request, res: Response, next: NextFunction) {
  try {
    res.json(await counsellingService.getSingle(req.params.id));
  } catch (err) {
    next(err);
  }
}

async function create(req: Request, res: Response, next: NextFunction) {
  try {
    res.json(await counsellingService.create(req.body));
  } catch (err) {
    next(err);
  }
}

async function update(req: Request, res: Response, next: NextFunction) {
  try {
    res.json(await counsellingService.update(req.params.id, req.body));
  } catch (err) {
    next(err);
  }
}

async function remove(req: Request, res: Response, next: NextFunction) {
  try {
    res.json(await counsellingService.remove(req.params.id));
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
