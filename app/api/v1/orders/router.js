const express = require("express");
const router = express.Router();
const { index } = require("./controller");
const { authenticateUser, authorizedRoles } = require("../../../middlewares/auth");

router.get("/orders", authenticateUser, authorizedRoles("organizer", "admin", "owner"), index);

module.exports = router;
