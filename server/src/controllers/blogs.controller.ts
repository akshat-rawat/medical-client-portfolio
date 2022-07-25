import { Request, Response, NextFunction } from "express";
const blogsService = require("../services/blogs.service");

async function getAll(req: Request, res: Response, next: NextFunction) {
  try {
    res.json(await blogsService.getMultiple(req.query.page));
  } catch (err) {
    next(err);
  }
}

async function get(req: Request, res: Response, next: NextFunction) {
  try {
    res.json(await blogsService.getSingle(req.params.id));
  } catch (err) {
    next(err);
  }
}

async function create(req: Request, res: Response, next: NextFunction) {
  try {
    res.json(await blogsService.create(req.body));
  } catch (err) {
    next(err);
  }
}

async function update(req: Request, res: Response, next: NextFunction) {
  try {
    res.json(await blogsService.update(req.params.id, req.body));
  } catch (err) {
    next(err);
  }
}

async function remove(req: Request, res: Response, next: NextFunction) {
  try {
    res.json(await blogsService.remove(req.params.id));
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
