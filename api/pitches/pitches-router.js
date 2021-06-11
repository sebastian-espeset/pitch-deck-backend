const express = require("express");
const multer = require("multer");
const router = express.Router();
const { uploadFile,getFileStream } = require("../s3");

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./files");
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  },
});

const upload = multer({ storage: storage });

router.get("/files/:key", (req, res) => {
  const key = req.params.key
  const readStream = getFileStream(key)
  readStream.pipe(res)
});

router.post("/", upload.single("file"), async (req, res) => {
  const file = req.file;
  console.log(file);
  const result = await uploadFile(file)
  console.log(result)
  res.send({file: `/files/${result.key}`})
});

module.exports = router;
