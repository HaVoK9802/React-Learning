import { SWIGGY_LOGO as logoIMG } from "../utils/constants";
import {Link} from 'react-router-dom';
const Header = ()=>{
    return (
        <div className="header">
           <div className="logo-container">
            <img src={logoIMG}/>
           </div>
           <div className="nav-items">
            <ul>
                <li>Home</li>
               <Link to="about"><li>About</li></Link>
                <li>Contact Us</li>
                <li>Cart</li>
            </ul>
           </div>
        </div>
    )
}
export default Header;