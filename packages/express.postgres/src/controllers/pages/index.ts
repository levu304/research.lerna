import { Request, Response } from "express";

async function getIndex(req: Request, res: Response): Promise<void> {
  res.status(200).json({
    message: "Hello index",
  });
}

async function getAbout(req: Request, res: Response) {
  res.status(200).json({
    message: "Hello about",
  });
}

export { getIndex, getAbout };
