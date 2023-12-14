import React from 'react';
import useUsers from '../../hooks/useUsers';
import { FaUser,FaUserTie } from "react-icons/fa";
import { RiDeleteBin5Fill } from "react-icons/ri";
import Swal from 'sweetalert2';

const Users = () => {

    const [users,refetch] = useUsers()

    const handleAdminUser = user =>{
      console.log(user)
      fetch(`http://localhost:5000/user/${user._id}`,{
        method:'PATCH'
      })
      .then(res=>res.json())
      .then(data=>{
        console.log(data)
        refetch()
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Your work has been saved",
          showConfirmButton: false,
          timer: 1500
        });
      })
    }

    const handleDeleteUser = user =>{
      console.log(user.email)
      fetch(`http://localhost:5000/user/${user._id}`,{
        method:'DELETE'
      })
      .then(()=>{})
      .then(()=>{
        refetch()
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Your work has been saved",
          showConfirmButton: false,
          timer: 1500
        });
      })
    }

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
            <td>{user.role === 'admin'?<FaUserTie />:
            <button 
            onClick={()=> handleAdminUser(user)}
            className="btn btn-outline"><FaUser /></button>
            }</td>
            <td><button 
              onClick={()=> handleDeleteUser(user)}
            className="btn btn-outline btn-error"><RiDeleteBin5Fill className='text-xl'/></button></td>
          </tr>)
      }
    </tbody>
  </table>
</div>
        </div>
    );
};

export default Users;