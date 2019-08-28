import React from "react";
import {graphql, useStaticQuery} from "gatsby";

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
        <footer>
            <p>made with love by &copy; {data.site.siteMetadata.author}</p>
        </footer>
    )
}

export default Header;