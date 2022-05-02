const Datastore = require("nedb");
const bcrypt = require('bcrypt');
const saltRounds = 10;



class StaffDAO {
    constructor(dbFilePath) {
        if (dbFilePath) {
            this.db = new Datastore({
                filename: dbFilePath,
                autoload: true
            });
        } else {
            this.db = new Datastore();
        }
    }

    init() {
        bcrypt.genSalt(saltRounds, (err, salt) => {
            bcrypt.hash('12345678', salt, (err, hash) => {
                this.db.insert({
                    email: 'admin@gmail.com',
                    password: hash
                });
                this.db.insert({
                    email: 'achoi200@caledonian.ac.uk',
                    password: hash
                });
                return this;
            });
        });
    }
    create(staffemail, password) {
        const that = this;
        bcrypt.hash(password, saltRounds).then(function (hash) {
            var entry = {
                email: staffemail,
                password: hash,
            };
            that.db.insert(entry, function (err) {
                if (err) {
                    console.log("Can't insert email: ", staffemail);
                }
            });
        });
    }
    lookup(email, cb) {
        this.db.find({ 'email': email }, function (err, entries) {
            if (err) {
                return cb(err, null)
            } else {
                if (entries.length == 0) {
                    return cb(null, null);
                }
                console.log(entries[0])
                return cb(null, entries[0]);
            }
        });
    }
}
const dao = new StaffDAO('./db/staff.db');
//dao.init();

module.exports = dao;
