import { Request, Response } from "express";
declare function getIndex(req: Request, res: Response): Promise<void>;
declare function getAbout(req: Request, res: Response): Promise<void>;
export { getIndex, getAbout };
