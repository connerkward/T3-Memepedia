import { NavLink } from "react-router-dom";
import img1 from '../resources/1_JzjHe3oYacjlJITIht-DQw.png'

function Navbar() {
    return (
        // this was my homemade one
        // TODO: add image, style text under image
        <nav className="nav">
            <NavLink className="nav-item" activeClassName="nav-item.active" to="/">
                SearchPage
            </NavLink>
            <div className="nav-item">Fake Option</div>
            <NavLink className="nav-item" activeClassName="nav-item.active" to="/meme"
            >MemePage
            </NavLink>
            <div className="nav-item">Fake Option</div>
        </nav>
    );
}

export default Navbar;
