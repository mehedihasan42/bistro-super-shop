import React from 'react';
import Items from '../../Shared/Items/Items';
import Covor from '../../Shared/Covor/Covor';
import { Link } from 'react-router-dom';

const MenuCart = ({items,title,img}) => {


    return (
        <div>
             <Covor
        img={img}
        title={title}
        details="We serve pure product for our cusomer."
      ></Covor>
      <div className="grid grid-cols-2">
        {items.map((item) => (
          <Items
            image={item.image}
            heading={item.name}
            details={item.recipe}
            price={item.price}
          ></Items>
        ))}
         <Link to={`/shop/${name}`}><button className="btn btn-wide">Book</button></Link>
      </div>
        </div>
    );
};

export default MenuCart;