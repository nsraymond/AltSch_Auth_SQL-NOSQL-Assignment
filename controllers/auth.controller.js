const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require('../models/users.model');

const JWT_SECRET = process.env.JWT_SECRET;


async function signup(req, res) {
  // Implementation of the signup route
  try {
    const { username, password } = req.body;
    
    // Check if the user already exists
    const existingUser = await User.findOne({ username });
    if (existingUser) {
      return res.status(400).json({ message: 'User already exists' });
    }

    // Hash the password using bcrypt
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create a new user
    const newUser = new User({ username, password: hashedPassword });
    await newUser.save();

    res.status(201).json({ message: 'User registered successfully' });
  } catch (error) {
    console.log(error)
    res.status(500).json({ error: 'Internal server error' });
  }
  
}

async function login(req, res) {
  // Implementation of the login route
    try {
      const { username, password } = req.body;
      
      // Find the user in the database
      const user = await User.findOne({ username });
      if (!user) {
        return res.status(401).json({ message: 'Invalid credentials' });
      }
  
      // Compare the provided password with the hashed password
      const passwordMatch = await bcrypt.compare(password, user.password);
      if (!passwordMatch) {
        return res.status(401).json({ message: 'Invalid credentials' });
      }
  
      // Generate a JWT token with a 1-hour expiration
      const token = jwt.sign({ userId: user._id }, JWT_SECRET, {
        expiresIn: '1h',
      });
  
      res.json({ token });
    } catch (error) {
      res.status(500).json({ error: 'Internal server error' });
    }
  
}

module.exports = { 
    signup,
    login 
};
