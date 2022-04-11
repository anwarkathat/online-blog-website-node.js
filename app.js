const express = require('express');
const app = express();
const path = require('path');
var PublishBlog = require('./routers/blog')
var WriteBlogs = require('./routers/writeblog')
const db = require('./config/db')
require('dotenv').config();


app.use(express.json());
app.use(express.urlencoded({ extended: true }))

// PORT
const PORT = process.env.PORT || 8080

// Connection to the DB
db();

// Setting up view engine EJS
app.set("view engine", "ejs");

// Setting up Static Folder
app.use(express.static(path.join(__dirname, "static")))


// Index Route
app.get('/', (req, res) => {
    res.render("index")
})

// About Route
app.get('/about', (req, res) => {
    res.render("about")
})

// Write Blog Route
app.use('/writeblog', WriteBlogs)

// Piblished Blog Route
app.use('/blogs', PublishBlog)

// Connection to the PORT
app.listen(PORT, () => {
    console.log(`Server started at http://localhost:${PORT}`);
})