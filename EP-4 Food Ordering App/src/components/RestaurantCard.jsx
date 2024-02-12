import { RESTAURANT_IMG_CDN_DEFAULT as imgCDN } from "../utils/constants";

const RestaurantCard = (props)=>{
    const {cardData} = props;
    const {avgRating,sla,cuisines,locality,costForTwo,name,cloudinaryImageId} = cardData?.info;
    return(
        <div className="restaurant-card">
           
            <img className="restaurant-logo" src={imgCDN+cloudinaryImageId}/>
            <h4>{name}</h4>
            <div className="restaurant-info">
                <div className="restaurant-info-1">
             <h5>{avgRating} Rating </h5>
             <h5>{sla.deliveryTime} minutes</h5>
                </div>
                <div className="restaurant-info-2">
             <h5>{cuisines.join(', ')}</h5>
                </div>
             <div className="costForTwo">{costForTwo}</div>
             <h5>{locality}</h5>
            </div>
        </div>
    )
}

export default RestaurantCard;