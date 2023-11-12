import React, { useEffect, useState } from 'react';
import SectionTitle from '../SectionTitle/SectionTitle';
import Card from '../../Pages/Shared/Card/Card';

const Popular = () => {

    const [menus,setMenu] = useState([])

    useEffect(()=>{
        fetch('menu.json')
        .then(res=>res.json())
        .then(data=>{
            const popularMenu = data.filter(item=>item.category === 'popular')
            setMenu(popularMenu)
        })
    },[])

    return (
        <div className='my-4'>
            <SectionTitle subHeading={'---Check it out---'} heading={'FROM OUR MENU'}></SectionTitle>
            <div className='grid grid-cols-2 space-y-4'>
            {
                menus.map(menu=><Card key={menu._id} menu={menu}></Card>)
            }
            </div>
        </div>
    );
};

export default Popular;