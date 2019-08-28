/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
    siteMetadata: {
        title: 'Learning Gatsby',
        author: 'Uzz Acharya'
    },
    /* Your site config here */
    plugins: [`gatsby-plugin-sass`,
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `pages`,
                path: `${__dirname}/src/`,
            },
        },
        'gatsby-transformer-remark'
        ]
}
