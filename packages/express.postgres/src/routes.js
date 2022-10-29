"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const pages_1 = require("./controllers/pages");
const multer_1 = require("multer");
const file_1 = require("./controllers/file");
const upload = (0, multer_1.default)({ storage: (0, multer_1.memoryStorage)() });
const router = (0, express_1.Router)();
router.get("/", pages_1.getIndex);
router.get("/about", pages_1.getAbout);
router.post("/upload-file", upload.single("file"), file_1.uploadFile);
router.get("/download", file_1.downloadFile);
exports.default = router;
//# sourceMappingURL=routes.js.map