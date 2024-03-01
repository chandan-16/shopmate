import { Link, NavLink } from "react-router-dom";
import Logo from "../assets/logo.png";

import "./Header.css";

export const Header = () => {
  return (
    <header>
      <Link to="/" style={{width : '150px', display : 'flex', justifyContent : 'space-between'}}>
        <img style={{width : '45px', height : '45px', marginTop : '10px'}} src={Logo} alt="Shopmate Logo" />
        <span style={{paddingTop : '20px'}}>Shopmate</span>
      </Link>

      <nav className="navigation">
        <NavLink to="/" className="link" end>Home</NavLink>
        <NavLink className="link" to="/cart">Cart</NavLink>
      </nav>

      <Link to="/cart">
        <span><i className="bi bi-cart-fill"></i> : 2</span>
      </Link>
    </header>
  )
}
