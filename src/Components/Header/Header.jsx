import logo from "../../Img/main-logo.png";
import cart from "../../Img/cart.png";
import user from "../../Img/user.png";
import "./header.css";
import {Link} from "react-router-dom";
const Header = () => {
    return (
        <section>
            <header className="header flexible">
                <Link to="/SHOPPE-React-Store"><img className="headerLogo" src={logo} alt=""/></Link>
                <div className="menu flexible">
                    <nav className="navigation flexible">
                        <Link to="/SHOPPE-React-Store/catalog" className="nav-shop">Shop</Link>
                        <Link to="/SHOPPE-React-Store/blog" className="nav-blog">Blog</Link>
                        <Link to="/SHOPPE-React-Store/about" className="nav-story">Our Story</Link>
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
            <div className="fakeHeader"></div>
        </section>

    )
}

export default Header;