import React from 'react';

const ShopCard = ({item}) => {

    const {name,recipe,image,price} = item

    return (
        <div className="card card-compact w-96 bg-base-100 shadow-xl">
  <figure><img src={image} alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title">{name}</h2>
    <p>{recipe}</p>
    <p className='bg-slate-900 text-white absolute right-0 top-0 mr-4 mt-4 p-2 rounded'>${price}</p>
    <div className="card-actions justify-end">
      <button className="btn btn-primary">Buy Now</button>
    </div>
  </div>
</div>
    );
};

export default ShopCard;