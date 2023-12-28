import React, { useContext } from 'react';
import { AuthContext } from '../../../AuthProvider/AuthProvider';
import Swal from 'sweetalert2';
import { useLocation, useNavigate } from 'react-router-dom';
import useShop from '../../../hooks/useShop';

const ShopCard = ({item}) => {

  const {user} = useContext(AuthContext)
  const [,refetch] = useShop()
  const {_id,name,recipe,image,price} = item
  const navigate = useNavigate()
  const location = useLocation()

    const handleAddToCart = item =>{
      if(user){
        const data = {menuId:_id,name,recipe,image,price,email:user?.email}
      console.log(item._id)
      fetch('http://localhost:5000/shop',{
        method:'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      })
      .then(res=>res.json())
      .then(result=>{
        if(result.insertedId){
          refetch()
          Swal.fire({
            position: "center",
            icon: "success",
            title: "Your work has been saved",
            showConfirmButton: false,
            timer: 1500
          });
        }
      })
      }
      else{
        Swal.fire({
          title: "Please Login",
          text: "Without login you can't buy any item",
          icon: "warning",
          showCancelButton: true,
          confirmButtonColor: "#3085d6",
          cancelButtonColor: "#d33",
          confirmButtonText: "Log in!"
        }).then((result) => {
          if (result.isConfirmed) {
            navigate('/login', {state:{from:location}})
          }
        });
      }
    }

    return (
        <div className="card card-compact w-96 bg-base-100 shadow-xl">
  <figure><img src={image} alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title">{name}</h2>
    <p>{recipe}</p>
    <p className='bg-slate-900 text-white absolute right-0 top-0 mr-4 mt-4 p-2 rounded'>${price}</p>
    <div className="card-actions justify-end">
      <button onClick={()=>handleAddToCart(item)} className="btn btn-primary">Buy Now</button>
    </div>
  </div>
</div>
    );
};

export default ShopCard;