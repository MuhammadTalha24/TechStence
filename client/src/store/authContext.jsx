import { createContext, useContext, useState } from "react";


export const AuthContext = createContext();


export const AuthProvider = ({ children }) => {

    const [token, setToken] = useState(localStorage.getItem('token'))
    const [isLoggedIn, setIsLoggedIn] = useState(false)

    const storeToken = (token) => {
        setIsLoggedIn(true)
        return localStorage.setItem("token", token);

    }

    const logout = () => {
        setToken('');
        localStorage.removeItem('token')
        setIsLoggedIn(false)
    }



    return (
        <AuthContext.Provider value={{ storeToken, logout, isLoggedIn }}>
            {children}
        </AuthContext.Provider>
    )
}


export const useAuth = () => {
    const authContext = useContext(AuthContext);
    return authContext
}
