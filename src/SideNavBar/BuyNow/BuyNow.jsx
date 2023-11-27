import React from 'react';
import useShop from '../../hooks/useShop';
import BuyCard from './BuyCard';

const BuyNow = () => {

    const [shop] = useShop()
    const total = shop.reduce((sum,item)=>item.price + sum,0)

    return (
       <>
       <div>
        <p className='italic'>Total Price: <span className='font-bold text-2xl'>${total}</span></p>
        <p className='italic'>Total Product: <span className='font-bold text-2xl'>{shop.length}</span></p>
       </div>
       <div className="overflow-x-auto">
      <table className="table">
        {/* head */}
        <thead>
          <tr>
            <th>index</th>
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
            <tr>
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
           <p>{item.price}</p>
            <th>
              <button className="btn btn-ghost btn-xs">Delete</button>
            </th>
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