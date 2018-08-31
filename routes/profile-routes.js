const router = require('express').Router();
const passport = require('passport');
const VisitedPlace = require('../models/visitedPlace-model');
const User = require("../models/user-model");
const async = require('async');








router.get("/showMyProfile", function(req,res){
      res.redirect('/');
});


router.get('/showProfile/:id', function(req, res, next) {
        var locals = {};
        var tasks = [
            // Load users
            function(callback) {
                User.findById( req.params.id ,function(err, users) {
                    if (err) return callback(err);
                    locals.users = users;
                    callback();
                });
            },
            // Load colors
            function(callback) {
              VisitedPlace.find({ touristId:req.params.id }, function(err, locations){
                if (err) return callback(err);
                locals.locations = locations;
                callback();
            })
          }
        ];

        async.parallel(tasks, function(err) { //This function gets called after the two tasks have called their "task callbacks"
            if (err) return next(err); //If an error occurred, let express handle it by calling the `next` function
            // Here `locals` will be an object with `users` and `colors` keys
            // Example: `locals = {users: [...], colors: [...]}`
            res.render('showMyProfile', {locals ,user: req.user} );
        });
    });





module.exports = router;
