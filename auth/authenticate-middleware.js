/* 
  complete the middleware code to check if the user is logged in
  before granting access to the next middleware/route handler
*/

const jwt = require('jsonwebtoken');
const secret = require('../config/defaults');

module.exports = (req, res, next) => {
  const token = req.headers.authorization;
  // console.log(`token ${token}`)

  if(token) {
    jwt.verify(token, secret.jwtSecret, (err, decodedToken) => {
      if(err) {
        res.status(401).json({message: 'shall not pass!'})
      } else {
        //valid
        res.user = {
          username: decodedToken.username
          , department: decodedToken.department
        };
        next()
      }
    })
  } else {
    res.status(400).json({message: 'no token provided'})
  }
};
