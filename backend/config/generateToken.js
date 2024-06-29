const jwt = require("jsonwebtoken");

const secretKey = process.env.JWT_SECRET;

const generateToken = (id) => {
  const token = jwt.sign({ id }, secretKey, { expiresIn: "30d" });
  return token;
};

module.exports = generateToken;
