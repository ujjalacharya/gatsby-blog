import React from "react";
import {Link} from "gatsby";

const Header = ()  => {
    return(
        <nav>
            <Link to="/">Index </Link>
            <Link to="/about">About </Link>
            <Link to="/blog">Blog </Link>
            <Link to="/contact">Contact</Link>
        </nav>
    )
}

export default Header;