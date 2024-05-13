import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home";
import Error from "../Pages/Error/Error";
import Login from "../Pages/Login/Login";
import SignUp from "../Pages/Login/SignUp";
import CheckOut from "../Pages/Checkout/CheckOut";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      errorElement:<Error></Error>,
      children:[
        {
            path:'/',
            element:<Home></Home>
        },
        {
            path:'/login',
            element:<Login></Login>
        },
        {
            path:'/signup',
            element:<SignUp></SignUp>
        },
        {
            path:'checkout/:id',
            element:<CheckOut></CheckOut>,
            loader:({params}) => fetch(`http://localhost:5000/services/${params.id}`)
        }

      ]
    },
  ]);

export default router;