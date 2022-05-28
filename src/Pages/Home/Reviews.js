import React, { useEffect, useState } from 'react';
import Review from './Review';

const Reviews = () => {
    const [reviews, setReviews] = useState([])

    useEffect(()=>{
        fetch('https://desolate-forest-96916.herokuapp.com/reviews')
        .then(res => res.json())
        .then(data => setReviews(data))
    },[])
    return (
        <div className='mt-5'>
            <h1 className="text-4xl text-center font-bold mb-16">Customer's Reviews</h1>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
            {
                reviews.slice(0,6).map(reviews =><Review
                key={reviews._id}
                reviews={reviews}
                ></Review>)
            }
            
        </div>
        <div className='text-center my-10'>
                <button className='btn'>More Review</button>
            </div>
        </div>
    );
};

export default Reviews;