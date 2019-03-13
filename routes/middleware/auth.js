const config = require('config');
const jwt = require('jsonwebtoken');

const auth = (req, res, next) => {
  const token = req.header('x-auth-token');

  // Check for token
  if (!token) {
    res.status(401).json({ msg: 'This login session is not authorized; no token.' });    
  }

  // Verify token
  const decoded = jwt.verify(token, config.get(jwtSecret));
}