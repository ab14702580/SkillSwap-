import { createBrowserRouter, RouterProvider } from "react-router";
import HomeLayout from "../Component/Layout/HomeLayout";
import Home from "../Component/Home/Home";
import Login from "../Component/login/Login";
import SingUp from "../Component/SingUp/SingUp";
import { Suspense } from "react";
import CategoryPage from "../Component/Layout/CategoryPage";
import HowItsWorksPage from "../Component/HowItsWorksPage/HowItsWorksPage";
import CardDetails from "../Component/CardDetails/CardDetails";
import MyProfile from "../Component/MyProfile/MyProfile";


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
        path: 'login',
        Component: Login
    },
    {
        path: 'signUp',
        Component: SingUp
    },
    {
        path: 'category',
        element: <Suspense fallback={<span>loading...</span>}>
            <CategoryPage />
        </Suspense>
    },
    {
        path: 'howItWork',
        Component: HowItsWorksPage
    },
    {
        path: 'singlePage/:id',
        Component: CardDetails
    },
    {
        path: '/myprofile',
        Component: MyProfile
    },
])

export default function Routes(){
    return(
        <RouterProvider router={router}></RouterProvider>
    );
}