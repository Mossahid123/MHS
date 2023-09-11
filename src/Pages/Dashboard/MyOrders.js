import { signOut } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';

const MyOrders = () => {
  const [orders, setOrders] = useState([]);
  const [user] = useAuthState(auth);
  const navigate = useNavigate()

  useEffect(() => {
    if (user) {
      fetch(`https://mns-server-site.onrender.com/myorders?email=${user.email}`, {
        method: 'GET',
        headers: {
          'authorization': `Bearer ${localStorage.getItem('accessToken')}`
        }
      })
        .then(res => {
          if (res.status === 401 || res.status === 403) {
            signOut(auth);
            localStorage.removeItem('accessToken');
            navigate('/');
          }
          return res.json()
        })
        .then(data => setOrders(data));
    }
  }, [user])
  const handleDelete = _id => {
    const proceed = window.confirm('Delete tha product !!')
    if (proceed) {
      fetch(`https://mns-server-site.onrender.com/myorders/${_id}`, {
        method: "DELETE"
      })
        .then(res => res.json())
        .then(data => {
          console.log(data);
          const remaining = orders.filter(order => order._id !== _id)
          setOrders(remaining)
        })

    }
  }
  return (
    <div>
      <h2 className='text-4xl text-center font-bold my-8'>My Order</h2>
      <div className="overflow-x-auto">
        <table className="table w-full">
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Order</th>
              <th>Price</th>
              <th>Payment</th>
              <th>Cancle</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order, index) => <tr key={order._id}>
              <th>{index + 1}</th>
              <td>{order.client}</td>
              <td>{order.email}</td>
              <td>{order.price}</td>
              {(order.price && !order.paid) && <Link to={`/dashboard/payment/${order._id}`}><button className='btn btn-xs btn-success'>pay</button></Link>}
              {(order.price && order.paid) && <div>
                <p><span className='text-success'>Paid</span></p>
                <p>Transaction id: <span className='text-success'>{order.transactionId}</span></p>
              </div>}
              <td><button onClick={() => handleDelete(order._id)} className='btn btn-xs btn-error'>Cancle</button></td>
            </tr>)}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyOrders;