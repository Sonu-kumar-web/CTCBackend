const Profile = require("../../../models/Profile");
const User = require("../../../models/User");

// fetch current user profile info
module.exports.fetchProfile = function (req, res) {
   const errors = {};

   // console.log("Fetch profile", req.user);

   Profile.findOne({ user: req.user.id })
      .populate("user", ["name"])
      .then((profile) => {
         if (!profile) {
            errors.message = "There is no profile for this user";
            return res.status(404).json(errors);
         }
         return res.status(200).json(profile);
      })
      .catch((err) => {
         return res.status(404).json(err);
      });
};

// fetch current user profile info
module.exports.createJobs = function (req, res) {
   const profileFields = {};
   profileFields.user = req.user.id;
   if (req.body.company) profileFields.company = req.body.company;
   if (req.body.location) profileFields.location = req.body.location;
   if (req.body.bio) profileFields.bio = req.body.bio;
   if (req.body.status) profileFields.status = req.body.status;

   // Skills - Spilt into array
   profileFields.skills = Array.isArray(req.body.skills)
      ? req.body.skills
      : req.body.skills.split(",").map((skill) => " " + skill.trim());

   // console.log("PROFILE", Profile);

   new Profile(profileFields).save().then((profile) => {
      return res.status(200).json(profile);
   });
};

// Get all profiles
module.exports.returnAllJobs = function (req, res) {
   const errors = {};

   Profile.find()
      .populate("user", ["name"])
      .then((profiles) => {
         if (!profiles) {
            errors.noprofile = "There are no profiles";
            return res.status(404).json(errors);
         }

         return res.status(200).json(profiles);
      })
      .catch((err) => {
         return res.status(404).json({ profile: "There are no profiles" });
      });
};
