import jwt from "jsonwebtoken";

export async function isAuth(req, res, next) {
  const header = req.headers["authorization"]?.split(" ")[1];
  if (!header) {
    return res.status(401).json({ message: "No token provided" });
  }

  const user = jwt.decode(header, process.env.secret);
  if (!user || !user.login) {
    return res.status(403).json({ message: "Invalid token" });
  }

  req.user = user;

  next();
}

export async function isAdmin(req, res) {}
