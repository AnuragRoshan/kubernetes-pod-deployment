// const User = require('../models/userModel');




exports.getUser = async (req, res) => {
    const user = req.params.id
    try {
        // const user = await User.findById(user);
        res.status(200).json({ "Hello": user });
    } catch (error) {
        res.status(500).json(error);
    }
}