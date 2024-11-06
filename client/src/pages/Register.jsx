import React from 'react'
import register from '../assets/register.png'
import { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../store/authContext'

const Register = () => {
    const [user, setUser] = useState({
        username: "",
        email: "",
        password: "",
        phone: ""
    })
    const navigate = useNavigate()
    const { storeToken } = useAuth()

    const formSubimt = async (e) => {
        e.preventDefault()
        try {
            const url = "http://localhost:5000/api/v1/register"
            const response = await axios.post(url, user)
            if (response.data.success == true) {
                storeToken(response.data.token)
                setUser({
                    username: "",
                    email: "",
                    password: "",
                    phone: ""
                })
                navigate("/login")
            } else {
                alert(response.data.message)
            }

        } catch (error) {
            console.log(error)
        }
    }

    return (
        <div className="container vh-100 py-5">
            <div className="row align-items-center justify-content-center">
                <div className="col-md-6 justify-content-center">
                    <div className='w-100'>
                        <img src={register} alt="register" className='img-fluid' />
                    </div>
                </div>
                <div className="col-md-6 order-md-first">
                    <div className="card shadow rounded-3">
                        <div className="card-body">
                            <h2 className="mb-4">Register</h2>
                            <form onSubmit={formSubimt}>
                                <div className="mb-3">
                                    <label htmlFor="username" className="form-label">Username</label>
                                    <input type="text" value={user.username} onChange={(e) => setUser({ ...user, username: e.target.value })} className="form-control" id="username" placeholder="Enter username" />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="email" className="form-label">Email address</label>
                                    <input type="email" value={user.email} onChange={(e) => setUser({ ...user, email: e.target.value })} className="form-control" id="email" placeholder="Enter email" />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="password" className="form-label">Password</label>
                                    <input type="password" value={user.password} onChange={(e) => setUser({ ...user, password: e.target.value })} className="form-control" id="password" placeholder="Enter password" />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="phone" className="form-label">Phone Number</label>
                                    <input type="tel" value={user.phone} onChange={(e) => setUser({ ...user, phone: e.target.value })} className="form-control" id="phone" placeholder="Enter phone number" />
                                </div>
                                <button type="submit" className="btn btn-primary w-100">Register</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Register