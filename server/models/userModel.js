import mongoose from 'mongoose'


const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    phone: {
        type: String,
        requred: true
    },
    isAdmin: {
        type: Boolean,
        default: false
    }
}, { timestamps: true })


export const User = mongoose.model('User', userSchema);