const express = require("express");
const cors = require("cors");
// const mongoose = require("mongoose");
// const http = require("http");

require("dotenv").config()

// Create App
const app = express();

// MiddleWare
app.use(cors())
app.use(express.json())

// Routes

app.get("/", async (req, res) => {
    res.send("hello word")

});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
