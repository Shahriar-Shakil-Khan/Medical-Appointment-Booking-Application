import React from 'react';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router";
import Root from '../pages/Root/Root';
import ErrorPage from '../pages/ErrorPage/ErrorPage';
import Home from '../pages/Home/Home';
import DoctorDetails from '../pages/doctorDetails/doctorDetails';






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
         path:'/doctorDetails/:id',
          loader:()=>fetch('/doctorData.json'),
        Component:DoctorDetails
      }
    ]
  },
]);
