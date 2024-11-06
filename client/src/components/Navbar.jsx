import React from 'react'
import { Link } from 'react-router-dom'
import { useAuth } from '../store/authContext'

const Navbar = () => {
    const { isLoggedIn } = useAuth()
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-dark bg-primary py-3">
                <div className="container">
                    <Link to={'/'} className="navbar-brand fs-3" >TechStense</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav ms-auto fs-6 gap-2">
                            <li className="nav-item">
                                <Link className="nav-link" to={'/'}>Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to={'/about'}>About</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to={'/contact'}>Contact</Link>
                            </li>
                            <li className="nav-item">
                                <Link className='nav-link' to={'/services'}>Services</Link>
                            </li>
                            {isLoggedIn ? <li className="nav-item">
                                <Link className='nav-link' to={'/logout'}>Logout</Link>
                            </li> :
                                <>
                                    <li className="nav-item">
                                        <Link className='nav-link' to={'/login'}>Login</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className='nav-link' to={'/register'}>Register</Link>
                                    </li>
                                </>
                            }


                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar