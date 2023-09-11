import React, { useEffect, useState } from 'react';
import Swal from 'sweetalert2'
const ManageOrders = () => {
    const [orders, setOrders] = useState([]);
    useEffect(() => {
        fetch('https://mns-server-site.onrender.com/purchase', {
            method: 'GET',
            headers: {
                'authorization': `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => res.json())
            .then(data => setOrders(data))
    }, []);

    const handleDelete = _id => {
        const proceed = Swal.fire({
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
        if (proceed) {
            fetch(`https://mns-server-site.onrender.com/purchase/${_id}`, {
                method: "DELETE"
            })
                .then(res => {
                    console.log(res)
                    return res.json()
                })
                .then(data => {
                    console.log(data);
                    const remaining = orders.filter(order => order._id !== _id)
                    setOrders(remaining)
                })

        }
    }
    return (
        <div>
            <h1 className='text-4xl text-center font-bold my-12'>All orders {orders.length}</h1>
            <div class="overflow-x-auto">
                <table class="table w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Product</th>
                            <th>Price</th>
                            <th>Status</th>
                            <th>Cancling</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            orders.map((order, index) => <tr>
                                <th>{index + 1}</th>
                                <td>{order.client}</td>
                                <td>{order.product}</td>
                                <td>{order.price}</td>
                                <td>{order.paid !== true && <span>Unpaid</span>}
                                    {order.paid === true && <span>
                                        <button className='btn btn-xs'><label class="swap">
                                            <input type="checkbox" />
                                            <div class="swap-off">Pending</div>
                                            <div class="swap-on">shipped</div>
                                        </label></button>
                                    </span>}
                                </td>
                                <td><button className='btn btn-xs' onClick={() => handleDelete(order._id)}>Delete</button></td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div >
    );
};

export default ManageOrders;