import React from 'react';
import Banner from '../Banner/Banner';
import Order from '../Order/Order';
import Popular from '../../../components/Popular/Popular';

const Home = () => {
    return (
        <div>
           <Banner></Banner>
           <Order></Order>
           <Popular></Popular>
        </div>
    );
};

export default Home;