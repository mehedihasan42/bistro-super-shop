import React from 'react';
import {
    createBrowserRouter,
  } from "react-router-dom";
import Main from '../Layout/Main';
import Home from '../Pages/Home/Home/Home';
import Menu from '../Pages/Menu/Menu/Menu';
import Shop from '../Pages/Components/Shop/Shop';
import Login from '../Authentication/Login/Login';
import SignUp from '../Authentication/SignUp/SignUp';
import PrivetRoutes from './PrivetRoutes';
import SideNavBar from '../SideNavBar/SideNavBar/SideNavBar';
import BuyNow from '../SideNavBar/BuyNow/BuyNow';
import Users from '../components/Users/Users';
import AdminRoutes from './AdminRoutes';
import AddItem from '../Pages/Components/AddItem/AddItem';
import ManageItem from '../Pages/Components/ManageItem/ManageItem';

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children:[
        {
            path:'/',
            element:<Home></Home>
        },
        {
            path:'/menu',
            element:<Menu></Menu>
        },
        {
          path:'/shop/:category',
          element:<Shop></Shop>
        },
        {
          path:'/login',
          element:<Login></Login>
        },
        {
          path:'/signUp',
          element:<SignUp></SignUp>
        }
      ]
    },
    {
      path:'/sideNavBar',
      element: <PrivetRoutes><SideNavBar></SideNavBar></PrivetRoutes>,
      children:[
        {
          path:'buys',
          element:<BuyNow></BuyNow>
        },
        {
          path:'addItem',
          element:<AdminRoutes><AddItem></AddItem></AdminRoutes>
        },
        {
          path:'users',
          element:<AdminRoutes><Users></Users></AdminRoutes>
        },
        {
          path:'manageItem',
          element:<AdminRoutes><ManageItem></ManageItem></AdminRoutes>
        }
      ]
    }
  ]);

  export default router;