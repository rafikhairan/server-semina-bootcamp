const express = require("express");
const router = express.Router();
const { create, index, find, update, destroy } = require("./controller");
const { authenticateUser, authorizedRoles } = require("../../../middlewares/auth");

router.get("/talents", authenticateUser, authorizedRoles("organizer"), index);
router.get("/talents/:id", authenticateUser, authorizedRoles("organizer"), find);
router.post("/talents", authenticateUser, authorizedRoles("organizer"), create);
router.put("/talents/:id", authenticateUser, authorizedRoles("organizer"), update);
router.delete("/talents/:id", authenticateUser, authorizedRoles("organizer"), destroy);

module.exports = router;
