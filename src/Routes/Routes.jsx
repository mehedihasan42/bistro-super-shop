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
          element:<PrivetRoutes><Shop></Shop></PrivetRoutes>
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
  ]);

  export default router;