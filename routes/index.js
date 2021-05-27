var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', {
    title: 'index',
    name: 'index'
  });
});

router.get('/aboutUs', function(req, res, next) {
  res.render('aboutUs', {
    title: 'About Us',
    name: 'aboutUs'
  });
});

router.get('/aboutUs2', function(req, res, next) {
  res.render('aboutUs2', {
    title: 'About Us',
    name: 'aboutUs2'
  });
});


router.get('/program', function(req, res, next) {
  res.render('program', { 
    title: 'Program',
    name: 'program'
 });
});

router.get('/programdetails', function(req, res, next) {
  res.render('programDetails', { 
    title: 'Program Details',
    name: 'programDetails'
 });
});

router.get('/facilities', function(req, res, next) {
  res.render('facilities', { 
    title: 'Facilities',
    name: 'facilities'
 });
});

router.get('/facility', function(req, res, next) {
  res.render('facility', { 
    title: 'Facility',
    name: 'facility'
 });
});



module.exports = router;
