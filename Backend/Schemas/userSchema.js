const mongoose = require("mongoose");

const Schema = mongoose.Schema;

let User = new Schema(
    {
        userId: {
            type: String
        },
        password: {
            type: String
        },
        isAdmin: {
            type: Boolean
        }
    },
    { collection: "users" }
);

module.exports = mongoose.model("users", User);