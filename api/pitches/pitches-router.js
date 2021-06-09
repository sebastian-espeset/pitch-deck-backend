const express = require("express");
const multer = require("multer");

const Pitches = require("./pitches-model");
const router = express.Router();

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null,"./files");
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + "-" + file.originalname);
  },
});

const upload = multer({ storage: storage });

router.get("/", (req, res) => {
  Pitches.get()
    .then((pitches) => {
      res.status(200).json(pitches);
    })
    .catch((err) => {
      res.status(400).json({ message: `Error: ${err}` });
    });
});

router.post("/",upload.single('file'),(req,res)=>{
  console.log(req.file);
  res.send(`file successfully uploaded`)
})

module.exports = router;
