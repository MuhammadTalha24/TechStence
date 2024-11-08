import React from 'react'
import { useState, useEffect } from 'react'
import { useAuth } from '../store/authContext'
import axios from 'axios'
import toast from 'react-hot-toast'
const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    })
    const { user } = useAuth();


    useEffect(() => {
        if (user) {
            setFormData({
                name: user.username,
                email: user.email,
                message: ''
            })
        }
    }, [user])

    const formSubmit = async (e) => {
        e.preventDefault()
        try {
            const response = await axios.post('http://localhost:5000/api/v1/contact', formData)
            toast.success(response.data.message)
            setFormData({
                name: user.username,
                email: user.email,
                message: ''
            })
        } catch (error) {
            toast.error(error.response.data.message)
        }

    }

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.id]: e.target.value
        })
    }

    return (
        <div className="container py-5">
            <div className="row justify-content-center">
                <div className="col-md-6">
                    <h2 className="text-center mb-4">Contact Us</h2>
                    <form onSubmit={formSubmit}>
                        <div className="mb-3">
                            <label htmlFor="name" className="form-label">Name</label>
                            <input type="text" value={formData.name} onChange={handleChange} className="form-control py-3 " id="name" placeholder="Enter your name" />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="email" className="form-label">Email</label>
                            <input type="email" value={formData.email} onChange={handleChange} className="form-control py-3 " id="email" placeholder="Enter your email" />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="message" className="form-label">Message</label>
                            <textarea value={formData.message} onChange={handleChange} className="form-control py-3 " id="message" rows="5" placeholder="Enter your message"></textarea>
                        </div>
                        <button type="submit" className="btn btn-primary w-100">Send Message</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Contact