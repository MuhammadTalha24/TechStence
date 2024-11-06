import React, { useEffect } from 'react'
import { useAuth } from '../store/authContext'
import { useNavigate } from 'react-router-dom'
import toast from 'react-hot-toast'

const Logout = () => {
    const navigate = useNavigate()
    const { logout } = useAuth()

    useEffect(() => {
        logout()
        toast.success('Logout Successfully', {
            id: 'logout' // Add unique ID to prevent duplicate toasts
        })

        navigate('/login')

    }, [logout, navigate])

    return null
}

export default Logout