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
const User = require("./models/User");
const Ticket = require("./models/Ticket");
const authRoutes = require("./routes/authRoutes");
const ticketRoutes = require("./routes/ticketRoutes");
const departmentRoutes = require("./routes/departmentRoutes");
const messageRoutes = require("./routes/messageRoutes");

app.use("/api", authRoutes);

app.use("/api", ticketRoutes);
app.use("/api", departmentRoutes);
app.use("/api", messageRoutes);
const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Server is Running ${port}`);
});