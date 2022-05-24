import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const AddReviews = () => {
    const [user] = useAuthState(auth);

    const handleSubmit = event => {
        event.preventDefault()
        const review = event.target.comments.value;
        const retting =event.target.retting.value;
        const picture = event.target.picture.value;
        console.log(review,retting,picture);
        const reviews={
            review,
            retting,
            picture,
            name:user.displayName
        }
        fetch('http://localhost:5000/reviews', {
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
        <div className="card w-96 bg-base-100 shadow-xl">
            <div className="card-body">
                <form onSubmit={handleSubmit} className='grid grid-cols-1 gap-3'>
                    <label className="label">
                        <span className="label-text">Name</span>
                    </label>
                    <input type="text" value={user?.displayName} className="input input-bordered w-full max-w-xs" />
                    <textarea className="textarea textarea-bordered" name='comments' placeholder="Write Your Comments"></textarea>
                    <input type="text" name='retting' placeholder="Ratting" className="input input-bordered w-full max-w-xs" />
                    <input type="text" name='picture' placeholder="image url" className="input input-bordered w-full max-w-xs" />
                    <button className="btn btn-ghost  btn-outline">Button</button>
                </form>

            </div>
        </div>
    );
};

export default AddReviews;