import React from "react";
import {Link} from "gatsby";
import Footer from "../components/Footer";
import Header from "../components/Header";


const IndexPage = () => {
    return(
        <div>
            <Header />
            <h1>Hey</h1>
            <h2>This is Ujjal Acharya</h2>
            <p>Contact him: <a href="/contact">Contact</a></p>
            <p>Contact him: <Link to="/contact">Contact</Link></p>
            <Footer />
        </div>
    )
}

export default IndexPage;