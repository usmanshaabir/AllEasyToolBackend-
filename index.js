const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");


const userRoutes = require("./Routes");


require("dotenv").config()

// Create App
const app = express();

// MiddleWare
app.use(cors())
app.use(express.json())

// Routes
app.use("/", userRoutes);

// monogoose Conection
const dbUrl = process.env.CONNECTION_STRING

mongoose.connect(dbUrl, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => {
    console.log(`Connected to MongoDB: ${dbUrl}`);
}).catch((error) => {
    console.error(`MongoDB connection error: ${error}`);
})

const db = mongoose.connection;

db.on("error", (error) => {
    console.error('MongoDB connection error:', error);
})
db.once("open", () => {
    console.log('Connected to MongoDB');
    const PORT = process.env.PORT
    app.listen(PORT, () => {
        console.log(`Server is running on port ${PORT}`);
    })

})
