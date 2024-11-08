import React from 'react'
import AdminSideBar from '../pages/admin/AdminSideBar'
import { Outlet } from 'react-router-dom'

const AdminLayout = () => {
    return (

        <div className="container-fluid px-0">
            <div className="row">
                <div className="col-md-3">
                    <AdminSideBar />
                </div>
                <div className="col-md-9">
                    <Outlet />
                </div>
            </div>
        </div>
    )
}

export default AdminLayout