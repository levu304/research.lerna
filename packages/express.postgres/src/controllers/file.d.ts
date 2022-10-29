import { Request, Response } from "express";
declare function uploadFile(req: Request, res: Response): Promise<void>;
declare function uploadFiles(req: Request, res: Response): Promise<void>;
declare function downloadFile(req: Request, res: Response): Promise<void>;
export { uploadFile, uploadFiles, downloadFile };
