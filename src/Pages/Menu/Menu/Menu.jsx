import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import Covor from "../../Shared/Covor/Covor";
import manuImg from "../../../assets/menu/menu-bg.jpg";
import Items from "../../Shared/Items/Items";
import items1 from "../../../assets/menu/pizza-bg.jpg";
import useMenu from "../../../hooks/useMenu";
import { Link } from "react-router-dom";
import MenuCart from "./MenuCart";

const Menu = () => {
  const [menu] = useMenu();
  const {name}= menu

  const offers = menu.filter((item) => item.category === "offered");
  const dessert = menu.filter((item) => item.category === "dessert");
  const sortDessert = dessert.slice(1, 7);
  const salad = menu.filter((item) => item.category === "salad");
  const sliceSalad = salad.slice(1, 7);
  const pizza = menu.filter((item) => item.category === "pizza");
  const slicePizza = pizza.slice(1,7)
  const soup = menu.filter((item) => item.category === "soup");
  const sliceSoup = soup.slice(1,7)

  // const [offers,setOffers] = useState([])
  // const [salad,setSalad] = useState([])

  // useEffect(()=>{
  //     fetch('menu.json')
  //     .then(res=>res.json())
  //     .then(data=>{
  //         const offered = data.filter(item=>item.category === 'offered')
  //         const salad = data.filter(item=>item.category === 'salad')
  //         setOffers(offered)
  //         setSalad(salad)
  //     })
  // },[])

  return (
    <div>
      <Helmet>
        <title>Bistro Shop | Menu</title>
      </Helmet>
      <MenuCart items={offers} img={manuImg} title={'Our Offer'}></MenuCart>
      <MenuCart items={sortDessert} img={manuImg} title={'Our Offer'}></MenuCart>
      <MenuCart items={sliceSalad} img={manuImg} title={'Our Offer'}></MenuCart>
      <MenuCart items={slicePizza} img={manuImg} title={'Our Offer'}></MenuCart>
      <MenuCart items={sliceSoup} img={manuImg} title={'Our Offer'}></MenuCart>
    </div>
  );
};

export default Menu;
