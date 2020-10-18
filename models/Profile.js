const mongoose = require("mongoose");

//defining the schema
const ProfileSchema = new mongoose.Schema({
   user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
   },

   company: {
      type: String,
   },

   location: {
      type: String,
   },

   skills: {
      type: [String],
      // required: true,
   },

   bio: {
      type: String,
   },
   status: {
      type: String,
      // required: true,
   },
});

const Profile = mongoose.model("Profile", ProfileSchema);
module.exports = Profile;
