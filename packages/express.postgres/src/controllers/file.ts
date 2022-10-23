import { Request, Response } from "express";

async function uploadFile(req: Request, res: Response): Promise<void> {
  try {
    const file: Express.Multer.File | undefined = req.file;

    if (!file) {
      res.status(400).json({
        success: false,
        message: "File is required",
      });
      return;
    }

    const [streamifier, fs, { join }] = await Promise.all([
      import("streamifier"),
      import("fs"),
      import("path"),
    ]);

    const filePath: string = join("uploads", "test.jpeg");

    const writeStream: NodeJS.WritableStream = fs.createWriteStream(filePath);

    streamifier.createReadStream(file.buffer).pipe(writeStream);

    const uploadResult = await new Promise((resolve, reject) => {
      writeStream.on("finish", function () {
        resolve(true);
      });

      writeStream.on("error", (err) => {
        reject(new Error(err.message));
      });
    });

    if (!uploadResult) {
      res.status(400).json({
        success: false,
        message: "Upload failed!",
      });
      res.end();
      return;
    }

    res.status(200).json({
      success: true,
      message: "Upload Success!",
    });
    res.end();
  } catch (error) {
    res.status(500).json({
      message: (error as Error)?.message || "Error",
      success: false,
    });
    res.end();
  }
}

async function uploadFiles(req: Request, res: Response): Promise<void> {}

async function downloadFile(req: Request, res: Response): Promise<void> {}

export { uploadFile, uploadFiles, downloadFile };
