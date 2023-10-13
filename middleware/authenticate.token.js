const jwt = require('jsonwebtoken');
const JWT_SECRET = process.env.JWT_SECRET;

// Implementation of the authentication middleware
function authenticateToken(req, res, next) {
    const token = req.header('Authorization');
    if (!token) {
      return res.status(401).json({ message: 'Authentication required' });
    }
  
    jwt.verify(token, JWT_SECRET, (err, user) => {
      if (err) {
        return res.status(403).json({ message: 'Invalid token' });
      }
      req.user = user;
      next();
    });
}


module.exports = authenticateToken;