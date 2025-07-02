import React from 'react';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router";
import Root from '../pages/Root/Root';



export const router = createBrowserRouter([
  {
    path: "/",
    Component:Root,
  },
]);
