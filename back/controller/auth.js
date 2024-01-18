const jwt = require("jsonwebtoken");

const auth = (req, res, next) => {
  const jwtToken = req.header("Authorization");
  if (!jwtToken) {
    return res.status(400).send({
      id: 400,
      mensaje: "Acceso denegado, token invalido",
    });
  }
  try {
    const payload = jwt.verify(jwtToken, "Mafe&Angie");
    req.user = payload;
    next();
  } catch (error) {
    return res.status(400).send({
      error: error.message,
    });
  }
};

module.exports = auth;
