import { createContext, useContext } from "react";
import { useState, useEffect } from "react";
import axios from "axios";

export const ServiceContext = createContext()


export const ServiceProvider = ({ children }) => {
    const [services, setServices] = useState([])
    const getServices = async () => {
        try {
            const response = await axios.get('http://localhost:5000/api/v1/services')
            setServices(response.data)
        } catch (error) {
            console.log(error)
        }
    }
    useEffect(() => {
        getServices()
    }, [])
    return (
        <ServiceContext.Provider value={{ services }}>
            {children}
        </ServiceContext.Provider>
    )
}

export const useService = () => {
    const serviceContext = useContext(ServiceContext)
    return serviceContext
}

