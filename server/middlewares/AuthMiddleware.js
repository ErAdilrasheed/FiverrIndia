import jwt from "jsonwebtoken";

export const verifyToken = (req, res, next) => {
  console.log(req.header);

  // const token = req.cookies.jwt;
  const token = req.header.authorization.split(" ")[1];
  console.log("token:= ", token);
  if (!token) return res.status(401).send("You are not authenticated!");
  jwt.verify(token, process.env.JWT_KEY, async (err, payload) => {
    if (err) return res.status(403).send("Token is not valid!");
    req.userId = payload?.userId;
    next();
  });
};
