import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import Post from "../components/blog-post"

export default ({ data }) => {
  console.log(data)
  return (
    <Layout>
      {data.allPostsJson.edges.map(({ node }) => (
        <Post 
          date_gmt={node.date_gmt}
          id={node.id} 
          photo={node.photo.childImageSharp.fluid} 
          post_content={node.post_content}
          slug={node.slug}
          type={node.type}
          video_id={node.video_id} 
        />
      ))}
    </Layout>
  )
}

export const pageQuery = graphql`
  query {
    allPostsJson(sort: { fields: [unix_timestamp], order: ASC }) {
      edges {
        node {
          date_gmt
          id
          photo {
            childImageSharp {
              fluid(maxWidth: 1024) {
                ...GatsbyImageSharpFluid
              }
            }
            name
            ext
          }
          post_content
          slug
          type
          video_id
        }
      }
    }
  }
`