import React from 'react';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router";
import Root from '../pages/Root/Root';
import ErrorPage from '../pages/ErrorPage/ErrorPage';
import Home from '../pages/Home/Home';
import DoctorDetails from '../pages/doctorDetails/doctorDetails';
import Booking from '../pages/Booking/Booking';
import Blog from '../pages/Blog/Blog';
import Contact from '../pages/Contact/Contact';






export const router = createBrowserRouter([
  {
    path: "/",
    Component:Root,
    errorElement:<ErrorPage></ErrorPage>,
    children:[
      {
        index:true,
        loader:()=>fetch('doctorData.json'),
        path:"/",
        Component:Home,

      },
      {
        path:'/booking',
        Component:Booking,
      },
      {
        path:'/blog',
        Component:Blog
      },
      {
          path:'/contact',
          Component:Contact
      },
      {
         path:'/doctorDetails/:id',
          loader:()=>fetch('/doctorData.json'),
        Component:DoctorDetails
      }
    ]
  },
]);
