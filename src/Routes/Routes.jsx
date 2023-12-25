import {
    createBrowserRouter,
  } from "react-router-dom";
import Main from "../Layout/Main";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import SignUp from "../Pages/SignUp/SignUp";

import UserHome from "../Pages/Dashboard/UserHome/UserHome";
import TaskManagement from "../Pages/Dashboard/TaskManagement/TaskManagement";
import AddTask from "../Pages/Dashboard/AddTask/AddTask";
import UpdateTask from "../Pages/Dashboard/UpdateTask/UpdateTask";
import Blog from "../Pages/Blog/Blog";
import PrivateRoute from './PrivateRoute';
import Dashboard from "../Layout/Dashboard";


  export const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      errorElement: <ErrorPage />,
      children: [
        {
            path: '/',
            element: <Home></Home>
        }, 
       
        {
          path: 'login',
          element: <Login></Login>
        },
        {
          path: 'signup',
          element: <SignUp></SignUp>
        },
        {
          path: 'blog',
          element: <Blog/>
        },
       
      ]
    },
    {
        path:'dashboard',
        element:<PrivateRoute><Dashboard/></PrivateRoute>,
        children:[
        
          {
            path:'userHome',
            element:<UserHome/>
          },
          {
            path:'taskManagement',
            element:<TaskManagement/>
          },
          {
            path:'taskManagement',
            element:<TaskManagement/>
          },
          {
            path:'addTask',
            element:<AddTask/>
          },
          {
            path:'updateItem/:id',
            element:<UpdateTask/>,
            loader: ({params})=> fetch(`http://localhost:5000/task/${params.id}`)
      
          },
        
        ]
      }
    ]);
