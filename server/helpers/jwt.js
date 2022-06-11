const jwt  = require ('jsonwebtoken')
const SECRET_KEY = process.env.MY_KEY

function generateToken(payload) {
//   console.log(SECRET_KEY, "INI SECRET KEY")
  return jwt.sign(payload, SECRET_KEY)
}


function convertToken(token) {
  return jwt.verify(token, SECRET_KEY)
}

module.exports= {generateToken, convertToken}