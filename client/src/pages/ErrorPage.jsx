import React from 'react'

const ErrorPage = () => {
  return (
    <div className='container vh-100 d-flex justify-content-center align-items-center'>
      <div className='row justify-content-center text-center'>
        <div className='col-md-6'>
          <h1 className='display-1 text-primary mb-4'>404</h1>
          <h2 className='mb-4'>Oops! Page Not Found</h2>
          <p className='lead mb-4'>The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.</p>
          <div className='mb-4'>
            <i className='bi bi-emoji-frown display-1 text-muted'></i>
          </div>
          <a href='/' className='btn btn-primary btn-lg'>
            Go Back Home
          </a>
        </div>
      </div>
    </div>
  )
}

export default ErrorPage