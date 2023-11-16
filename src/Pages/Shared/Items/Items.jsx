import React from 'react';
import { Link } from 'react-router-dom';

const Items = ({image,heading,details,price}) => {
    return (
        <div className='flex'>
            <img src={image} alt="" style={{width:'100px'}} className='rounded-es-3xl rounded-tr-3xl'/>
        <div>
            <h3>{heading}</h3>
            <p>{details}</p>
        </div>
        <p>{price}</p>
        </div>
    );
};

export default Items;