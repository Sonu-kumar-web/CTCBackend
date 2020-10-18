const express = require("express");
const router = express.Router();
const passport = require("passport");
const profileController = require("../../../controllers/api/v1/profile-controller");

router.get(
   "/",
   passport.authenticate("jwt", { session: false }),
   profileController.fetchProfile
);

router.post(
   "/create-profile",
   passport.authenticate("jwt", { session: false }),
   profileController.createJobs
);

router.get("/all", profileController.returnAllJobs);

module.exports = router;
