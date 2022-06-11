const { User } = require("../models/index");
const {comparePassword} = require("../helpers/bcrypt")
const {generateToken} = require("../helpers/jwt")

class Controller {
  static async login(req, res, next) {
    try {
      const { email, password } = req.body;
      if (!email || !password) {
        let errors = [];

        if (!email) {
          errors.push("Email required");
        }
        if (!password) {
          errors.push("Password required");
        }
        throw {
          name: "LOGIN_DATA_REQUIRED",
          message: errors,
        };
      }
      
      const user = await User.findOne({
        where: {
          email: email,
        },
      });
      
      if (user) {
        const isPasswordValid = comparePassword(password, user.password);
        
        if (isPasswordValid) {
          const payload = { id: user.id, email: user.email };

          const token = generateToken(payload);
          
          res.status(200).json({
            message: "Login Successful",
            access_token: token,
            id: user.id,
            username: user.username,
            email: user.email,
          });
        } else {
          throw {
            code: 401,
            name: "Unauthorized",
            message: "Invalid email or password",
          };
        }
      } else {
        throw {
          code: 401,
          name: "Unauthorized",
          message: "Invalid email or password",
        };
      }
    } catch (err) {
      
      next(err);
    }
  }
}

module.exports = Controller;