import React from "react";

import {graphql} from "gatsby";

import { documentToReactComponents } from "@contentful/rich-text-react-renderer"

import Layout from "../components/Layout";
import Head from "../components/Head";

export const data = graphql`
    query($slug: String){
        contentfulBlog(slug: {eq: $slug}){
            title
            published(formatString: "MMMM Do YYYY")
            body{
                json
            }
  }
}
`;

const Blog = (props) => {

    const options = {
        renderNode: {
            "embedded-asset-block": (node) => {
                const alt = node.data.target.fields.title['en-US']
                const url = node.data.target.fields.file['en-US'].url

                return <img src={url} alt={alt} />
            }
        }
    }

    return (
        <Layout>
            <Head title={props.data.contentfulBlog.title}/>
                 <h2>{props.data.contentfulBlog.title}</h2>
                 <p>{props.data.contentfulBlog.published}</p>
                 {documentToReactComponents(props.data.contentfulBlog.body.json, options)}
        </Layout>
    )
}

export default Blog;