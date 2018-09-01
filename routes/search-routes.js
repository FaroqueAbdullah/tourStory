var express = require("express"),
    router    = express.Router(),
    mongoose = require("mongoose");

var User = require("../models/user-model");
var Blog = require('../models/touristBlog-model');



function escapeRegex(text) {
    return text.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, "\\$&");
};

router.get("/searchTouristProfile", function(req, res) {
    if (req.query.search) {
       const regex = new RegExp(escapeRegex(req.query.search), 'gi');
       User.find({ username: regex }, function(err, tourist) {
           if(err) {
               console.log(err);
           } else {
              res.render("tourist",{user:req.user ,tourist:tourist});
           }
       });
    }
})


router.get("/searchTourPlace", function(req, res) {
    if (req.query.search) {
       const regex = new RegExp(escapeRegex(req.query.search), 'gi');
       Blog.find({ blogLocation: regex }, function(err, tourplace) {
           if(err) {
               console.log(err);
           } else {
              res.render("tourplace",{user:req.user ,tourplace:tourplace});
           }
       });
    }
})


module.exports = router;
