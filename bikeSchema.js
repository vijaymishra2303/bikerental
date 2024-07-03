
const mongoose = require("mongoose");

const vehicleSchema = mongoose.Schema({
    vid: Number,
    vname: String,
    vdesc:String,
    vimage: String
});



const userSchema = mongoose.Schema({

    byear:Number,
    bbody:String,
    bmake:String,
    bcond:String,
    bmodel:String,
    bprice:String



});

const Vehicle = mongoose.model("Vehicle", vehicleSchema);
const User = mongoose.model("User", userSchema);


module.exports = { Vehicle, User };
