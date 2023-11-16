import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import Covor from "../../Shared/Covor/Covor";
import manuImg from "../../../assets/menu/menu-bg.jpg";
import Items from "../../Shared/Items/Items";
import items1 from "../../../assets/menu/pizza-bg.jpg";
import useMenu from "../../../hooks/useMenu";
import { Link } from "react-router-dom";

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
      <Covor
        img={manuImg}
        title="Our Menu"
        details="We serve pure product for our cusomer."
      ></Covor>
      <div className="grid grid-cols-2">
        {offers.map((offer) => (
          <Items
            image={offer.image}
            heading={offer.name}
            details={offer.recipe}
            price={offer.price}
          ></Items>
        ))}
         <Link to={`/shop/${name}`}><button className="btn btn-wide">Wide</button></Link>
      </div>
      <Covor
        img={manuImg}
        title="Dessert"
        details="We serve pure product for our cusomer."
      ></Covor>
      <div className="grid grid-cols-2">
        {sortDessert.map((offer) => (
          <Items
            image={offer.image}
            heading={offer.name}
            details={offer.recipe}
            price={offer.price}
          ></Items>
        ))}
         <Link to={`/shop/${name}`}><button className="btn btn-wide">Wide</button></Link>
      </div>
      <Covor
        img={manuImg}
        title="Salad"
        details="We serve pure product for our cusomer."
      ></Covor>
      <div className="grid grid-cols-2">
        {sliceSalad.map((offer) => (
          <Items
            image={offer.image}
            heading={offer.name}
            details={offer.recipe}
            price={offer.price}
          ></Items>
        ))}
         <Link to={`/shop/${name}`}><button className="btn btn-wide">Wide</button></Link>
      </div>
      <Covor
        img={manuImg}
        title="Pizza"
        details="We serve pure product for our cusomer."
      ></Covor>
      <div className="grid grid-cols-2">
        {slicePizza.map((offer) => (
          <Items
            image={offer.image}
            heading={offer.name}
            details={offer.recipe}
            price={offer.price}
          ></Items>
        ))}
         <Link to={`/shop/${name}`}><button className="btn btn-wide">Wide</button></Link>
      </div>
      <Covor
        img={manuImg}
        title="Soup"
        details="We serve pure product for our cusomer."
      ></Covor>
      <div className="grid grid-cols-2">
        {sliceSoup.map((offer) => (
          <Items
            image={offer.image}
            heading={offer.name}
            details={offer.recipe}
            price={offer.price}
          ></Items>
        ))}
         <Link to={`/shop/${name}`}><button className="btn btn-wide">Wide</button></Link>
      </div>
    </div>
  );
};

export default Menu;
