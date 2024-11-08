import React, { useState } from 'react'
import { useService } from '../store/serviceContext'


const Services = () => {
    const { services } = useService()
    return (
        <div className="container py-5">
            <div className="text-center mb-5">
                <h1 className="display-4 fw-bold">Our Services</h1>
                <p className="lead text-muted">Choose from our range of professional services</p>
            </div>
            <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
                {services.map((service) => (
                    <div className="col" key={service._id}>
                        <div className="card h-100 shadow-sm">
                            <div className="card-body">
                                <h5 className="card-title fw-bold mb-3">{service.service_name}</h5>
                                <p className="card-text mb-4">{service.service_description}</p>
                                <div className="d-flex justify-content-between align-items-center">
                                    <span className="h5 text-primary mb-0">${service.service_fee}</span>
                                    <small className="text-muted">By {service.service_by}</small>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Services