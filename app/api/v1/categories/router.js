const express = require("express");
const router = express.Router();
const { create, index, find, update, destroy } = require("./controller");
const { authenticateUser, authorizedRoles } = require("../../../middlewares/auth");

router.get("/categories", authenticateUser, authorizedRoles("organizer"), index);
router.get("/categories/:id", authenticateUser, authorizedRoles("organizer"), find);
router.post("/categories", authenticateUser, authorizedRoles("organizer"), create);
router.put("/categories/:id", authenticateUser, authorizedRoles("organizer"), update);
router.delete("/categories/:id", authenticateUser, authorizedRoles("organizer"), destroy);

module.exports = router;
