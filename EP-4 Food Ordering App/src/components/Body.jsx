import RestaurantCard from "./RestaurantCard";
import cardInfo from "../utils/mockData";
const Body = ()=>{
    return (
        <div className="body">
            <div className="search">search</div>
            <div className="restaurant-container">
                {
                  cardInfo[4].card.card.gridElements.infoWithStyle.restaurants.map((val)=>{
                    return <RestaurantCard key={val.info.id} cardData={val}></RestaurantCard>
                  })
                }
            </div> 
        </div>
    );
}

export default Body;