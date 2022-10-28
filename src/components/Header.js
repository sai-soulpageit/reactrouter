import {NavLink} from "react-router-dom";
import './Header.css'

const Header = () => {
  return (
    <header className="headd">
    <img src="https://soulpageit.com/wp-content/uploads/2021/02/SoulpageLogo.svg" alt="" />
  <nav >
   <ul className="navigation">
    <li> <NavLink to="/">Home</NavLink></li>
    <li> <NavLink to="/about">About</NavLink></li>
    <li> <NavLink to="/contact">Contact</NavLink></li>
   </ul>
  </nav>
 </header>
  )
}

export default Header