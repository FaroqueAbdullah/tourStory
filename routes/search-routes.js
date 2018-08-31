var express = require("express"),
    router    = express.Router(),
    mongoose = require("mongoose");

var User = require("../models/user-model");
var TourPlace = require('../models/tourPlace-model');



function escapeRegex(text) {
    return text.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, "\\$&");
};

router.get("/searchTouristProfile", function(req, res) {
    if (req.query.search) {
       const regex = new RegExp(escapeRegex(req.query.search), 'gi');
       User.find({ username: regex }, function(err, talentlist) {
           if(err) {
               console.log(err);
           } else {
              res.render("showListView",{user:req.user ,talentlist:talentlist});
           }
       });
    }
})


router.get("/searchTourPlace", function(req, res) {
    if (req.query.search) {
       const regex = new RegExp(escapeRegex(req.query.search), 'gi');
       TourPlace.find({ placeName: regex }, function(err, talentlist) {
           if(err) {
               console.log(err);
           } else {
              res.render("showListView",{user:req.user ,talentlist:talentlist});
           }
       });
    }
})


module.exports = router;
