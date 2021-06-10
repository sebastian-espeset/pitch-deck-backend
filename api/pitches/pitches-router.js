const express = require("express");
const multer = require("multer");
const router = express.Router();
const { uploadFile } = require("../s3");

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./files");
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + "-" + file.originalname);
  },
});

const upload = multer({ storage: storage });

router.get("/", (req, res) => {
  res.send(`hello bubblegum`);
});

router.post("/", upload.single("file"), async (req, res) => {
  const file = req.file;
  console.log(file);
  const result = await uploadFile(file)
  console.log(result)
  res.send("success")
});

module.exports = router;
