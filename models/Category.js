const mongoose = require("mongoose")
const Schema = mongoose.Schema
const passport = require('passport')

const categorySchema = new Schema({
    user: {
        ref: "users",
        type: Schema.Types.ObjectID
    }
})
module.exports = mongoose.model("categories", categorySchema)