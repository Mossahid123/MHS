import { signOut } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';

const MyOrders = () => {
    const [orders, setOrders] = useState([]);
    const [user] = useAuthState(auth);
    const navigate = useNavigate()

    useEffect(() => {
      if(user)
       {
        fetch(`http://localhost:5000/myorders?email=${user.email}`,{
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
              return res.json()})
          .then(data => setOrders(data));
       }
    }, [user])
    const handleDelete = _id => {
      const proceed = window.confirm('Delete tha product !!')
      if (proceed) {
          fetch(`http://localhost:5000/myorders/${_id}`, {
              method: "DELETE"
          })
              .then(res => res.json())
              .then(data => {
                  console.log(data);
                  const remaining = orders.filter(order => order._id !== _id)
                  setOrders(remaining)
              })

      }}
    return (
        <div>
            <h2>my order</h2>
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
      {orders.map((order,index) => <tr key={order._id}>
        <th>{index+1}</th>
        <td>{order.client}</td>
        <td>{order.email}</td>
        <td>{order.price}</td>
        <td><button className='btn btn-xs '>Pay</button></td>
        <td><button onClick={()=>handleDelete(order._id)} className='btn btn-xs'>Cancle</button></td>
      </tr>)}
    </tbody>
  </table>
</div>
        </div>
    );
};

export default MyOrders;