import React from 'react'
import { Link } from 'react-router-dom'

const AdminSideBar = () => {
    return (
        <div className='bg-secondary p-3 vh-100'>
            <h3 className='text-white'>Admin Panel</h3>
            <ul className='list-unstyled mt-5'>
                <li className='mb-2 text-white'>
                    <Link className='text-decoration-none text-white' to='/admin/users'>Users</Link>
                </li>
                <li className='mb-2 text-white'>
                    <Link className='text-decoration-none text-white' to='/admin/contacts'>Contacts</Link>
                </li>
            </ul>
        </div>
    )
}

export default AdminSideBar