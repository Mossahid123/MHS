import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import useProducts from '../../Hooks/useProducts';

const ManageProducts = () => {
    const [products, setProducts] = useProducts();
    console.log(products)
    const handleDelete = _id => {
        const proceed = window.confirm('Delete tha product !!')
        if (proceed) {
            fetch(`http://localhost:5000/parts/${_id}`, {
                method: "DELETE"
            })
                .then(res => {
                    console.log(res)
                   return res.json()})
                .then(data => {
                    console.log(data);
                    const remaining = products.filter(product => product._id !== _id)
                    setProducts(remaining)
                })

        }
    }
    return (
        <div>
            <div className="row ">
                <h1 className='products-title mt-5'>  My Inventory  </h1>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                    {
                        products.map(product =>
                            <div key={product._id} className='card bg-base-100 shadow-xl'>
                                <div className='card' style={{ width: '18rem', height: '40rem' }}>
                                    <img style={{ height: '300px' }} variant="top" src={product.img} alt='' />
                                    <div className='card-body' >
                                        <div className='card-title'>{product.name}</div>
                                        <p>
                                            Price: ${product.price}
                                        </p>
                                        <p>
                                            Supplier: {product.supplier}
                                        </p>
                                        <p>
                                            Quantity: {product.quantity}
                                        </p>
                                        <p>
                                            Descriptions: {product.description.slice(0, 20)}
                                        </p>
                                        <button onClick={() => handleDelete(product._id)} className="btn btn-danger"   >Delete</button>
                                    </div>
                                </div></div>)}
                </div>
            </div>
        </div>
    );
};

export default ManageProducts;