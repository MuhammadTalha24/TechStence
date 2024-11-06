import { User } from "../models/userModel.js"

export const userDetails = async (req, res, next) => {
    try {
        const userData = req.user
        res.status(200).json({
            userData,
            success: true,
        })
    } catch (error) {
        next(error)
    }
}