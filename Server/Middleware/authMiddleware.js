import jwt from 'jsonwebtoken';
import env from 'dotenv';
env.config();

const secretKey = process.env.SECRET_KEY;
export const verifyToken = (req, res, next) => {
  const token = req.cookies.auth_token;
  if (!token) {
    return res.status(401).send('Unauthorized');
  }
  try {
    const decoded = jwt.verify(token, secretKey);
    req.user = decoded;
    // res.send(decoded.email);
    // console.log(decoded);
    next();
  } catch (error) {
    return res.status(401).send('Invalid Token');
  }
};
