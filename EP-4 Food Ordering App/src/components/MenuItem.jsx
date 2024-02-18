import { RESTAURANT_IMG_CDN_DEFAULT } from "../utils/constants";
import { vegLogo,nonVegLogo } from "../utils/constants";
const MenuItem = ({itemInfo})=>{
    const {name,description,imageId,price,itemAttribute,nextAvailableAtMessage} = itemInfo;
    

    return (
    <div className="menu-overall">
    <div  className="menu-item-container">
       <div className="menu-item-name-price-description">
             {itemAttribute.vegClassifier==="VEG"?(
                <img className="vegLogo" src={vegLogo}/>
             ):(
                <img className="vegLogo" src={nonVegLogo}/>
             ) }
             <h4>{name}</h4>
             <p>{"₹"+price/100}</p>
             <p>{description}</p>
       </div>
       <div className="menu-item-image-button">
        { 
        imageId?<img src={RESTAURANT_IMG_CDN_DEFAULT+imageId} alt={nextAvailableAtMessage}/>:<></>
        }
        <button>Add</button>
       </div>
    </div>
    <hr></hr>
    </div>)
}

export default MenuItem;