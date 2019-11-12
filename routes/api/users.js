const express = require('express');
const router = express.Router(); 
const User = require('../../models/User');

// @route   POST api/users
// @desc    Create user
// @access  Public 
router.post('/', 
   async (req, res) => { 

    const { name, email, age, city, gender } = req.body; 

    // See if user exists
    try {
        
        let user = await User.findOne({ email });

        // See if user exists 
        if (user) {
          return  res.status(400).json({ errors: [ { msg: 'User already exists' }]});
        }

        user = new User({
            name,
            email,
            age,
            city,
            gender
        });

        await user.save();

    } catch(err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
});

module.exports = router; 