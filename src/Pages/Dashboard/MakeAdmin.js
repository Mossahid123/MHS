import React from 'react';
import { useQuery } from 'react-query';
import Loading from '../../Shared/Loading';
import UserRow from './UserRow';

const MakeAdmin = () => {
    const { data: users, isLoading, refetch } = useQuery('users', () => fetch('https://mns-server-site.onrender.com/users', {
        method: 'GET',
        headers: {
            authorization: `Bearer ${localStorage.getItem('accessToken')}`
        }
    }).then(res => res.json()));
    if (isLoading) {
        return <Loading></Loading>
    }
    return (
        <div class="overflow-x-auto">
            <table class="table w-full">

                <thead>
                    <tr>
                        <th></th>
                        <th>Email</th>
                        <th>Status</th>
                        <th>Canceling</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map(user => <UserRow
                        key={user._id}
                        user={user}
                        refetch={refetch}
                    ></UserRow>)}
                </tbody>
            </table>
        </div>
    );
};

export default MakeAdmin;