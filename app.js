const bodyParser = require("body-parser")

var express                  = require ("express"),
    mongoose                 = require ("mongoose"),
    bodyPareser              = require ("body-parser"),
    passport                 = require ("passport"),
    LocalStrategy            = require ("passport-local"),
    passportLocalMongoose    = require ("passport-local-mongoose"),
    app                      = express()

// Set up the app
app.set("view engine", "ejs")
app.use(bodyParser.urlencoded({extended: true}))


app.listen(3000, function(){
    console.log("Server has started!")
})