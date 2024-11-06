import React from 'react'
import { useState } from 'react'
import register from '../assets/register.png'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import toast, { Toaster } from 'react-hot-toast';
import { useAuth } from '../store/authContext'
const Login = () => {
    const [user, setUser] = useState({
        email: "",
        password: ""
    })
    const { storeToken } = useAuth();
    const navigate = useNavigate()
    const formSubimt = async (e) => {
        e.preventDefault()
        try {
            const url = 'http://localhost:5000/api/v1/login';
            const response = await axios.post(url, user);
            if (response.data.success === false) {
                toast.error(response.data.message)
            } else {

                storeToken(response.data.token)
                toast.success(response.data.message)

                navigate("/")

            }

        } catch (error) {
            console.log(error)
            toast.error("Something went wrong!")
        }
    }
    const handleChange = (e) => {
        setUser({ ...user, [e.target.id]: e.target.value })
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
                            <h2 className="mb-4">Login</h2>
                            <form onSubmit={formSubimt}>

                                <div className="mb-3">
                                    <label htmlFor="email" className="form-label">Email address</label>
                                    <input type="email" value={user.email} onChange={handleChange} className="form-control" id="email" placeholder="Enter email" />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="password" className="form-label">Password</label>
                                    <input type="password" value={user.password} onChange={handleChange} className="form-control" id="password" placeholder="Enter password" />
                                </div>

                                <button type="submit" className="btn btn-primary w-100">Login</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login