import React from 'react';
import ShopCard from './ShopCard';

const ShopTab = ({items}) => {
    return (
              <div className='grid grid-cols-3 space-y-4'>
       {
            items.map(item=><ShopCard key={item._id} item={item}></ShopCard>)
        }
       </div>
    );
};

export default ShopTab;