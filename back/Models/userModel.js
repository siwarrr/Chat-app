const mongoose = require("mongoose")

const userSchema = new mongoose.Schema({
    name: {type: String, required:true, minlength: 3, maxlength: 30},
    email: {type: String, required:true, minlength: 3, maxlength: 100, unique: true},
    password: {type: String, required:true, minlength:8},
},{
    timestamps: true,
  }
);

const userModel = mongoose.model("User", userSchema);

module.exports = userModel;