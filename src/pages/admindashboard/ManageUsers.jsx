import { useLoaderData } from 'react-router-dom';
import { useState } from 'react';
import UserCard from './UserCard';


const ManageUsers = () => {

    const loadedUsers = useLoaderData();
    const [users, setUsers] = useState(loadedUsers);

    return (
        <div className="w-full overflow-hidden rounded-lg border border-gray-200 shadow-md m-5">
            <table className="w-full border-collapse bg-white text-left text-sm text-gray-500">
                <thead className="bg-gray-50">
                <tr>
                    <th scope="col" className="px-6 py-4 font-medium text-gray-900">User Name</th>
                    <th scope="col" className="px-6 py-4 font-medium text-gray-900">User Email</th>
                    <th scope="col" className="px-6 py-4 font-medium text-gray-900">Make Admin</th>
                    <th scope="col" className="px-6 py-4 font-medium text-gray-900">Subscription status</th>
                </tr>
                </thead>
                <tbody className="divide-y divide-gray-100 border-t border-gray-100">
                    {users.map((user) => (
                        <UserCard
                            key={user._id}
                            user={user}
                            users={users}
                            setUsers={setUsers}
                        ></UserCard>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default ManageUsers;