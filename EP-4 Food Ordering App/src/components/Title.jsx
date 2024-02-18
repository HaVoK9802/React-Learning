import MenuItem from "./MenuItem";
import Category from "./Category";
import { useEffect } from "react";
const Title = ({category,veg}) =>{
    useEffect(()=>{

    },[]) 
    return (
    <div className="tilte-container">
    <div className="title-name-accordion">
        <div className="title"><h3>{category.title}</h3></div>
        {
        !category.categories?<button className="accordion-button">show</button>:(<></>)
        }
        
    </div>
    {
        category.categories?(
        category.categories.map((subCategory,idx)=>{
          return <Category key={idx} veg={veg} subCategory={subCategory.title} itemCards = {subCategory.itemCards}></Category>
        })
        ):(
            category.itemCards.map((item)=>{
                console.log(item.card.info);
                return <MenuItem key={item.card.info.id} itemInfo={item.card.info}></MenuItem>
           })
        
        )
    }
    <hr ></hr>
 
    </div>)
}

export default Title;