const express = require("express");

const { getAllData, uploadData, updateApplication, deleteApplication } = require("../controllers/APTController")

const router = express.Router();

router.route("/api/upload").post(uploadData)

router.route("/api/getData").get(getAllData)

router.route("/api/update").patch(updateApplication)

router.route("/api/delete").delete(deleteApplication)

module.exports = router
