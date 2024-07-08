
require("./mongoose")
const { Vehicle, User ,Rashi } = require("./bikeSchema");// Importing models
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

const upload = multer({ storage:storage }).single("vimage");

// POST method for creating a new product
app.post("/vehicle",  (req, res) => {
    upload(req, res,  (err) => {
        if (err) {
            console.log(err);
           
        } else {
                const newVehicle = new  Vehicle({
                    vid: req.body.vid,
                    vname: req.body.vname,
                    vprice:req.body.vprice,
                    vdesc:req.body.vdesc,
                     vimage: "http://localhost:4000/uploads/"+req.file.filename
                    
                });
                 newVehicle.save();
                res.send("File Upload")
            
        }
    });
});


app.get("/vehicle",async (req,resp)=>{
        const vehicles=await Vehicle.find()
        resp.send(vehicles)
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