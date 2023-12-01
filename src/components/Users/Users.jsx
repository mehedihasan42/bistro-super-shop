import React from 'react';
import useUsers from '../../hooks/useUsers';

const Users = () => {

    const [users,refetch] = useUsers()

    return (
        <div>
           <div className="overflow-x-auto">
  <table className="table">
    {/* head */}
    <thead>
      <tr>
        <th></th>
        <th>Name</th>
        <th>Job</th>
        <th>Favorite Color</th>
      </tr>
    </thead>
    <tbody>
      {
        users.map((user,index)=><tr key={user._id}>
            <th>{index+1}</th>
            <td>{user.name}</td>
            <td>{user.email}</td>
            <td>Blue</td>
          </tr>)
      }
    </tbody>
  </table>
</div>
        </div>
    );
};

export default Users;