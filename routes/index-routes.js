const router = require('express').Router();
const User = require("../models/user-model");
const Blog = require('../models/touristBlog-model');
const NewEvent = require('../models/newEvent-model');
const async = require('async');

router.get('/touristsearchpage', (req, res) => {
  User.find({ }, function(err, tourist) {
      if(err) {
          console.log(err);
      } else {
         res.render("tourist",{user:req.user ,tourist:tourist});
      }
  });
});

router.get('/tourplacesearchpage', (req, res) => {
  Blog.find({ }, function(err, tourplace) {
      if(err) {
          console.log(err);
      } else {
         res.render("tourplace",{user:req.user ,tourplace:tourplace});
      }
  });
});



router.get('/readBlog/:id', (req, res) => {
  Blog.findById( req.params.id , function(err, blog) {
      if(err) {
          console.log(err);
      } else {
         res.render("showBlog",{user:req.user ,blog:blog});
      }
  });
});







router.get('/home', function(req, res, next) {
        var locals = {};
        var tasks = [
            // Load users
            function(callback) {
                NewEvent.find( {} ,function(err, events) {
                    if (err) return callback(err);
                    locals.events = events;
                    callback();
                });
            },
            // Load colors

          function(callback) {
            Blog.find({ }, function(err, blogs){
              if (err) return callback(err);
              locals.blogs = blogs;
              callback();
          })
        }
        ];

        async.parallel(tasks, function(err) { //This function gets called after the two tasks have called their "task callbacks"
            if (err) return next(err); //If an error occurred, let express handle it by calling the `next` function
            // Here `locals` will be an object with `users` and `colors` keys
            // Example: `locals = {users: [...], colors: [...]}`
            res.render('home', {locals ,user: req.user} );
        });
    });


module.exports = router;
