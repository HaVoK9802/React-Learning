import RestaurantCard from "./RestaurantCard";
import cardInfo from "../utils/mockData";
import { useState } from 'react';
import { useRef } from "react";

// let toggle = {current:true}

const Body = ()=>{
    const [cardsData,setCardsData] = useState(cardInfo[4].card.card.gridElements.infoWithStyle.restaurants)
    const toggle = useRef(true);
    return (
        <div className="body">
            <div className="search">search</div>
            <button onClick={()=>{
              if(toggle.current===true){
                toggle.current = false;
                const filteredCardData = cardsData.filter((restaurant) =>{return restaurant.info.avgRating>=4.5})
                setCardsData(filteredCardData);
              }
              else{
                toggle.current = true;
                setCardsData(cardInfo[4].card.card.gridElements.infoWithStyle.restaurants);
              }
            }}>Ratings 4.5+</button>
            <div className="restaurant-container">
                {
                  cardsData.map((val)=>{
                    return <RestaurantCard key={val.info.id} cardData={val}></RestaurantCard>
                  })
                }
            </div> 
        </div>
    );
}

export default Body;