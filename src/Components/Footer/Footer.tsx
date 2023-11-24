import React from 'react'
import "./Footer.css"
import { HiHome  , HiUser , HiShoppingCart} from "react-icons/hi";
import { Link, useLocation } from 'react-router-dom';
function Footer() {
    const current_route = useLocation().pathname
  return (
    <footer>
        <Link to="/" className={current_route === "/" ? 'active-route' : ''}>
        <HiHome />
        <p>خانه</p>
        </Link>
        <Link to="/cart" className={current_route === "/cart" ? 'active-route' : ''}>
        <HiShoppingCart />
        <p>سبد خرید</p>
        </Link>
        <Link to="/about" className={current_route === "/about" ? 'active-route' : ''}>
        <HiUser />
        <p>درباره ما</p>
        </Link>
    </footer>
  )
}

export default Footer