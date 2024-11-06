import { User } from "../models/userModel.js";
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'

export const userRegister = async (req, res, next) => {
    try {
        const { username, email, password, phone } = req.body;
        if (!username || !email || !password || !phone) {
            return res.status(400).json({
                message: "All Fields Are Required",
                success: false
            })
        }

        const userAlreadyExist = await User.findOne({ email });
        if (userAlreadyExist) {
            return res.status(400).json({
                message: "User Already Register",
                success: false
            })
        }

        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        const user = await User.create({
            username,
            email,
            password: hashedPassword,
            phone
        })

        const token = jwt.sign({ id: user._id, username: user.username, email: user.email }, process.env.JWT_SECRET, { expiresIn: "30d" })



        return res.status(200).json({
            message: "Registeration Successfull",
            user: {
                username: user.username,
                email: user.email,
                phone: user.phone
            },
            token,
            success: true
        })

    } catch (error) {
        next(error)
    }
}

export const userLogin = async (req, res, next) => {
    try {
        const { email, password } = req.body
        if (!email || !password) {
            return res.status(400).json({ message: "All Field Are Required", success: false })
        }

        const user = await User.findOne({ email })
        if (!user) {
            return res.status(400).json({
                message: "User Not Found",
                success: false
            })
        }

        const isPasswordMatch = await bcrypt.compare(password, user.password)
        if (!isPasswordMatch) {
            return res.status(400).json({
                message: "Invalid Password",
                success: false
            })
        }

        const token = jwt.sign({ id: user._id, username: user.username, email: user.email }, process.env.JWT_SECRET, { expiresIn: "30d" })

        return res.status(200).json({
            message: "Login Successfull",
            user: {
                username: user.username,
                email: user.email,
                phone: user.phone
            },
            token,
            success: true
        })



    } catch (error) {
        next(error)
    }
}


