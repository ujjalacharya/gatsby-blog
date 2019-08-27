import React from "react";
import {Link} from "gatsby";

const Blog = () => {
    return(
        <div>
            <h1>Blog</h1>
            <p>All the blog contents will go here...</p>
            <p>Contact him: <Link to="/contact">Contact</Link></p>
        </div>
    )
}

export default Blog;