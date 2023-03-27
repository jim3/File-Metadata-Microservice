const express = require("express");
const router = express.Router();
const multer = require("multer");
const upload = multer({ dest: "uploads/" });

router.get("/", function (req, res) {
    res.sendFile(process.cwd() + "/views/index.html");
});

router.post("/api/fileanalyse", upload.single("upfile"), function (req, res) {
    res.json({
        name: req.file.originalname,
        type: req.file.mimetype,
        size: req.file.size,
    });
});

module.exports = router;
