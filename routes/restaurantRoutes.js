const express = require('express');
const router = express.Router();
const controller = require('../controllers/restaurantController.js');
const {login} = require('../auth/auth')
const {authenticate} = require('../auth/auth')

router.get("/", controller.landing_page);
router.get('/lunchmenu', controller.entries_list);
router.get('/lunch', controller.lunch_page);
router.get('/main', controller.main_page);
router.get('/register', authenticate, controller.register_page);
router.post('/register', authenticate, controller.post_new_staff);
router.get('/login', controller.login_page);
router.post('/login', login, controller.staff_loggedin);
router.get('/staffadd', authenticate,controller.new_dish);
router.post('/staffadd', authenticate, controller.post_new_dish);
router.get("/staffhome", authenticate, controller.staff_homepage);
router.get("/logout", controller.logout);


router.use(function(req, res) {
    res.status(404);
    res.type('text/plain');
    res.send('404 Not found.');
})
/*router.use(function(err, req, res, next) {
    res.status(500);
    res.type('text/plain');
    res.send('Internal Server Error.');
})*/
module.exports = router; 