const exprees = require("express");
const userModel = require("../Models/UserModel");
const router = exprees.Router()


router.post("/userdata", async (req, res) => {

    try {
        const { firstname, lastname, email, password } = req.body;

        // Create a new user document using the userModel
        const user = new userModel({
            firstname,
            lastname,
            email,
            password,
        });
        //   Save the user to the database
        await user.save();
        res.status(201).json({ message: "User created successfully" });
    }
    catch (error) {
        console.error("Error creating user:", error);
        res.status(500).json({ error: "Server error" });
    }

})

module.exports = router;
