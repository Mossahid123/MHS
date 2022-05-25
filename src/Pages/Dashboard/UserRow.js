import React, { useState } from 'react';
import { toast } from 'react-toastify';

const UserRow = ({ user,refetch }) => {
    const [users , setUsers]=useState([])
    const{email,role }=user;
    const makeAdmin = () => {
        fetch(`http://localhost:5000/user/admin/${email}`, {
            method: 'PUT',
            headers: {
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => {
                if(res.status === 403){
                    toast.error('Failed to Make an admin');
                }
                return res.json()})
            .then(data => {
                if (data.modifiedCount > 0) {
                    refetch();
                    toast.success(`Successfully made an admin`);
                }

            })
        }

            const handleDelete = email =>{
                const deleted = window.confirm('Delete tha product !!')
               if(deleted){
                fetch(`http://localhost:5000/user/${email}`, {
                    method: "DELETE"
                })
                    .then(res => {
                        console.log(res)
                       return res.json()})
                    .then(data => {
                        console.log(data);
                        const remaining = users.filter(user => user.email !== email)
                        setUsers(remaining)
                    })
               }
            }
    return (
            <tr>
                <th>1</th>
                <td>{email}</td>
                <td>{role!== 'admin'&& <button  className='btn btn-xs' onClick={makeAdmin}>Make Admin</button>}</td>
                <td><button onClick={() =>handleDelete(user.email)} className='btn btn-xs'>Remove User</button></td>
            </tr>
    );
};

export default UserRow;