const User = require('../models/user');

exports.signup =(req, res) => {
    console.log("req.body ",req.body);
    const user = new User(req.body);
    user.save((err, user) => {
        if(err){
            return res.status(400).json({
                err
            })
        }
        res.json({
            user
        })
    })
}

exports.users = (req, res) => {
    User.find({}).exec((err, data) => {
        if(err){
            return res.status(400).json({
                err
            })
        }
        res.json(data);
    })
}


exports.profile = (req, res) => {
    res.json({
        message: "Hello World",
        age: "35",
        name: "สมเกียรติ ใจดี",
        email: "siamcodes@gmail.com",
        address: "496/25 กรุงเทพฯ"
    });

}
