import RestaurantCard from "./RestaurantCard";
import cardInfo from "../utils/mockData";
import { useState,useRef,useEffect } from 'react';


// let toggle = {current:true}

const Body = ()=>{
    const [cardsData,setCardsData] = useState(cardInfo[4].card.card.gridElements.infoWithStyle.restaurants)
    const toggle = useRef(true);//you can use useState also but 'toggle' data need not be rendered. Thus useRef 
    useEffect(()=>{
      console.log("useEffect's callback() called")//then cb() of the useEffect is called after component has rendered.
    },[]);
    console.log("Body")//first the component renders

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