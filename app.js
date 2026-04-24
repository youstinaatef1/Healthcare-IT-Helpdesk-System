require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const app = express();
const bcrypt = require("bcrypt");
mongoose.connect("mongodb://127.0.0.1:27017/Healthcare")
.then(() =>{
    console.log("connected Successfully");
})
.catch((error) =>{
    console.log(error);
})
app.use(express.json());
// const User = require("./models/User");
const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Server is Running ${port}`);
});