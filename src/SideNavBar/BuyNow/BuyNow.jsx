import React from 'react';
import useShop from '../../hooks/useShop';
import { FaTrashAlt } from "react-icons/fa";
import Swal from 'sweetalert2';
import useAxiosSecure from '../../hooks/useAxiousSecure';
import { Link } from 'react-router-dom';

const BuyNow = () => {

    const [shop,refetch] = useShop()
    const axiosSecure = useAxiosSecure()
    const total = shop.reduce((sum,item)=>item.price + sum,0)
    const handleDelete = item =>{
      console.log(item._id)
      Swal.fire({
        title: "Are you sure?",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!"
      }).then((result) => {
        if (result.isConfirmed) {
          axiosSecure.delete(`/shop/${item._id}`)
        .then(res=>{
          if(res.data.deletedCount>0){
            refetch()
            Swal.fire({
              title: "Deleted!",
              text: "Your file has been deleted.",
              icon: "success"
            });
          }
        })
        }
      });
    }

    return (
       <>
       <div>
        <p className='italic'>Total Price: <span className='font-bold text-2xl'>${total}</span></p>
        <p className='italic'>Total Product: <span className='font-bold text-2xl'>{shop.length}</span></p>
        <Link to='/sideNavBar/payment'><button className="btn btn-xs">Pay</button></Link>
       </div>
       <div className="overflow-x-auto">
      <table className="table">
        {/* head */}
        <thead>
          <tr>
            <th>#</th>
            <th></th>
            <th>Name</th>
            <th>Recipe</th>
            <th>Price</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {
            shop.map((item,index)=>
            <tr key={item._id}>
            <th>
              <label>
                {index+1}
              </label>
            </th>
            <td>
              <div className="flex items-center gap-3">
                <div className="avatar">
                  <div className="mask mask-squircle w-12 h-12">
                    <img src={item.image} alt="Avatar Tailwind CSS Component" />
                  </div>
                </div>
                <div>
                 
                </div>
              </div>
            </td>
            <td> <p className="font-bold">{item.name}</p></td>
            <td>
              {item.recipe}
            </td>
           <td><p>{item.price}</p></td>
            <td>
              <button onClick={()=>handleDelete(item)} className="btn btn-ghost btn-xs"><FaTrashAlt className='text-xl'/></button>
            </td>
          </tr>
            )
          }
         
        </tbody>
        </table>
    </div>
       </>
    );
};

export default BuyNow;