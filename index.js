require ("dotenv").config();
const express = require("express");
const app = express();
const mongoose = require("mongoose")


mongoose.connect("mongodb+srv://xolabangaza:QRUc7lWbDHHkhY4v@cluster0.v2o51wq.mongodb.net/mix_mart?")
.then(()=>{
    console.log("Connected to DB succesfully")
})








app.listen(3005, () => {
    console.log("Server is running @ port");
 });