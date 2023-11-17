import React, { useState } from 'react';
import orderImage from '../../../assets/shop/order.jpg'
import Covor from '../../Shared/Covor/Covor';
import { Tab, TabList, TabPanel, Tabs } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import useMenu from '../../../hooks/useMenu';
import ShopCard from '../ShopCard/ShopCard';
import ShopTab from '../ShopCard/ShopTab';
import { useParams } from 'react-router-dom';
import { Helmet } from 'react-helmet';

const Shop = () => {
    const [tabIndex, setTabIndex] = useState(0);
    const [menu] = useMenu();

    const {category} = useParams()
    console.log(category)
    const dessert = menu.filter((item) => item.category === "dessert");
    const salad = menu.filter((item) => item.category === "salad");
    const pizza = menu.filter((item) => item.category === "pizza");
    const soup = menu.filter((item) => item.category === "soup");
    const drinks = menu.filter((item) => item.category === "drinks");

    return (
        <div>
          <Helmet>
            <title>Bistro Boss | Shop</title>
          </Helmet>
            <Covor img={orderImage} title='Our Shop' details='Would you like to try a dish?'></Covor>
            <Tabs selectedIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
      <TabList>
        <Tab>Dessert</Tab>
        <Tab>Salad</Tab>
        <Tab>Pizza</Tab>
        <Tab>Soup</Tab>
        <Tab>Drinks</Tab>
      </TabList>
      <TabPanel>
       <ShopTab items={dessert}></ShopTab>
      </TabPanel>
      <TabPanel>
      <ShopTab items={salad}></ShopTab>
      </TabPanel>
      <TabPanel>
      <ShopTab items={pizza}></ShopTab>
      </TabPanel>
      <TabPanel>
      <ShopTab items={soup}></ShopTab>
      </TabPanel>
      <TabPanel>
      <ShopTab items={drinks}></ShopTab>
      </TabPanel>
    </Tabs>
        </div>
    );
};

export default Shop;