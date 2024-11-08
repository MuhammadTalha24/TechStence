import jwt from 'jsonwebtoken'
import { User } from '../models/userModel.js';

export const verifyToken = async (req, res, next) => {
    const token = req.headers.authorization;
    if (!token) {
        return res.status(401).json({ message: "No token provided", success: false })
    }
    const tokenWithoutBearer = token.split(" ")[1]
    const isVerified = jwt.verify(tokenWithoutBearer, process.env.JWT_SECRET)
    if (!isVerified) {
        return res.status(401).json({ message: "Unauthorized", success: false })
    }
    const user = await User.findById(isVerified.id).select("-password")
    req.user = user
    req.token = tokenWithoutBearer
    req.userId = isVerified.id
    req.isAdmin = isVerified.isAdmin
    next()
}
