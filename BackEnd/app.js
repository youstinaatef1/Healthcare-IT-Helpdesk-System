require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const app = express();
const errorMiddleware = require("./Middleware/errorMiddleware");

mongoose.connect(process.env.MONGO_URI)
.then(() =>{
    console.log("connected Successfully");
})
.catch((error) =>{
    console.log(error);
})

app.use(express.json());

// CORS
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET,POST,PUT,DELETE,OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type,Authorization");
  if (req.method === "OPTIONS") return res.sendStatus(200);
  next();
});

// Static uploads
app.use("/uploads", express.static("uploads"));

const authRoutes = require("./routes/authRoutes");
const ticketRoutes = require("./routes/ticketRoutes");
const departmentRoutes = require("./routes/departmentRoutes");
const messageRoutes = require("./routes/messageRoutes");

app.use("/api", authRoutes);
app.use("/api", ticketRoutes);
app.use("/api", departmentRoutes);
app.use("/api", messageRoutes);

app.use(errorMiddleware);

const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Server is Running ${port}`);
});