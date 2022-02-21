const mongoose = require("mongoose");

const GROCOSchema = new mongoose.Schema({
name : {
    type : String,
    required:true
},
email : {
    type : String,
    required:true
},
number : {
    type : Number,
    required:true
},
subject : {
    type : String,
    required:true
},
message : {
    type : String,
    required:true
},
})

// create collection

const Register = new mongoose.model("ContactUs", GROCOSchema);

module.exports = Register;
