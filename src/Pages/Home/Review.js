import React from 'react';

const Review = ({ reviews }) => {
    const { review, name, picture, retting } = reviews;
    return (
        <div className='mx-auto'>
            
            <div class="card w-96 bg-base-100 shadow-xl">
                <div className="avatar flex gap-4">
                    <div className="w-12 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                        <img src={picture} alt='' />
                    </div>
                    <p className='mt-2'>{name}</p>
                </div>
                <div class="card-body">
                    <h2 class="card-title">Comment : {review}</h2>
                    <div class="card-actions justify-end">
                        <div class="badge badge-outline">Retting: {retting}</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Review;