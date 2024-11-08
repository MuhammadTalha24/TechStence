import Contact from "../models/contactModel.js";
import { User } from "../models/userModel.js"

export const getAllUsers = async (req, res) => {
    try {
        const users = await User.find().select("-password");
        if (!users && users.length === 0) {
            return res.status(404).json({ message: "No users found" })
        }
        res.status(200).json(users)
    } catch (err) {
        next(err)
    }
}



export const getAllContacts = async (req, res) => {
    try {
        const contacts = await Contact.find();
        if (!contacts && contacts.length === 0) {
            return res.status(404).json({ message: "No Contacts found" })
        }
        res.status(200).json(contacts)
    } catch (err) {
        next(err)
    }
}



export const deleteContact = async (req, res, next) => {
    try {
        const { id } = req.params;
        const contact = await Contact.findByIdAndDelete(id);
        return res.status(200).json({ message: "Contact deleted successfully" })
    } catch (error) {
        next(error)
    }
}


export const deleteUser = async (req, res) => {
    try {
        const user = await User.findByIdAndDelete(req.params.id)
        if (!user) {
            return res.status(404).json({ message: "User not found" })
        }
        res.status(200).json({ message: "User deleted successfully" })
    } catch (err) {
        next(err)
    }
}


export const editUser = async (req, res) => {
    try {
        const { id } = req.params;
        const { username, phone, email, isAdmin } = req.body;
        const user = await User.findByIdAndUpdate(id, { username, phone, email, isAdmin }, { new: true });
        if (!user) {
            return res.status(404).json({ message: "User not found" })
        }
        res.status(200).json({ message: "User updated successfully" })
    } catch (error) {
        next(error)
    }
}
