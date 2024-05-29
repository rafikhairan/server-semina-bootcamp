const express = require("express");
const router = express.Router();
const { createCMSOrganizer, createCMSUser, getCMSUsers } = require("./controller");
const { authenticateUser, authorizedRoles } = require("../../../middlewares/auth");

router.get("/users", authenticateUser, authorizedRoles("owner"), getCMSUsers);
router.post("/organizers", authenticateUser, authorizedRoles("owner"), createCMSOrganizer);
router.post("/users", authenticateUser, authorizedRoles("organizer"), createCMSUser);

module.exports = router;
