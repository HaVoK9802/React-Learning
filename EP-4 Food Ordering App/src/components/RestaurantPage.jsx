import { useEffect,useState } from "react";
import { SWIGGY_RESATURANT_MENU } from "../utils/constants";

const RestaurantPage=()=>{

    const [menuData,setMenuData] = useState([]);


    useEffect(()=>{
        const data = fetch(SWIGGY_RESATURANT_MENU+)
    },[]); 

    return (
        <h1>Restaurant Page</h1>
    );
     
}
export default RestaurantPage;