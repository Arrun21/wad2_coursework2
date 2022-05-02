const bcrypt = require("bcrypt");
const staffModel = require("../models/staffModel");
const jsontoken = require("jsonwebtoken");

exports.login = function (req, res, next) {
    let staffemail = req.body.loginemail;
    let password = req.body.loginpassword;

    staffModel.lookup(staffemail, function (err, staff) {
        if (err) {
            console.log("error looking up email", err);
            return res.status(401).send();
        }
        console.log(staff)
        if (!staff) {
            console.log("email ", staffemail, " not found");
            return res.render("staff/login");
        }
        //compare provided password with stored password
        bcrypt.compare(password, staff.password, function (err, result) {
            if (err) {
                console.log(err);
                return res.render("staff/login");
            }
            if (result) {
                //variable store to store information about the staff such as staffemail.
                let store = { staffemail: staff.email };
                //access token created
                let accessToken = jsontoken.sign(store, process.env.ACCESS_TOKEN_SECRET/*, { expiresIn: 300 }*/);
                res.cookie("jsontoken", accessToken);
                next();
            } else {
                return res.render("staff/login");
            }
        });
    });
};

exports.authenticate = function (req, res, next) {
    let accessToken = req.cookies['jsontoken'];
    if (!accessToken) {
        return res.status(403).send();
    }

    try {
        jsontoken.verify(accessToken, process.env.ACCESS_TOKEN_SECRET);
        next();
    } catch (e) {
        res.status(401).send('There was an error')
    }
};
