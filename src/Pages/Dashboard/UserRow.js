import React, { useState } from 'react';
import { toast } from 'react-toastify';
import Swal from 'sweetalert2'
const UserRow = ({ user,refetch }) => {
    const [users , setUsers]=useState([])
    const {email , role,displayName }=user ||{}
    console.log(email)
    const makeAdmin = () => {
        fetch(`https://mns-server-site.onrender.com/user/admin/${email}`, {
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
                const deleted =Swal.fire({
                    title: 'Are you sure?',
                    text: "You won't be able to revert this!",
                    icon: 'warning',
                    showCancelButton: true,
                    confirmButtonColor: '#3085d6',
                    cancelButtonColor: '#d33',
                    confirmButtonText: 'Yes, delete it!'
                  }).then((result) => {
                    if (result.isConfirmed) {
                      Swal.fire(
                        'Deleted!',
                        'Your file has been deleted.',
                        'success'
                      )
                    }
                  })
               if(deleted){
                fetch(`https://mns-server-site.onrender.com/user/${email}`, {
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
                <td>{role!=="admin" && <button  className='btn btn-xs btn-primary' onClick={makeAdmin}>Make Admin</button>}</td>
                <td><button onClick={() =>handleDelete(user.email)} className='btn btn-xs'>Remove User</button></td>
            </tr>
    );
};

export default UserRow;