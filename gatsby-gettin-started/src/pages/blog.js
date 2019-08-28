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
                 date
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
                        <li>
                            <h3> {datum.node.frontmatter.title}</h3>
                            <p>{datum.node.frontmatter.date}</p>
                        </li>
                    )
                })}
            </ol>
        </Layout>
    )
}

export default Blog;