import React from "react";
import { Link } from "gatsby";
import Layout from "../components/Layout";
import Head from "../components/Head";


const IndexPage = () => {
    return (
        <div>
            <Layout>
            <Head title="Home"/>
                <h1>Howdy mate!</h1>
                <h2>Since you are here, check out some of my blogs</h2>
            </Layout>
        </div>
    )
}

export default IndexPage;