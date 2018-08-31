const router = require('express').Router();


router.get('/createBlog', (req, res) => {
    res.render('createBlog', { user: req.user });
});

router.get('/createEvent', (req, res) => {
    res.render('createEvent', { user: req.user });
});

router.get('/createTourplace', (req, res) => {
    res.render('createTourplace', { user: req.user });
});

router.get('/addVisitedPlace', (req, res) => {
    res.render('addVisitedPlace', { user: req.user });
});



module.exports = router;
