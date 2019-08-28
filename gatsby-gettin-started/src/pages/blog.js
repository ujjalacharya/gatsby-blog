import React from "react";
import { Link, graphql, useStaticQuery } from "gatsby";
import Layout from "../components/Layout";

const Blog = () => {
    const data = useStaticQuery(graphql`
        query{
            allMarkdownRemark{
             edges{
               node{
                frontmatter{
                 title
                         }
                    }
                 }
            }
        }
    `)

    // console.log(data.allMarkdownRemark.edges)
    return (
        <Layout>
            <h1>Blog</h1>
            <ol>
                {data.allMarkdownRemark.edges.map(datum => {
                    return (
                        <li>{datum.node.frontmatter.title}</li>
                    )
                })}
            </ol>
        </Layout>
    )
}

export default Blog;