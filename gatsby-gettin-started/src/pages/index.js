import React from "react";
import { Link } from "gatsby";
import Layout from "../components/Layout";
import Head from "../components/Head";


const IndexPage = () => {
    return (
        <div>
            <Layout>
            <Head title="Home"/>
                <h1>Hey</h1>
                <h2>This is Ujjal Acharya</h2>
                <p>Contact him: <a href="/contact">Contact</a></p>
                <p>Contact him: <Link to="/contact">Contact</Link></p>
            </Layout>
        </div>
    )
}

export default IndexPage;