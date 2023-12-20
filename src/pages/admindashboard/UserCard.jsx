const UserCard = ({ user, users, setUsers }) => {

    const { name, email, isadmin, ismember} = user;

    return (
        <div>
            <tr className="hover:bg-gray-50">
                <th className="flex gap-3 px-6 py-4 font-normal text-gray-900">
                {/* <div className="relative h-10 w-10">
                    <img className="h-full w-full rounded-full object-cover object-center" src={author_image} alt={author_image}/>
                    <span className="absolute right-0 bottom-0 h-2 w-2 rounded-full bg-green-400 ring ring-white"></span>
                </div> */}
                <div className="text-sm">
                    <div className="font-medium text-gray-700">{name}</div>
                    <div className="text-gray-400">{email}</div>
                </div>
                </th>
                {/* <td className="px-6 py-4">
                    <span className="inline-flex items-center gap-1 rounded-full bg-green-50 px-2 py-1 text-xs font-semibold text-green-600"><span className="h-1.5 w-1.5 rounded-full bg-green-600"></span>Active</span>
                </td> */}
                {/* <td className="px-6 py-4">{name}</td>
                <td className="px-6 py-4">{email}</td> */}
                <td className="px-6 py-4">{isadmin}</td>
                <td className="px-6 py-4">{ismember}</td>
            </tr>
        </div>
    );
};

export default UserCard;