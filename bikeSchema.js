
const mongoose = require("mongoose");

const bookingSchema = mongoose.Schema({
    pid: Number,
    pname: String,
    pdesc:String,
    pimage: String
});



const userSchema = mongoose.Schema({

    username: String,
    uemail:String,
    upassworde:String
});

const Booking = mongoose.model("Booking", bookingSchema);
const User = mongoose.model("User", userSchema);


module.exports = { Booking, User };
