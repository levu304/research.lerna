import { Router } from "express";
import { getAbout, getIndex } from "./controllers/pages";
import multer, { memoryStorage, Multer } from "multer";
import { downloadFile, uploadFile } from "./controllers/file";

const upload: Multer = multer({ storage: memoryStorage() });
const router: Router = Router();

router.get("/", getIndex);

router.get("/about", getAbout);

router.post("/upload-file", upload.single("file"), uploadFile);

router.get("/download", downloadFile);

export default router;
