import React, { useEffect } from 'react';
import Swal from 'sweetalert2'
import { Link } from 'react-router-dom';
import useProducts from '../../Hooks/useProducts';
import Footer from '../../Shared/Footer';

const ManageProducts = () => {
    const [products, setProducts] = useProducts();
    console.log(products)
    const handleDelete = _id => {
        const proceed = Swal.fire('Are you sure?')
        if (proceed) {
            fetch(`https://desolate-forest-96916.herokuapp.com/parts/${_id}`, {
                method: "DELETE"
            })
                .then(res => {
                    console.log(res)
                    return res.json()
                })
                .then(data => {
                    console.log(data);
                    const remaining = products.filter(product => product._id !== _id)
                    setProducts(remaining)
                })

        }
    }
    return (
        <div>
            <h1 className='text-4xl text-center font-bold my-16 '>All Available Products</h1>
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
                                        Quantity: {product.quantity}
                                    </p>
                                    <p>
                                        Descriptions: {product.description.slice(0, 20)}
                                    </p>
                                    <button onClick={() => handleDelete(product._id)} className="btn btn-danger"   >Delete</button>
                                </div>
                            </div></div>)}
            </div>
            <Footer></Footer>
        </div>
    );
};

export default ManageProducts;