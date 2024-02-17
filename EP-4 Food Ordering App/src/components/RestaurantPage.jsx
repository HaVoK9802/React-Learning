import { useEffect,useState,useRef } from "react";
import { SWIGGY_RESATURANT_MENU } from "../utils/constants";
import { useParams } from "react-router-dom";
import Title from "./Title";
import Shimmer from "./Shimmer";

const RestaurantPage=()=>{

    const [menuData,setMenuData] = useState([]);
    const [resInfo,setResInfo] = useState([]);
    const [veg, setVeg] = useState(false)
    const param = useParams();
    const startIdx = useRef(1);
    const vegRes = useRef(false);
    
    useEffect(()=>{
        const data = fetch(SWIGGY_RESATURANT_MENU+param.resId+"&catalog_qa=undefined&submitAction=ENTER")
        data
        .then((res)=>{
            return res.json();
        })
        .then((res)=>{
            // if(res.data.cards[2].groupedCard.cardGroupMap.REGULAR.cards[1].card.card.title!=="Recommended"){  
            //    setMenuData(res.data.cards.splice(0,2));
            // }
            // else{
                setMenuData(res.data.cards);
            // }

            setResInfo(res.data.cards[0].card.card.info);
            const val = res.data.cards[2].groupedCard.cardGroupMap.REGULAR.cards
            
            if(val[1].card.card.title==="Top Picks"){
                setMenuData(val.splice(2,val.length).filter((item)=>{
                    return item.card.card.title;
                }));
            }
            else{
                setMenuData(val.splice(1,val.length).filter((item)=>{
                    return item.card.card.title;
                }));
            }


            // if(res.data.cards[0].card.card.info.veg===true){
            //     vegRes.current = true;
            // }
        })
    },[]); 
    if(menuData.length===0){
        return <Shimmer></Shimmer>;
    }
    return (
        <div className="restaurant-page">
            <br></br>
            <br></br>
        <div className="res-details">
            <div className="res-details-left">
            <h3>{resInfo.name}</h3>
            <h5>{resInfo.cuisines.join(", ")}</h5>
            <h5>{resInfo.areaName+", "+resInfo.sla.lastMileTravelString}</h5>
            </div>
            <div className="res-details-right">
            <h5>{resInfo.avgRating}</h5>
            </div>
        </div>
        {/* <hr></hr> */}
        <div className="time-cost-vegToggle">
            <div className="time-cost">
            <h5>{resInfo.sla.slaString}</h5>
            <h5>{resInfo.costForTwoMessage}</h5>
            </div>
        {   
            vegRes.current?(<h3>Pure Veg</h3>):(<button onClick={()=>{
                if(veg===false){
                    setVeg(!veg);
                }
                else{
                    setVeg(!veg);
                }
                console.log(veg)
            }}>Veg</button>)
        }
        </div>
        <hr></hr>
       <br></br>
       <br></br>
       <br></br>
       <br></br>
         {  
            menuData.map((category,idx)=>{
                // console.log(category.card.card)
               return <Title key={idx} veg={veg} category={category.card.card} ></Title>
            })
         }
        </div>
    );
    
}
export default RestaurantPage;