require ("dotenv").config();
const express = require("express");
const app = express();
const mongoose = require("mongoose")
const productsRoutes = require('./routes/ProductRoute')





app.use(express.json())
app.use('/api/mixmart',productsRoutes)


app.listen(3005, () => {
    console.log("Server is running @ port", 3005);
 });