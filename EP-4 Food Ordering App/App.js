import React from "react";
import ReactDOM from "react-dom/client";


const Header = ()=>{
    return (
        <div className="header">
           <div className="logo-container">
            <img src="https://upload.wikimedia.org/wikipedia/en/1/12/Swiggy_logo.svg"/>
           </div>
           <div className="nav-items">
            <ul>
                <li>Home</li>
                <li>About</li>
                <li>Contact Us</li>
                <li>Cart</li>
            </ul>
           </div>
        </div>
    )
}

const RestaurantCard = ()=>{
    return(
        <div className="restaurant-card">
            <img className="restaurant-logo" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPX2sp8qs9cHg7YK_1Ge7l9N1qSEkAWgPT4A&usqp=CAU"/>
            <div className="restaurant-info">
             <h3>Restaurant Name</h3>
             <h5>Fast Food</h5>
             <h5>4.5 Rating</h5>
             <h5>35 minutes</h5>
            </div>
        </div>
    )
}

const Body = ()=>{
    return (
        <div className="body">
            <div className="search">search</div>
            <div className="restaurant-container">
                <RestaurantCard/>
                <RestaurantCard/>
                <RestaurantCard/>
                <RestaurantCard/>
                <RestaurantCard/>
                <RestaurantCard/>
            </div> 
        </div>
    );
}

const AppLayout = ()=>{
    return (
    <div className="main-layout">
        <Header/>
        <Body/>
        //FOOTER
    </div>
    );
}

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout/>);