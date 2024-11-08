import React from 'react'
import { useService } from '../store/serviceContext'

const Home = () => {
    const { services } = useService()

    return (
        <div className="container-fluid p-0">
            {/* Hero Section */}
            <div className="bg-dark d-flex justify-content-center align-items-center text-white py-5 vh-100">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6">
                            <h1 className="display-4 fw-bold">Transform Your Digital Presence</h1>
                            <p className="lead">We create innovative digital solutions that help businesses grow and succeed in the modern world.</p>
                            <button className="btn btn-light btn-lg me-3">Get Started</button>
                            <button className="btn btn-outline-light btn-lg">Learn More</button>
                        </div>
                        <div className="col-lg-6">
                            <img src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2426&q=80" alt="Digital Agency" className="img-fluid rounded shadow" />
                        </div>
                    </div>
                </div>
            </div>

            {/* Services Section */}
            <div className="container py-5">
                <h2 className="text-center mb-5">Our Services</h2>
                <div className="row g-4 mb-5">
                    {
                        services.slice(0, 3).map((service) => (
                            <div className="col-md-4" key={service._id}>
                                <div className="card h-100 shadow-sm">
                                    <div className="card-body">
                                        <i className="bi bi-laptop fs-1 text-primary mb-3"></i>
                                        <h3 className="card-title h5">{service.service_name}</h3>
                                        <h4>{service.service_price}</h4>
                                        <p className="card-text">{service.service_description}</p>
                                        <div className="badge bg-primary">{service.service_by}</div>
                                    </div>
                                </div>
                            </div>
                        ))
                    }

                </div>

                {/* Why Choose Us Section */}
                <div className="bg-light py-5">
                    <div className="container">
                        <h2 className="text-center mb-5 text-black">Why Choose Us</h2>
                        <div className="row g-4">
                            <div className="col-md-3">
                                <div className="text-center">
                                    <div className="display-4 text-primary mb-3">10+</div>
                                    <h3 className="h5 text-black">Years Experience</h3>
                                </div>
                            </div>
                            <div className="col-md-3">
                                <div className="text-center">
                                    <div className="display-4 text-primary mb-3">200+</div>
                                    <h3 className="h5 text-black">Projects Completed</h3>
                                </div>
                            </div>
                            <div className="col-md-3">
                                <div className="text-center">
                                    <div className="display-4 text-primary mb-3">50+</div>
                                    <h3 className="h5 text-black">Team Members</h3>
                                </div>
                            </div>
                            <div className="col-md-3">
                                <div className="text-center">
                                    <div className="display-4 text-primary mb-3">99%</div>
                                    <h3 className="h5 text-black">Client Satisfaction</h3>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Recent Work Section */}
                <div className="container py-5">
                    <h2 className="text-center mb-5">Recent Work</h2>
                    <div className="row g-4">
                        <div className="col-md-4">
                            <div className="card h-100">
                                <img src="https://images.unsplash.com/photo-1472851294608-062f824d29cc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80" className="card-img-top" alt="Project 1" />
                                <div className="card-body">
                                    <h5 className="card-title">E-commerce Platform</h5>
                                    <p className="card-text">A full-featured online shopping platform with modern UI/UX.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="card h-100">
                                <img src="https://images.unsplash.com/photo-1563986768609-322da13575f3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80" className="card-img-top" alt="Project 2" />
                                <div className="card-body">
                                    <h5 className="card-title">Mobile Banking App</h5>
                                    <p className="card-text">Secure and user-friendly mobile banking application.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="card h-100">
                                <img src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2426&q=80" className="card-img-top" alt="Project 3" />
                                <div className="card-body">
                                    <h5 className="card-title">Social Media Dashboard</h5>
                                    <p className="card-text">Analytics and management platform for social media.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>



                {/* Customer Reviews Section */}
                <div className="bg-light py-5">
                    <div className="container">
                        <h2 className="text-center text-black mb-5">What Our Clients Say</h2>
                        <div className="row g-4">
                            <div className="col-md-4">
                                <div className="card h-100">
                                    <div className="card-body">
                                        <div className="mb-3 text-warning">
                                            ★★★★★
                                        </div>
                                        <p className="card-text">"Outstanding service and exceptional results. The team was professional and delivered beyond our expectations."</p>
                                        <h6 className="card-subtitle mb-2 text-muted">- John Smith, CEO</h6>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="card h-100">
                                    <div className="card-body">
                                        <div className="mb-3 text-warning">
                                            ★★★★★
                                        </div>
                                        <p className="card-text">"They transformed our business with their innovative solutions. Highly recommended!"</p>
                                        <h6 className="card-subtitle mb-2 text-muted">- Sarah Johnson, CTO</h6>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="card h-100">
                                    <div className="card-body">
                                        <div className="mb-3 text-warning">
                                            ★★★★★
                                        </div>
                                        <p className="card-text">"Great communication throughout the project and delivered on time. Will definitely work with them again."</p>
                                        <h6 className="card-subtitle mb-2 text-muted">- Mike Brown, Product Manager</h6>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* FAQs Section */}
                <div className="container py-5">
                    <h2 className="text-center mb-5">Frequently Asked Questions</h2>
                    <div className="row justify-content-center">
                        <div className="col-lg-8">
                            <div className="accordion" id="faqAccordion">
                                <div className="accordion-item mb-3">
                                    <h2 className="accordion-header">
                                        <button className="accordion-button " type="button" data-bs-toggle="collapse" data-bs-target="#faq1">
                                            What services do you offer?
                                        </button>
                                    </h2>
                                    <div id="faq1" className="accordion-collapse collapse show" data-bs-parent="#faqAccordion">
                                        <div className="accordion-body">
                                            We offer a comprehensive range of software development services including web development, mobile apps, cloud solutions, and digital transformation consulting.
                                        </div>
                                    </div>
                                </div>
                                <div className="accordion-item mb-3">
                                    <h2 className="accordion-header">
                                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#faq2">
                                            How long does a typical project take?
                                        </button>
                                    </h2>
                                    <div id="faq2" className="accordion-collapse collapse" data-bs-parent="#faqAccordion">
                                        <div className="accordion-body">
                                            Project timelines vary based on complexity and requirements. A typical project can take anywhere from 2-6 months.
                                        </div>
                                    </div>
                                </div>
                                <div className="accordion-item mb-3">
                                    <h2 className="accordion-header">
                                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#faq3">
                                            What is your pricing structure?
                                        </button>
                                    </h2>
                                    <div id="faq3" className="accordion-collapse collapse" data-bs-parent="#faqAccordion">
                                        <div className="accordion-body">
                                            Our pricing is project-based and depends on the scope, complexity, and requirements. We offer flexible payment plans and provide detailed quotes after initial consultation.
                                        </div>
                                    </div>
                                </div>
                                <div className="accordion-item mb-3">
                                    <h2 className="accordion-header">
                                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#faq4">
                                            Do you provide post-launch support?
                                        </button>
                                    </h2>
                                    <div id="faq4" className="accordion-collapse collapse" data-bs-parent="#faqAccordion">
                                        <div className="accordion-body">
                                            Yes, we provide comprehensive post-launch support including maintenance, updates, and technical assistance. We offer various support packages to meet your specific needs.
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home