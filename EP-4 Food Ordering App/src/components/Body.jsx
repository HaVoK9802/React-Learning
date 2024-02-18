import RestaurantCard from "./RestaurantCard";
import { useState,useRef,useEffect } from 'react';
import { SWIGGY_API } from "../utils/constants";
import {Link} from "react-router-dom"
import Shimmer from "./Shimmer";

// let toggle = {current:true}

const Body = ()=>{
    const [cardsData,setCardsData] = useState([])
    const toggle = useRef(false);//you can use useState also but 'toggle' data need not be rendered. Thus useRef 
    // useEffect(()=>{
    //   console.log("useEffect's callback() called")//then cb() of the useEffect is called after component has rendered.
    // },[]);
    console.log("Body")//first the component renders //render check
    useEffect(()=>{
      fetchAndExtract();
    },[])
    
    function fetchAndExtract(){
        const data = fetch(SWIGGY_API);
        data
        .then((res)=>{
            return res.json();
        })
        .then((res)=>{
            // console.log(res.data.cards[4].card.card.gridElements.infoWithStyle.restaurants);

            setCardsData(res?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
            //change destructuring logic here
        })

    }
    
    const [inputValue,setInputValue] = useState("");
    const [filteredSearchCards,setFilteredSearchCards] = useState([]);
    //conditional rendering
    if(cardsData.length===0){

      return <Shimmer/>
    }

    return (
        <div className="body">
            <div className="search">

            <input type="text" className="search-bar" value={inputValue} 
            onChange={(event)=>{
              setInputValue(event.target.value)
              }}/>

            <button className="search-button" onClick={()=>{
               const filteredCardData = cardsData.filter((restaurant)=>{
                return restaurant.info.name.toLowerCase().includes(inputValue.toLowerCase());
               })
               setFilteredSearchCards(filteredCardData);
            }}>Search</button>
            
            <button className="search-button" onClick={()=>{
              if(!toggle.current){
                toggle.current = !toggle.current;
                const filteredCardData = cardsData.filter((restaurant) =>{return restaurant.info.avgRating>=4.5})
                setCardsData(filteredCardData);
              }
              else{
                toggle.current = !toggle.current;
                fetchAndExtract();
              }
            }}>Ratings 4.5+</button>
            </div>
            <div className="restaurant-container">
             {
            filteredSearchCards.length===0 ? 
               
                 cardsData.map((val)=>{
                   return <Link to={"/restaurant/"+val.info.id}><RestaurantCard key={val.info.id} cardData={val}></RestaurantCard></Link>
                 })
               
                : 
                filteredSearchCards.map((val)=>{
                  return <Link to={"/restaurant/"+val.info.id}><RestaurantCard key={val.info.id} cardData={val}></RestaurantCard></Link>
                })
  
             }
            </div> 
        </div>
    );
}

export default Body;