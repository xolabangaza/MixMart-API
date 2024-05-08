require ("dotenv").config();
const express = require("express");
const app = express();
const mongoose = require("mongoose")
const productsRoutes = require('./routes/ProductRoute')


mongoose.connect(process.env.mixMart_db)
.then(()=>{
    console.log("Connected to DB succesfully")
}).catch(err =>{
    console.error("Could not connect to db", err)
})


app.use(express.json())
app.use('/api/v1/mixmart/',productsRoutes)


app.listen(4000, () => {
    console.log("Server is running @ port", 4000);
 });