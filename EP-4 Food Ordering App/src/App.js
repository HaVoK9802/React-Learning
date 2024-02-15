import React from "react";
import ReactDOM from "react-dom/client";
import {createBrowserRouter,RouterProvider,Outlet} from "react-router-dom"
import Header from "./components/Header";
import Body from "./components/Body";
import About from "./components/About";
import Contact from "./components/Contact";
import Cart from "./components/Cart";
import Error from "./components/Error";
import RestaurantCard from "./components/RestaurantCard";




const AppLayout = ()=>{
    return (
    <div className="main-layout">
        <Header/>
        <Outlet/>
        //FOOTER
    </div>
    );
}

const router = createBrowserRouter([
    {
        path:'/',
        element:(<AppLayout></AppLayout>),
        errorElement:<Error/>,
        children:[  {
            
            path:'/',
            element:(<Body></Body>),
            errorElement:<Error/>

        }, 
        {
            path:'/about',
            element:(<About></About>),
            errorElement:<Error/>
        },
        {
            path:'/contact',
            element:(<Contact></Contact>),
            errorElement:<Error/>
        },
        {
            path:'/cart',
            element:(<Cart></Cart>),
            errorElement:<Error/>
        },
        {
            path:'/restaurant/:resId',
            element:(<RestaurantPage></RestaurantPage>),
            errorElement:<Error/>
        }
        
    ]
    }

])


const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={router}></RouterProvider>);