import React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/layout"

export default ({ data }) => {
  const post = data.postsJson
  return (
    <Layout>
     
    </Layout>
  )
}

export const query = graphql`
  query($slug: String!) {
    postsJson(slug: { eq: $slug } ) {
      photo {
        childImageSharp {
          fluid(maxWidth: 1280) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      video_id
      post_content
      type
      slug
      date_gmt
    }
  }
`