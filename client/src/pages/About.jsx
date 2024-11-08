import React from 'react'
import { useAuth } from '../store/authContext'

const About = () => {
    const { user } = useAuth();

    return (
        <div className="container py-5 vh-100">
            <div className="row">
                <div className="col-md-8 mx-auto">
                    <h2 className="text-center mb-4">About Us</h2>
                    <div className="card">
                        <div className="card-body">
                            <h5 className="card-title mb-4">Welcome {user ? user.username : 'Guest'}</h5>
                            <p className="card-text">
                                We are a dedicated team passionate about providing exceptional services and solutions. Our mission is to deliver innovative and high-quality products that meet our customers' needs.
                            </p>
                            <p className="card-text">
                                With years of experience in the industry, we have built a strong reputation for reliability, excellence, and customer satisfaction. Our team of experts works tirelessly to ensure that we stay at the forefront of technological advancements.
                            </p>
                            <p className="card-text">
                                Whether you're a small business or a large enterprise, we have the expertise and resources to help you achieve your goals. We believe in building long-lasting relationships with our clients through trust, transparency, and outstanding service.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About