import MenuItem from "./MenuItem";
const Category = ({subCategory,veg,itemCards}) =>{
    
    return (
        <div className="subcategory-container">
        <div className="subcategory-name-accordion">
        <h4>{subCategory}</h4>
        <button className="accordion-button">show</button>
        </div>
        <hr></hr>
        {
         
          itemCards.map((item)=>{
               console.log(item.card.info);
               return <MenuItem key={item.card.info.id} itemInfo={item.card.info}></MenuItem>
          })
        }
        </div>
   )
}

export default Category;