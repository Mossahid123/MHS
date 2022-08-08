import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const AddReviews = () => {
    const [user] = useAuthState(auth);

    const handleSubmit = event => {
        event.preventDefault()
        const review = event.target.comments.value;
        const retting = event.target.retting.value;

        console.log(review, retting);
        const reviews = {
            review,
            retting,
            name: user.displayName
        }
        fetch('https://desolate-forest-96916.herokuapp.com/reviews', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(reviews)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
            })
    }

    return (
        <div className='bg-base-200 mt-6'>
            <h1 className='text-5xl text-black font-extrabold text-center drop-shadow-lg '>Give your <span className='text-blue-500 drop-shadow-lg'>Feedback to us</span></h1>
            <div className="card-body w-1/4 mx-auto">
                <form onSubmit={handleSubmit} className='grid grid-cols-1 gap-3'>
                    <span className="label-text text-1xl font-semibold">Name</span>
                    <input type="text" value={user?.displayName} className="input input-bordered w-full " />
                    <textarea className="textarea textarea-bordered" name='comments' placeholder="Write Your Comments"></textarea>
                    <input type="text" name='retting' placeholder="Ratting " className="input input-bordered w-full " />

                    <button className="btn btn-outline drop-shadow-lg font-semibold">Button</button>
                </form>
            </div>
        </div>
    );
};

export default AddReviews;