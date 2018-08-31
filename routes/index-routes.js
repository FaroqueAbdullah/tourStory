const router = require('express').Router();

router.get('/touristsearchpage', (req, res) => {
    res.render('tourist',{ user: req.user });
});

router.get('/tourplacesearchpage', (req, res) => {
    res.render('tourplace',{ user: req.user });
});


module.exports = router;
