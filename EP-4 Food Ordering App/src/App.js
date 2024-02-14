import React from "react";
import ReactDOM from "react-dom/client";
import {createBrowserRouter,RouterProvider} from "react-router-dom"
import Header from "./components/Header";
import Body from "./components/Body";
import About from "./components/About"


const AppLayout = ()=>{
    return (
    <div className="main-layout">
        <Header/>
        <Body/>
        //FOOTER
    </div>
    );
}

const router = createBrowserRouter([
    {
        path:'/',
        element:(<AppLayout></AppLayout>)
    },
    {
        path:'about',
        element:(<About></About>)
    }
])


const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={router}></RouterProvider>);