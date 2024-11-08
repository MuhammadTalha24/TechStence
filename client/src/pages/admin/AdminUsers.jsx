import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import axios from 'axios'
import { toast } from 'react-hot-toast'
import { useRef } from 'react'


const AdminUsers = () => {
    const [users, setUsers] = useState([]);
    const [editFormData, setEditFormData] = useState({
        username: '',
        phone: '',
        email: '',
        isAdmin: false
    });

    const getAllUsers = async () => {
        try {
            const res = await axios.get(`http://localhost:5000/api/v1/admin/users`)
            setUsers(res.data)

        } catch (error) {
            console.error("Error fetching users:", error)
        }
    }


    const handleDelete = async (id) => {
        try {
            await axios.delete(`http://localhost:5000/api/v1/admin/users/delete/${id}`)
            getAllUsers()
            toast.success("User deleted successfully")
        } catch (error) {
            toast.error(error.response.data.message)
        }
    }


    const handleEdit = (id) => {

        setEditFormData(users.find((user) => user._id === id))

    }

    const handleSaveChanges = async () => {
        try {
            await axios.put(`http://localhost:5000/api/v1/admin/users/edit/${editFormData._id}`, editFormData)
            getAllUsers()
            toast.success("User updated successfully")
        } catch (error) {
            toast.error(error.response.data.message)
        }
    }

    useEffect(() => {
        getAllUsers()
    }, [])

    return (
        <>
            <div className="container mt-4">
                <h2>User Management</h2>
                <table className="table table-striped mt-5">
                    <thead>
                        <tr>
                            <th>Username</th>
                            <th>Phone</th>
                            <th>Email</th>
                            <th>Admin Status</th>

                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            users.map((user) => (
                                <tr key={user._id}>
                                    <td>{user.username}</td>
                                    <td>{user.phone}</td>
                                    <td>{user.email}</td>
                                    <td>{user.isAdmin ? 'Yes' : 'No'}</td>
                                    <td>
                                        <button
                                            className="btn btn-primary btn-sm me-2"
                                            onClick={() => handleEdit(user._id)}
                                        >
                                            Edit
                                        </button>
                                        <button
                                            className="btn btn-danger btn-sm"
                                            onClick={() => handleDelete(user._id)}
                                        >
                                            Delete
                                        </button>
                                    </td>
                                </tr>

                            ))
                        }
                    </tbody>
                </table>
            </div>

            {/* Edit User Modal */}
            <div className="modal-header">
                <h5 className="modal-title" id="editUserModalLabel">Edit User</h5>
                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
                <form>
                    <div className="mb-3">
                        <label htmlFor="editUsername" className="form-label">Username</label>
                        <input
                            type="text"
                            className="form-control"
                            id="editUsername"
                            value={editFormData.username || ''}
                            onChange={(e) => setEditFormData({ ...editFormData, username: e.target.value })}
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="editPhone" className="form-label">Phone</label>
                        <input
                            type="text"
                            className="form-control"
                            id="editPhone"
                            value={editFormData.phone || ''}
                            onChange={(e) => setEditFormData({ ...editFormData, phone: e.target.value })}
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="editEmail" className="form-label">Email</label>
                        <input
                            type="email"
                            className="form-control"
                            id="editEmail"
                            value={editFormData.email || ''}
                            onChange={(e) => setEditFormData({ ...editFormData, email: e.target.value })}
                        />
                    </div>
                    <div className="mb-3 form-check">
                        <input
                            type="checkbox"
                            className="form-check-input"
                            id="editIsAdmin"
                            checked={editFormData.isAdmin || false}
                            onChange={(e) => setEditFormData({ ...editFormData, isAdmin: e.target.checked })}
                        />
                        <label className="form-check-label" htmlFor="editIsAdmin">Admin Status</label>
                    </div>
                </form>
            </div>
            <div className="modal-footer">
                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                <button type="button" className="btn btn-primary" onClick={handleSaveChanges}>Save changes</button>
            </div>

        </>
    )
}

export default AdminUsers