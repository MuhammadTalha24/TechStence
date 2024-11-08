import React from 'react'
import axios from 'axios'
import { useState, useEffect } from 'react'
import { toast } from 'react-hot-toast'
const AdminContacts = () => {
    const [contacts, setContacts] = useState([])
    const getAllContacts = async () => {
        try {
            const response = await axios.get('http://localhost:5000/api/v1/admin/contact');
            setContacts(response.data)
        } catch (error) {
            console.log(error)
        }
    }

    const deleteContact = async (id) => {
        try {
            const response = await axios.delete(`http://localhost:5000/api/v1/admin/contact/delete/${id}`);
            toast.success(response.data.message)
            getAllContacts()
        } catch (error) {
            toast.error(error.response.data.message)
        }
    }

    useEffect(() => {
        getAllContacts()
    }, [])

    return (
        <div>
            <h1>Contacts</h1>
            <table className="table table-striped">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Message</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {contacts.map((contact) => (
                        <tr key={contact._id}>
                            <td>{contact.name}</td>
                            <td>{contact.email}</td>
                            <td>{contact.message}</td>
                            <td>
                                <button className="btn btn-danger" onClick={() => deleteContact(contact._id)}>Delete</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default AdminContacts