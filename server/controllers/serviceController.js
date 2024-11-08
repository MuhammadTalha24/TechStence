
import { Service } from "../models/serviceModel.js"
import errorHandler from "../middlewares/errorMiddleware.js";

export const getServices = async (req, res) => {
    try {
        const services = await Service.find();
        if (!services) {
            return res.status(404).json({ message: "No services found" })
        }
        return res.status(200).json(services)
    } catch (error) {

        errorHandler(error, req, res)
    }
}


export const createService = async (req, res) => {
    try {
        const { service_name, service_description, service_fee, service_by } = req.body
        const service = await Service.create({ service_name, service_description, service_fee, service_by })
        return res.status(201).json({ message: "Service created successfully", success: true })
    } catch (error) {
        errorHandler(error, req, res)
    }
}
