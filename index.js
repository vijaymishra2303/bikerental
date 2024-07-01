
require("./mongoose")
const { Booking, User ,Rashi } = require("./bikeSchema");// Importing models
const express = require("express");
const app = express();
const multer = require("multer");
const cors = require("cors");
app.use(cors());
app.use(express.json());

app.use(express.static("public"))

// Multer configuration for file upload
const storage = multer.diskStorage({
    destination:(req, res, cb) => {
        cb(null, "public/uploads/");
    },
    filename:(req, file, cb) => {
        cb(null, file.originalname);
    }
});

const upload = multer({ storage:storage }).single("pimage");

// POST method for creating a new product
app.post("/booking",  (req, res) => {
    upload(req, res,  (err) => {
        if (err) {
            console.log(err);
           
        } else {
                const newBooking = new  Booking({
                    pid: req.body.pid,
                    pname: req.body.pname,
                    pdesc:req.body.pdesc,
                     pimage: "http://localhost:4000/uploads/"+req.file.filename
                    
                });
                 newBooking.save();
                res.send("File Uploaded")
            
        }
    });
});


app.get("/booking",async (req,resp)=>{
        const bookings=await Booking.find()
        resp.send(bookings)
    })




//user  collection tarun bhaiya ke liye
app.post("/user",  (req, res) => {
    upload(req, res,  (err) => {
        if (err) {
            console.log(err);
           
        } else {
                const newUser = new User({
                    // uemail: req.body.uemail,
                    // username: req.body.username,
                    // upassword:req.body.upassword
                    byear:req.body.byear,
                    bbody:req.body.bbody,
                    bmake:req.body.bmake,
                    bcond:req.body.bcond,
                    bmodel:req.body.bmodel,
                    bprice:req.body.bprice
                });
                 newUser.save()
                res.send("File Uploaded ")
            
        }
    });
});

app.get("/user",async (req,resp)=>{
    const users=await User.find()
    resp.send(users)
})



// -------------------------


app.listen(4000)