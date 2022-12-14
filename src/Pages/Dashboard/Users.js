import React from 'react';
import { useQuery } from 'react-query';
import Loading from '../Shared/Loading';
import UserRow from './UserRow';

const Users = () => {
  const {data: users, refetch, isLoading} = useQuery('users', () => fetch('http://localhost:5000/user',  {
    method: 'GET',
    headers: {
      'authorization': `Bearer ${localStorage.getItem('accessToken')}`
    }
  }).then(res => res.json()))
  if(isLoading){
    return <Loading></Loading>
  }
  return (
    
      <div className="overflow-x-auto">
  <table className="table ">
    
    <tbody>
    {

      users.map((user, index) => <UserRow 
      index={index}
      key={user._id}
      refetch={refetch}
      user={user}
      ></UserRow>)
    }
    </tbody>
  </table>
</div>

  );
};

export default Users;