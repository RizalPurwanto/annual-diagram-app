const { User } = require("../models/index");
const { convertToken } = require("../helpers/jwt");

const authentication = async (req, res, next) => {
  const { access_token } = req.headers;
  try {
    

    const payload = convertToken(access_token);
    
    const user = await User.findByPk(payload.id); //cari apakah sudah ada di database
    if (!user) {
      //bila tidak ada,
      throw {
        name: "INVALID_USER",
      };
    }

    req.loginUser = {
      username: user.username,
      email: user.email,
    };
    
    next();
  } catch (err) {
    next(err);
    
  }
};

module.exports = { authentication };
