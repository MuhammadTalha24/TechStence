import mongoose from "mongoose";

const serviceSchema = new mongoose.Schema({
    service_name: {
        type: String,
        required: true,
    },
    service_description: {
        type: String,
        required: true,
    },
    service_fee: {
        type: Number,
        required: true,
    },
    service_by: {
        type: String,
        required: true,
    }
}, { timestamps: true })

export const Service = mongoose.model('Service', serviceSchema)


