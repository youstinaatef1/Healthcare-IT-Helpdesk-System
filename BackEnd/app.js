require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const app = express();
const bcrypt = require("bcrypt");


async function dbConnection(){
    try {
        await mongoose.connect(process.env.MONGODB_URI);
        console.log("Connected to MongoDB");
    } catch (error) {
        console.error("Error connecting to MongoDB:", error);
    }
}
dbConnection();

app.use(express.json());
const User = require("./models/User");
const Ticket = require("./models/Ticket");
const authRoutes = require("./routes/authRoutes");
const ticketRoutes = require("./routes/ticketRoutes");
const departmentRoutes = require("./routes/departmentRoutes");

app.use("/api", authRoutes);

app.use("/api", ticketRoutes);
app.use("/api", departmentRoutes);
const port = process.env.PORT || 3000;


app.listen(port, () => {
    console.log(`Server is Running ${port}`);
});