module.exports = {
  siteMetadata: {
    title: "Cody Eakins",
    description: "Full-Stack App Developer, Hobbyist Artist",
    author: "@codyaeakins"
  },
  plugins: [
    "gatsby-plugin-react-helmet",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: `${__dirname}/src/images`
      }
    },
    "gatsby-transformer-sharp",
    "gatsby-plugin-sharp",
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        name: "cody-eakins-website",
        short_name: "cody-eakins",
        start_url: "/",
        background_color: "#ffffff",
        theme_color: "#ffffff",
        display: "minimal-ui",
        icon: "src/images/ce-icon.png"
      }
    },
    {
      resolve: "gatsby-plugin-typography",
      options: {
        pathToConfigModule: "src/utils/typography"
      }
    }
  ]
};
