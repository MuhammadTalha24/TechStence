import Contact from "../models/contactModel.js"

export const contactController = async (req, res, next) => {
    try {
        const contact = await Contact.create(req.body)
        res.status(201).json({
            message: "Message Sent Successfully",
            success: true
        })
    } catch (error) {
        const err = {
            message: error.message,
            status: 500
        }
        next(err)
    }
}