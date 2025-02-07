import {
    createBrowserRouter,
    Outlet,
   
  } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import About from "../Component/About/About";
import Projects from "../Component/Projects/Projects";


 export const router = createBrowserRouter([
    {
      path: "/",
      element:<Main></Main>,
      
      children: [
        {
          path: '/',
          element: <Home></Home>
        },

        {
          path: 'about',
          element: <About></About>
        },
        {
          path: 'projects',
          element: <Projects></Projects>
        }
       
      ]
      
    },
  ]);