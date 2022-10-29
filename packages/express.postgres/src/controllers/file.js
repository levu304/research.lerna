"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.downloadFile = exports.uploadFiles = exports.uploadFile = void 0;
function uploadFile(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const file = req.file;
            if (!file) {
                res.status(400).json({
                    success: false,
                    message: "File is required",
                });
                return;
            }
            const [streamifier, fs, { join }] = yield Promise.all([
                Promise.resolve().then(() => require("streamifier")),
                Promise.resolve().then(() => require("fs")),
                Promise.resolve().then(() => require("path")),
            ]);
            const filePath = join("uploads", "test.jpeg");
            const writeStream = fs.createWriteStream(filePath);
            streamifier.createReadStream(file.buffer).pipe(writeStream);
            const uploadResult = yield new Promise((resolve, reject) => {
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
        }
        catch (error) {
            res.status(500).json({
                message: (error === null || error === void 0 ? void 0 : error.message) || "Error",
                success: false,
            });
            res.end();
        }
    });
}
exports.uploadFile = uploadFile;
function uploadFiles(req, res) {
    return __awaiter(this, void 0, void 0, function* () { });
}
exports.uploadFiles = uploadFiles;
function downloadFile(req, res) {
    return __awaiter(this, void 0, void 0, function* () { });
}
exports.downloadFile = downloadFile;
//# sourceMappingURL=file.js.map