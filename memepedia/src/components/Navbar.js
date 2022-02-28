import {Link } from "react-router-dom";
import { BottomNavigation } from '@mui/material';
import { BottomNavigationAction } from '@mui/material';

function Navbar() {
    return (
        // this was my homemade one
        <nav>
            <div>
                <Link to="/">SearchPage</Link>
            </div>
            <div>
                <Link to="/meme">MemePage</Link>
            </div>
        </nav>
    );
}

export default Navbar;
