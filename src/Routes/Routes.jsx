import { createBrowserRouter, RouterProvider } from "react-router";
import HomeLayout from "../Component/Layout/HomeLayout";
import Home from "../Component/Home/Home";
import Login from "../Component/login/Login";
import SingUp from "../Component/SingUp/SingUp";


const router = createBrowserRouter([
    {
        path: '/',
        element: <HomeLayout />,
        children:  [
            {
                index: true,
                Component: Home
            }
        ]
    },
    {
        path: '/login',
        Component: Login
    },
    {
        path: '/signUp',
        Component: SingUp
    }
])

export default function Routes(){
    return(
        <RouterProvider router={router}></RouterProvider>
    );
}