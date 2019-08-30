import React from "react";
import { Link, graphql, useStaticQuery } from "gatsby";
import Layout from "../components/Layout";
import Head from "../components/Head";

import blogStyles from "./blog.module.scss";

const Blog = () => {

    const data = useStaticQuery(graphql`
    query{
        allContentfulBlog(sort:{
            order: DESC
                fields: published
                 }){
                edges{
                    node{
                     title
                     slug
                     published(formatString: "MMMM Do, YYYY")
      }
    }
  }
}
    `)

    return (
        <Layout>
            <Head title="Blogs"/>
            <h1>Blogs</h1>
            <ol className={blogStyles.posts}>
                {data.allContentfulBlog.edges.map((edge, i) => {
                    return (
                        <li className={blogStyles.post} key={i}>
                            <Link to={`/blog/${edge.node.slug}`}>
                                <h2>{edge.node.title}</h2>
                                <p>{edge.node.published}</p>
                            </Link>
                        </li>
                    )
                })}
            </ol>
        </Layout>
    )
}

export default Blog;