import React from "react";
import { Link } from "gatsby";
import Layout from "../components/Layout";
import Head from "../components/Head";


const Contact = () => {
    return (
        <Layout>
            <Head title="Contact"/>
            <h1>Contact</h1>
            <p>You can contact him at +977 9848658331</p>
            <p>Go to home: <Link to="/">Index</Link></p>
        </Layout>
    )
}

export default Contact;