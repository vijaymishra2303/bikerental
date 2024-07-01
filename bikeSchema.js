
const mongoose = require("mongoose");

const bookingSchema = mongoose.Schema({
    pid: Number,
    pname: String,
    pdesc:String,
    pimage: String
});



const userSchema = mongoose.Schema({

    // username: String,
    // uemail:String,
    // upassworde:String
    byear:Number,
    bbody:String,
    bmake:String,
    bcond:String,
    bmodel:String,
    bprice:String



});

const Booking = mongoose.model("Booking", bookingSchema);
const User = mongoose.model("User", userSchema);


module.exports = { Booking, User };
