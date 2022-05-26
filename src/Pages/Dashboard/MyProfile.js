import React, { useState } from 'react';
import { useAuthState, useUpdateProfile } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import Loading from '../../Shared/Loading';
import Swal from 'sweetalert2'

const MyProfile = () => {
    const [user, loading] = useAuthState(auth)
    const [displayName, setDisplayName] = useState('');
    const [photoURL, setPhotoURL] = useState('');
    const [phoneNumber, setPhoneNumber] = useState(0);
    const [address, setAddress] = useState('');
    const [updateProfile, updating, error] = useUpdateProfile(auth)
    console.log(phoneNumber);
    if (error) {
        return (
            <div>
                <p>Error: {error.message}</p>
            </div>
        );
    }
    if (updating) {
        return <Loading></Loading>
    }
    return (
        <div>
            <div className='lg:flex justify-around'>
                <div class="card  bg-base-100 shadow-xl">
                    <div class="card-body">
                        <div class="avatar">
                            <div class="w-24 rounded-full">
                                <img src={user?.photoURL} alt='Profile' />
                            </div>
                        </div>
                        <h2 className="text-2xl">{user.displayName}</h2>
                        <h3 className="text-1xl"><span>{user.email}</span> </h3>
                        <p>Phone Number: <span>{phoneNumber}</span></p>
                        <p>Address: <span>{address}</span></p>
                    </div>
                </div>
                <div>
                    <form className='grid grid-cols-1 gap-3'>
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input
                            className='input input-bordered w-full'
                            type="displayName"
                            value={displayName}
                            onChange={(e) => setDisplayName(e.target.value)}
                        />
                        <label className="label">
                            <span className="label-text">Photo</span>
                        </label>
                        <input
                            className='input input-bordered w-full'
                            type="photoURL"
                            value={photoURL}
                            onChange={(e) => setPhotoURL(e.target.value)}
                        />
                        <label className="label">
                            <span className="label-text">Phone Number</span>
                        </label>
                        <input
                            className='input input-bordered w-full'
                            type="number"
                            value={phoneNumber}
                            onChange={(e) => setPhoneNumber(e.target.value)}
                        />
                        <label className="label">
                            <span className="label-text">Address</span>
                        </label>
                        <textarea
                            className='input input-bordered w-full'
                            type="text"
                            value={address}
                            onChange={(e) => setAddress(e.target.value)}
                        />
                        <button
                            className='btn max-w-xs'
                            onClick={async () => {
                                await updateProfile({ displayName, photoURL, phoneNumber, address });
                                Swal.fire({
                                    title: 'Do you want to save the changes?',
                                    showDenyButton: true,
                                    showCancelButton: true,
                                    confirmButtonText: 'Save',
                                    denyButtonText: `Don't save`,
                                }).then((result) => {
                                    if (result.isConfirmed) {
                                        Swal.fire('Saved!', '', 'success')
                                    } else if (result.isDenied) {
                                        Swal.fire('Changes are not saved', '', 'info')
                                    }
                                });
                            }}
                        >
                            Update profile
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default MyProfile;