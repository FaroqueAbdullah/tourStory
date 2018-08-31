const router = require('express').Router();
var NodeGeocoder = require('node-geocoder');
const Blog = require('../models/touristBlog-model');
const TourPlace = require('../models/tourPlace-model');
const VisitedPlace = require('../models/visitedPlace-model');

var options = {
  provider: 'google',
  httpAdapter: 'https',
  apiKey: process.env.GEOCODER_API_KEY,
  formatter: null
};

var geocoder = NodeGeocoder(options);


router.post("/createBlog", bodyParserencoded ,function(req, res){
  var newvalues = { $set: { blogTitle : req.body.blogTitle,
                            blogLocation : req.body.blogLocation,
                            blogDescription : req.body.blogDescription,
                            blogAuthorId : req.user._id,
                            blogAuthorName : req.user.username,
                            blogAuthorThumbnil : req.user.thumbnail,
                            } };
  Blog.create( newvalues , function(err, updatedInformation){
    if(err)
    {
      throw err;
    }else {
      res.render("profile",{user: req.user});
      //res.redirect("/myprofile/" + req.user.id);
    }
  });
});


router.post("/createTourPlace", bodyParserencoded ,function(req, res){
  var newvalues = { $set: { placeName : req.body.placeName,
                            placeLocation : req.body.placeLocation,
                            placeDescription : req.body.placeDescription
                            } };
  TourPlace.create( newvalues , function(err, updatedInformation){
    if(err)
    {
      throw err;
    }else {
      res.render("profile",{user: req.user});
      //res.redirect("/myprofile/" + req.user.id);
    }
  });
})

router.post("/createEvent", bodyParserencoded ,function(req, res){
  var newvalues = { $set: { eventTitle : req.body.eventTitle,
                            eventLocation : req.body.eventLocation,
                            eventDescription : req.body.eventDescription,
                            blogAuthorId : req.user._id,
                            blogAuthorName : req.user.username,
                            blogAuthorThumbnil : req.user.thumbnail,
                            email : req.body.email
                            } };
  Blog.create( newvalues , function(err, updatedInformation){
    if(err)
    {
      throw err;
    }else {
      res.render("profile",{user: req.user});
      //res.redirect("/myprofile/" + req.user.id);
    }
  });
});





module.exports = router;
