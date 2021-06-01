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

router.get('/program', function(req, res, next) {
  res.render('program', { 
    title: 'Program',
    name: 'program'
 });
});


router.get('/program/1', function(req, res, next) {
  res.render('programDetails', { 
    title: 'Program',
    name: 'programDetails',
    num: '1',
    programName: 'Design and the Birth of Daily Life',
    description: 'The exhibition will address five acts of daily life that were considered normal before COVID-19. What objects accompany us in our daily lives when we watch television, do laundry, clean, store food, and listen to music? Experience how valuable our mundane lives were through the Symbols of Happiness exhibition!',
    schedule: '2020.11.18 ~ 2021.12.01',
    location: 'Online',
    open: 'Always'
 });
});

router.get('/program/2', function(req, res, next) {
  res.render('programDetails', { 
    title: 'Program',
    name: 'programDetails',
    num: '2',
    programName: 'SEOUL LIGHT',
    description: 'SEOUL Light features intrinsic light content utilizing DPP’s unique exterior. SEOUL Light will be operated as a basis for night tourism during the winter when the number of travelers declines markedly to contribute to the development of Dongdaemun as the premier light content festival leading DPP’s future. We will maintain the vitality of the area with stories citizens can sympathize with by expressing public narratives through arts and technology.',
    schedule: '2020.12.20 ~ 2021.01.03',
    location: 'DDP Design Avenue',
    open: '19:00-22:00 every day'
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


router.get('/facility/1', function(req, res, next) {
  res.render('facility', { 
    title: 'Facility',
    name: 'facility',
    num: '01',
    facilityName: 'Art Hall 1',
    description: 'Art Hall is a white, spacious space without poles for various events and exhibitions to be held. It is the best space to present a design/concept/performance for the first time to the world. Art Hall 1 is the highest building in DDP with various additional facilities.'
 });
});

router.get('/facility/2', function(req, res, next) {
  res.render('facility', { 
    title: 'Facility',
    name: 'facility',
    num: '02',
    facilityName: 'Art Hall 2',
    description: 'Unlike existing conference and convention space that has time and space constraints, Art Hall 2 is a differentiated space for professional content and creative idea to be shared and promoted.'
 });
});

router.get('/facility/3', function(req, res, next) {
  res.render('facility', { 
    title: 'Facility',
    name: 'facility',
    num: '03',
    facilityName: 'Design Museum',
    description: 'The Design Museum decorated with the bamboo-lined floor and gentle, soft lighting is where various design exhibitions, including Korean traditional culture content, are held.'
 });
});

router.get('/facility/4', function(req, res, next) {
  res.render('facility', { 
    title: 'Facility',
    name: 'facility',
    num: '04',
    facilityName: 'Design Exhibition Hall',
    description: 'Characterized by aesthetics created by sensuous curves and diagonals, Design Exhibition Hall is an exhibition space to introduce cutting-edge design and fashion trends.'
 });
});

router.get('/facility/5', function(req, res, next) {
  res.render('facility', { 
    title: 'Facility',
    name: 'facility',
    num: '05',
    facilityName: 'Designers Lounge',
    description: 'The Designers Lounge is a lounge with an outdoor lawn and a sensational interior, where design experts exchange cutting-edge information with each other.'
 });
});

router.get('/facility/6', function(req, res, next) {
  res.render('facility', { 
    title: 'Facility',
    name: 'facility',
    num: '06',
    facilityName: 'Design Shop',
    description: 'The large-scale Design Shops 1 were named "Sallimgwan" in Korean, where "sallim" refers to housework, to emphasize the importance of design in our daily lives. Visitors can buy various witty and creative design products at the store. It also hosts design promotion events and seminars. '
 });
});

router.get('/facility/7', function(req, res, next) {
  res.render('facility', { 
    title: 'Facility',
    name: 'facility',
    num: '07',
    facilityName: 'Oullim Square',
    description: 'The Oullim Square, which is the first entrance to DDP, is a space where diverse cultural events are held. It is the resting space for citizens and where the information center is located. It is connected to the Dongdaemun History & Culture Park Station (Exit 1).'
 });
});

router.get('/facility/8', function(req, res, next) {
  res.render('facility', { 
    title: 'Facility',
    name: 'facility',
    num: '08',
    facilityName: 'Dongdaemun History Museum',
    description: 'The Dongdaemun History Museum holds permanent exhibitions of relics excavated in the process of building the DDP and the Dongdaemun History & Culture Park, allowing visitors to reflect on the history and locality of the old Dongdaemun Stadium. During the excavation from 2008 to 2009, a number of historic sites and relics including the walls and bastions of Hanyangdoseong, the Seoul City Wall, the Yigansumun Water Gate and military facilities of the Joseon Dynasty was excavated, which had been assumed to be destroyed during the constructions of park and stadium under Japanese colonialism. The museum also allows visitors to explore the history of Dongdaemun Stadium site with exhibitions of relics and videos, an excavation floor plan on the museum floor and an AR excavation experience.'
 });
});

router.get('/facility/9', function(req, res, next) {
  res.render('facility', { 
    title: 'Facility',
    name: 'facility',
    num: '09',
    facilityName: 'Yigansumun Exhibition Hall',
    description: 'The Yigansumun Exhibition Hall, named after the Joseon drainage system called Yigansu, is a multi-purpose hall for holding diverse programs including design work exhibitions, performances, and events.'
 });
});

router.get('/facility/10', function(req, res, next) {
  res.render('facility', { 
    title: 'Facility',
    name: 'facility',
    num: '10',
    facilityName: 'Gallery MUN',
    description: 'Gallery Mun is a design gallery open to everyone, operated according to the mottoes ‘Design is Everything!’ and ‘We are all Designers’. It is open to everyone.'
 });
});





module.exports = router;
