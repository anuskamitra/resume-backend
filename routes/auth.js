const router=require("express").Router();
const passport=require("passport");
var GoogleStrategy = require('passport-google-oauth20').Strategy;
passport.use(new GoogleStrategy({
    clientID:"926395362382-vjmus1039poagqi7nd6fci96rqvddjkl.apps.googleusercontent.com",
    clientSecret:"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",
    callbackURL: "http://localhost:8000/auth/google/user",
    userProfileURL:"https://www.googleapis.com/oauth2/v3/userinfo"
  },
  function(accessToken, refreshToken, profile, cb) {
    User.findOrCreate({ googleId: profile.id }, function (err, user) {
      return cb(err, user);
    });
  }
));
passport.serializeUser((user,dome)=>{
    document(null,user)
})
passport.deserializeUser((user,dome)=>{
    document(null,user)
})
router.get('/google',
  passport.authenticate('google', { scope: ['profile'] }));

router.get('/google/user', 
  passport.authenticate('google', { failureRedirect: '/' }),
  function(req, res) {
    res.send('SuccesFul');
  });

  module.exports=router