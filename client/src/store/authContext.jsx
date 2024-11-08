import { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";


export const AuthContext = createContext();


export const AuthProvider = ({ children }) => {


    const [token, setToken] = useState(localStorage.getItem('token'))
    const [isLoggedIn, setIsLoggedIn] = useState(false)
    const [user, setUser] = useState(null)
    const [isAdmin, setIsAdmin] = useState(false)
    const storeToken = (token) => {
        setIsLoggedIn(true)
        return localStorage.setItem("token", token);

    }



    const logout = () => {
        setToken('');
        localStorage.removeItem('token')
        setIsLoggedIn(false)
    }

    const userAuthentication = async () => {
        try {
            const response = await axios.get('http://localhost:5000/api/v1/user', {
                headers: {
                    Authorization: `Bearer ${verifyToken()}`
                }
            })
            setUser(response.data.userData)
            setIsAdmin(response.data.isAdmin)
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        userAuthentication();
    }, [])

    return (
        <AuthContext.Provider value={{ storeToken, logout, isLoggedIn, user, isAdmin }}>
            {children}
        </AuthContext.Provider>
    )
}


export const useAuth = () => {
    const authContext = useContext(AuthContext);
    return authContext
}
