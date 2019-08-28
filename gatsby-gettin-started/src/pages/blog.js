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
                html
                fields{
                    slug
                     }
                    }
                 }
            }
        }
    `)

    return (
        <Layout>
            <h1>Blog</h1>
            <ol>
                {data.allMarkdownRemark.edges.map(edge => {
                    return (
                        <li>
                            <h3> <Link to={`/blog/${edge.node.fields.slug}`}>{edge.node.frontmatter.title}</Link> </h3>
                            <p>{edge.node.frontmatter.date}</p>
                        </li>
                    )
                })}
            </ol>
        </Layout>
    )
}

export default Blog;