import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';

const MyOrders = () => {
    const [orders, setOrders] = useState([]);
    const [user] = useAuthState(auth);
    const navigate = useNavigate()

    useEffect(() => {
        fetch(`http://localhost:5000/myorders?buyer=${user.email}`)
            .then(res => res.json())
            .then(data => setOrders(data));
    }, [user])
    return (
        <div>
            <h2>my order</h2>
            <div class="overflow-x-auto">
  <table class="table w-full">
    <thead>
      <tr>
        <th></th>
        <th>Name</th>
        <th>Order</th>
        <th>Price</th>
      </tr>
    </thead>
    <tbody>
      {orders.map((order,index) => <tr key={order._id}>
        <th>{index+1}</th>
        <td>{order.buyer}</td>
        <td>{order.parts}</td>
        <td>{order.price}</td>
      </tr>)}
    </tbody>
  </table>
</div>
        </div>
    );
};

export default MyOrders;