import MenuItem from "./MenuItem";
import Category from "./Category";
const Title = ({category,veg}) =>{

    return (
    <div className="tilte-container">
    <div className="title-name-accordion">
        <div className="title"><h4>{category.title}</h4></div>
        {
        !category.categories?<button className="accordion-button">show</button>:(<></>)
        }
        
    </div>
    {
        category.categories?(
        category.categories.map((subCategory,idx)=>{
            console.log(subCategory.itemCards);
          return <Category key={idx} veg={veg} subCategory={subCategory.title} itemCards = {subCategory.itemCards}></Category>
        })
        ):(
            <></>
           
        // <MenuItem veg={veg} items = {category.itemCards}/>
        
        )
    }
    <hr ></hr>
 
    </div>)
}

export default Title;