import React from "react";
import { Link } from "gatsby";
import Layout from "../components/Layout";

const Blog = () => {
    return (
        <Layout>
            <h1>Blog</h1>
            <p>All the blog contents will go here...</p>
            <p>Contact him: <Link to="/contact">Contact</Link></p>
        </Layout>
    )
}

export default Blog;