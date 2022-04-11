var express = require('express')
var router = express.Router()
var blog = require('../models/blog')


router.get('/', async function(req, res) {
    const blogs = await blog.find();
    res.render("blogs", { data: blogs });
})


router.get('/:id', async function(req, res) {
    const data = await blog.findOne({ _id: req.params.id }).catch((err) => {
        console.log(err)
    });
    if (!data) {
        res.redirect("/blogs")
    } else {
        res.render("readblog", { BlogData: data });
    }
})

module.exports = router