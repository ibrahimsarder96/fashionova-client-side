import React from 'react';
import { toast } from 'react-toastify';

const UserRow = ({user, index, refetch}) => {
  const {email, role} = user;
  const makeAdmin = () => {
    fetch(`http://localhost:5000/user/admin/${email}`, {
    method: 'PUT',
    headers: {
      authorization: `Bearer ${localStorage.getItem('accessToken')}`
    }
    })
    .then(res => res.json())
    .then(data => {
      refetch();
      toast.success('Successfully made an admin')
      console.log(data)
    })
  }
  return (
    <div>
      <tr>
        <th>{index + 1}</th>
        <td className='font-bold'>{email}</td>
        <td>{role ? <button onClick={makeAdmin} className="btn hover:bg-gray-500 bg-gray-500 text-white font-bold">AllReady Admin</button>: <button onClick={makeAdmin} className="btn hover:bg-green-500 bg-green-500 text-white font-bold">Admin User</button>}</td>
        <td><button className="btn hover:bg-red-500 bg-red-500 text-white font-bold">Remove User</button></td>
      </tr>
    </div>
  );
};

export default UserRow;