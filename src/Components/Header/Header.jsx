import logo from "../../Img/main-logo.png";
import cart from "../../Img/cart.png";
import user from "../../Img/user.png";
import "./header.css";
import {Link} from "react-router-dom";
const Header = () => {
    return (
        <header className="header flexible">
            <Link to="/SHOPPE-React-Store"><img className="headerLogo" src={logo} alt=""/></Link>
            <div className="menu flexible">
                <nav className="navigation flexible">
                    <a className="nav-shop" href="#">Shop</a>
                    <a className="nav-blog" href="#">Blog</a>
                    <a className="nav-story" href="#">Our Story</a>
                </nav>
                <hr/>
                <div className="userMenu flexible">
                    <div className="searchBtn">
                        <input type="search" placeholder="Search" className="headerSearch"/>
                    </div>
                    <a className="cart" href="#"><img src={cart} alt=""/></a>
                    <a className="user" href="#"><img src={user} alt=""/></a>
                </div>
            </div>
        </header>
    )
}

export default Header;