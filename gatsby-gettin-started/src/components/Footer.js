import React from "react";
import {graphql, useStaticQuery} from "gatsby";
import footerStyles from "./footer.module.scss";

const Header = ()  => {
    const data = useStaticQuery(graphql`
        query{
            site{
             siteMetadata{
             author
                        }
                 }
            }
    `)
    return(
        <footer className={footerStyles.footer}>
            <p>made with love by &copy; {data.site.siteMetadata.author}</p>
        </footer>
    )
}

export default Header;