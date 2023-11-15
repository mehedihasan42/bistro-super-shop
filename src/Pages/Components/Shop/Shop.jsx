import React from 'react';
import orderImage from '../../../assets/shop/order.jpg'
import Covor from '../../Shared/Covor/Covor';

const Shop = () => {
    return (
        <div>
            <Covor img={orderImage} title='Our Shop' details='Would you like to try a dish?'></Covor>
        </div>
    );
};

export default Shop;