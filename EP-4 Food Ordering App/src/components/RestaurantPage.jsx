import { useEffect,useState,useRef } from "react";
import { SWIGGY_RESATURANT_MENU } from "../utils/constants";
import { useParams } from "react-router-dom";
import Shimmer from "./Shimmer";

const RestaurantPage=()=>{

    const [menuData,setMenuData] = useState([]);
    const [veg, setVeg] = useState(false)
    const param = useParams();
    const startIdx = useRef(1);
    const vegRes = useRef(false);
    const resInfo = useRef({})
    useEffect(()=>{
        const data = fetch(SWIGGY_RESATURANT_MENU+param.resId)
        data
        .then((res)=>{
            return res.json();
        })
        .then((res)=>{
            if(res.data.cards[2].groupedCard.cardGroupMap.REGULAR.cards[1].card.card.title!=="Recommended"){
               startIdx.current=2;
            }
            resInfo.current = res.data.cards[0].card.card.info;
            setMenuData(res.data.cards[2]);
            if(res.data.cards[0].card.card.info.veg===true){
                vegRes.current = true;
            }
            console.log(res.data.cards[0].card.card.info);
        })
    },[]); 
    if(menuData.length===0){
        return <Shimmer></Shimmer>;
    }
    return (
        <div className="restaurant-page">
        <div className="res-details">
            <h1>{resInfo.current.name}</h1>
        </div>
        <div className="menu">
        {
            vegRes.current?(<></>):(<button>Veg</button>)
        }
        </div>
        </div>
    );
     
}
export default RestaurantPage;