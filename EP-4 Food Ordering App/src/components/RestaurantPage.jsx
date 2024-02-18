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
            if(res.data.cards[0].card.card.info.veg===true){
                vegRes.current = true;
            }
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
           
            <p>
            <svg width="21px" height="20px" viewBox="0 0 1024 1024" className="icon" version="1.1" xmlns="http://www.w3.org/2000/svg" fill="#000000"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M359.8 368.7c-83.5 37-150 103.4-187.1 186.9-5.6 12.6 0.1 27.3 12.7 32.9 3.3 1.5 6.7 2.2 10.1 2.2 9.6 0 18.7-5.5 22.8-14.8 32.1-72.2 89.5-129.6 161.7-161.6 12.6-5.6 18.3-20.3 12.7-32.9-5.5-12.6-20.3-18.3-32.9-12.7z m214.6-108.5c7.2-11.8 11.6-25.5 11.6-40.3 0-42.8-34.7-77.4-77.4-77.4-42.8 0-77.4 34.7-77.4 77.4 0 14.8 4.4 28.6 11.6 40.3-216.7 31.9-383.5 219-383.5 444.4v54.1c0 13.8 11.2 25 25 25H933c13.8 0 25-11.2 25-25v-54.1c-0.1-225.4-167-412.4-383.6-444.4zM908 733.7H109.2v-29.1c0-220.2 179.2-399.3 399.4-399.3S908 484.4 908 704.6v29.1z m24.9 100.2H84.2c-13.8 0-25 11.2-25 25s11.2 25 25 25h848.7c13.8 0 25-11.2 25-25s-11.2-25-25-25z" fill="#a1a1a1"  ></path></g></svg>
                {resInfo.cuisines.join(", ")}
            </p>
            <p>
            <svg width="20px" height="20px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M12 21C15.5 17.4 19 14.1764 19 10.2C19 6.22355 15.866 3 12 3C8.13401 3 5 6.22355 5 10.2C5 14.1764 8.5 17.4 12 21Z" stroke="#a1a1a1" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path> <path d="M12 12C13.1046 12 14 11.1046 14 10C14 8.89543 13.1046 8 12 8C10.8954 8 10 8.89543 10 10C10 11.1046 10.8954 12 12 12Z" stroke="#a1a1a1" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path> </g></svg>
            {resInfo.areaName+", "+resInfo.sla.lastMileTravelString}
            </p>
            </div>
            <div className="res-details-right">
            <svg width="54px" height="54px" viewBox="-17.28 -17.28 58.56 58.56" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M9.15316 5.40838C10.4198 3.13613 11.0531 2 12 2C12.9469 2 13.5802 3.13612 14.8468 5.40837L15.1745 5.99623C15.5345 6.64193 15.7144 6.96479 15.9951 7.17781C16.2757 7.39083 16.6251 7.4699 17.3241 7.62805L17.9605 7.77203C20.4201 8.32856 21.65 8.60682 21.9426 9.54773C22.2352 10.4886 21.3968 11.4691 19.7199 13.4299L19.2861 13.9372C18.8096 14.4944 18.5713 14.773 18.4641 15.1177C18.357 15.4624 18.393 15.8341 18.465 16.5776L18.5306 17.2544C18.7841 19.8706 18.9109 21.1787 18.1449 21.7602C17.3788 22.3417 16.2273 21.8115 13.9243 20.7512L13.3285 20.4768C12.6741 20.1755 12.3469 20.0248 12 20.0248C11.6531 20.0248 11.3259 20.1755 10.6715 20.4768L10.0757 20.7512C7.77268 21.8115 6.62118 22.3417 5.85515 21.7602C5.08912 21.1787 5.21588 19.8706 5.4694 17.2544L5.53498 16.5776C5.60703 15.8341 5.64305 15.4624 5.53586 15.1177C5.42868 14.773 5.19043 14.4944 4.71392 13.9372L4.2801 13.4299C2.60325 11.4691 1.76482 10.4886 2.05742 9.54773C2.35002 8.60682 3.57986 8.32856 6.03954 7.77203L6.67589 7.62805C7.37485 7.4699 7.72433 7.39083 8.00494 7.17781C8.28555 6.96479 8.46553 6.64194 8.82547 5.99623L9.15316 5.40838Z" fill="#60b246"></path> </g></svg>
            <h5>{resInfo.avgRating}</h5>
            </div>
        </div>
        {/* <hr></hr> */}
        <div className="time-cost-vegToggle">
            <div className="time-cost">
            <svg width="20px" height="20px" viewBox="0 0 24.00 24.00" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21Z" stroke="#000000" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path> <path d="M12 6V12" stroke="#000000" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path> <path d="M16.24 16.24L12 12" stroke="#000000" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path> </g></svg>
            <p>{resInfo.sla.slaString}</p>
            <div className="gap"></div>
            <svg width="20px" height="20px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <circle cx="12" cy="12" r="9" stroke="#000000" strokeWidth="0.8879999999999999" strokeLinecap="round" strokeLinejoin="round"></circle> <path d="M8 8H12C13.1046 8 14 8.89543 14 10V11.1429C14 12.2474 13.1046 13.1429 12 13.1429H9.33333L13.3333 17" stroke="#000000" strokeWidth="0.8879999999999999" strokeLinecap="round" strokeLinejoin="round"></path> <path d="M8 8L16 8" stroke="#000000" strokeWidth="0.8879999999999999" strokeLinecap="round" strokeLinejoin="round"></path> <path d="M10 10.5718L16 10.5718" stroke="#000000" strokeWidth="0.8879999999999999" strokeLinecap="round" strokeLinejoin="round"></path> </g></svg>
            <p>{resInfo.costForTwoMessage}</p>
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