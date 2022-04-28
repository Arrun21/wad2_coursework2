const restaurantDAO = require('../models/restaurantModel');
const staffDao = require("../models/staffModel.js");



exports.entries_list = function (req, res) {
    res.send('<h1>Lunchmenu Messages</h1><p>Not yet implemented:will show a list of lunch menu entries.</p>');
    restaurantDAO.getAllEntries();
}
exports.landing_page = function (req, res) {
    res.redirect('/about.html');
}

exports.register_page = function (req, res) {
    res.render("staff/register");
};

exports.login_page = function (req, res) {
    res.render("staff/login");
};


exports.staff_loggedin = function (req, res) {
    res.redirect('/staffhome');
};


exports.lunch_page = function (req, res) {
    restaurantDAO.getAllEntries()
        .then((list) => {
            const lunch = { chefSpecial: [], meals: [] };

            list.forEach(dish => {
                if (dish.type === 'lunch') {
                    if (dish.hidden) return;
                    if (dish.special) {
                        return lunch.chefSpecial.push(dish);
                    }
                    lunch.meals.push(dish);
                }
            })
            res.render('lunch', {
                'title': 'Lunch Menu',
                'lunch': lunch
            });
            console.log('promise resolved');
        })
        .catch((err) => {
            console.log('promise rejected', err);
        })
}

exports.main_page = function (req, res) {
    restaurantDAO.getAllEntries()
        .then((list) => {
            const main = { chefSpecial: [], meals: [] };

            list.forEach(dish => {
                if (dish.type === 'main') {
                    if (dish.hidden) return;
                    if (dish.special) {
                        return main.chefSpecial.push(dish);
                    }
                    main.meals.push(dish);
                }
            })
            res.render('main', {
                'title': 'Main Menu',
                'main': main
            });
            console.log('promise resolved');
        })
        .catch((err) => {
            console.log('promise rejected', err);
        })
}

exports.post_new_staff = function (req, res) {
    const email = req.body.staffemail;
    const password = req.body.password;
    const password2 = req.body.confirmpassword;

    if (password !== password2) {
        return res.redirect('/login')
      }
    if (!email || !password) {
        res.send(401, "no email or no password");
        return;
    }
    staffDao.lookup(email, function (err, u) {
        if (u) {
            res.send(401, "Staff exists:", email);
            return;
        }
        staffDao.create(email, password);
        console.log("register email", email, "password", password);
        res.redirect("/login");
    });
};



exports.new_dish = function (req, res) {
    res.render('staff/staffadd', {
        title: 'Staff',
        loggedIn: true,
        })
}

exports.post_new_dish = function (req, res) {
    console.log('processing post-new_entry controller');
    console.log(req.body)
    if (!req.body.name) {
        res.status(400).send("Entries must have an dish name.");
        return;
    }
    restaurantDAO.addDish(req.body.name, req.body.description, req.body.ingredients, req.body.allergy, req.body.price, req.body.type, req.body.special, req.body.hidden);
    res.redirect('staffhome');
}

exports.staff_homepage = function (req, res) {
    restaurantDAO.getAllEntries()
      .then((list) => {
        res.render('staff/staffhome', {
          title: "Staff",
          loggedIn: true,
          entries: list,
        });
      })
      .catch((err) => {
        console.log("promise rejected", err);
      });
  };

exports.logout = function (req, res) {
    res.clearCookie("jsontoken").status(200).redirect("/");
};

