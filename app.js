const epxress = require("express")
const bodyParser = require("body-parser")
const passport = require('passport')
const mongoose = require('mongoose')
const cors = require("cors")
const morgan = require("morgan")
const authRoutes = require("./routes/auth")
const keys = require('./config/keys')
const app = epxress()

mongoose.connect(keys.mongoURI)
    .then(() => console.log('connected MongoDB'))
    .catch(error => console.log(error))
app.use(passport.initialize())
require('./middleware/passport')(passport)
app.use(morgan("dev"))
app.use(cors("dev"))
app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json());


app.use("/api/auth",authRoutes)

module.exports = app