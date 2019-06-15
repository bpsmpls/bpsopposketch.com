import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import Post from "../components/blog-post"

export default ({ data }) => {
  console.log(data)
  const post = data.postsJson
  return (
    <Layout>
      <Post 
        date_gmt={post.date_gmt}
        id={post.id} 
        photo={post.photo.childImageSharp.fluid} 
        post_content={post.post_content}
        slug={post.slug}
        type={post.type}
        video_id={post.video_id} 
      />
    </Layout>
  )
}

export const pageQuery = graphql`
  query($slug: String!) {
    postsJson(slug: { eq: $slug } ) {
      date_gmt
      id
      photo {
        childImageSharp {
          fluid(maxWidth: 1024) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      post_content
      slug
      type
      video_id
    }
  }
`