const jwt = require("jsonwebtoken");

const requireAuth = (req, res, next) => {
  const token = req.body.jwt;
  if (token) {
    jwt.verify(token,"adhinvoiu4yei5v87nwa7rni", (err, decodedToken) => {
      if (err) {
        console.log(err.message);
        res.send({"error":"unauthorised"});
      } else {
        // console.log(decodedToken);
        res.user = decodedToken;
        next();
      }
    });
  } else {
    res.send({"error":"unauthorised"});
  }
};

module.exports = { requireAuth }; 