import React from "react";
import { Link } from "gatsby";
import Layout from "../components/Layout";
import Head from "../components/Head";


const Contact = () => {
    return (
        <Layout>
            <Head title="404 Not Found"/>
            <h1>404 page not found!</h1>
            <p><Link to="/">Go Home</Link></p>
        </Layout>
    )
}

export default Contact;