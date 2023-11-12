import React from 'react';

const Card = ({ menu }) => {

  const { _id, name, recipe, image, category, price } = menu;

  return (
    <div className='flex ml-2'>
      <img src={image} alt="" style={{width:'100px'}} className='rounded-es-3xl rounded-tr-3xl'/>
      <div className='ml-2'>
        <p className='text-lg text-[#151515]'>{name}</p>
        <p className='text-sm text-[#737373]'>{recipe}</p>
      </div>
      <p className='text-[#BB8506]'>${price}</p>
    </div>
  );
};

export default Card;
