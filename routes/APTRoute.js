const express = require("express");

const { getAllData, uploadData } = require("../controllers/APTController")

const router = express.Router();

router.route("/api/upload").post(uploadData)

router.route("/api/getData").get(getAllData)

module.exports = router
