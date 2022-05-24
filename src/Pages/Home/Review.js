import React from 'react';

const Review = ({reviews}) => {
    const { review, name, picture, retting } = reviews;
    return (
        <div className="card w-96 bg-primary text-primary-content">
            <div className="card-body">
                <p>{review}</p>
                <div className="avatar">
                    <div className="w-12 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                        <img src={picture} alt='' />
                    </div>
                    <p className=''>{name}</p>
                </div>
                <p>{retting}</p>
            </div>
        </div>
    );
};

export default Review;