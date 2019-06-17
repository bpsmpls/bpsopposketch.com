import React from "react"
import { Helmet } from "react-helmet"
import { graphql, useStaticQuery } from "gatsby"

const SiteMetadata = ({ pathname }) => {
  const {
    site: {
      siteMetadata: { description, siteUrl, title },
    },
  } = useStaticQuery(graphql`
    query SiteMetadata {
      site {
        siteMetadata {
          description,
          siteUrl
          title
        }
      }
    }
  `)

  return (
    <Helmet defer={false} defaultTitle={title} titleTemplate={`%s | ${title}`}>
      <html lang="en" />
      <meta name="viewport" content="width=device-width,initial-scale=1,shrink-to-fit=no,viewport-fit=cover" />
      <meta name="description" content={description} />

      <meta property="og:url" content={siteUrl} />
      <meta property="og:type" content="website" />
      <meta property="og:locale" content="en" />
      <meta property="og:site_name" content={title} />
      <meta property="og:image" content="" />
    </Helmet>
  )
}

export default SiteMetadata