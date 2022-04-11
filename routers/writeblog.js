var express = require('express')
var router = express.Router()
var blog = require('../models/blog')

router.get("/", async function(req, res) {
    res.render("writeblog");
})

router.post('/publish', async function(req, res) {
    console.log(req.body)
    if (req.body.BlogTitle !== '' && req.body.BlogContent !== '') {
        var data = new blog(req.body);
        data.save().then((result) => {
            if (result) {
                res.redirect("/blogs")
            }
        }).catch((err) => {
            console.log(err);
        });
    } else {
        var msg2 = {
            message: "Something Went Wrong !"
        }
        res.send(msg2.message)
    }
})

module.exports = router