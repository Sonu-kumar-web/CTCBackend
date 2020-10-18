const express = require("express");
const passport = require("passport");
const db = require("./config/mongoose");
const path = require("path");
const passportJWT = require("./config/passport-jwt-strategy");
const app = express();
const port = process.env.PORT || 5000;

// Connect Database
db();

// body parser for req.body
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//use passport
app.use(passport.initialize());
app.use(passport.session());

// use express router
app.use("/", require("./routes"));

// Server static assets if in production
if (process.env.NODE_ENV === "production") {
   // Set static folder
   app.use(express.static("client/build"));

   app.get("*", (req, res) => {
      res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
   });
}

app.listen(port, (err) => {
   if (err) {
      console.log("Error in running the Server:", port);
   }
   console.log("Server is running on port:", port);
});
