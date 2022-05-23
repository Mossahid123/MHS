import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const AddReviews = () => {
    const [user] = useAuthState(auth);

    const handleSubmit = event => {
        event.preventDefault()
    }

    return (
        <div class="card w-96 bg-base-100 shadow-xl">
            <div class="card-body">
                <form onSubmit={handleSubmit} className='grid grid-cols-1 gap-3'>
                    <input type="text" value={user?.displayName} class="input input-bordered w-full max-w-xs" />
                    <textarea class="textarea textarea-bordered" name='comments' placeholder="Write Your Comments"></textarea>
                    <input type="number" name='ratting' placeholder="Ratting" class="input input-bordered w-full max-w-xs" />
                    <input type="text" name='image' placeholder="image url" class="input input-bordered w-full max-w-xs" />
                    <button class="btn btn-ghost  btn-outline">Button</button>
                </form>

            </div>
        </div>
    );
};

export default AddReviews;