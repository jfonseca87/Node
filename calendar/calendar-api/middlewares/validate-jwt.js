const jwt = require("jsonwebtoken");

const notAuhtorizeResponse = {
  ok: false,
  msg: "user is not authorized",
};

const allowedUris = [
    "/api/auth/login",
    "/api/auth/new"
]

const validateJWT = (req, res, next) => {

  if (allowedUris.some(x => x == req.originalUrl)) {
    return next();
  }
  
  try {
    const token = req.header("Authorization")?.split(" ")[1];
    if (!token) {
      return res.status(401).json(notAuhtorizeResponse);
    }

    const { id, name, email } = jwt.verify(token, process.env.JWT_KEY);
    req.currentUser = {
        id,
        name,
        email
    };
  } catch (error) {
    console.log(error);
    return res.status(401).json(notAuhtorizeResponse);
  }

  next();
};

module.exports = validateJWT;
