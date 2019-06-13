import React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/layout"
import Img from "gatsby-image"

export default ({ data }) => {
  console.log(data)
  return (
    <Layout>
      {data.allPostsJson.edges.map(({ node }) => (
        <div key={node.id} className={`post ` + node.type}>
          <div className="wide">
            {(() => {
              if (node.type === 'video') {
                return (
                  <div className="videoWrapper">
                    <iframe src={`https://www.youtube.com/embed/` + node.video_id + `?feature=oembed&amp;enablejsapi=1&amp;origin=http://safe.txmblr.com&amp;wmode=opaque`} allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen="" width="700" height="394" frameBorder="0" title="Video"></iframe>
                  </div>
                )
              } else if (node.type === 'photo') {
                return (
                  <img src={node.photo.name + node.photo.ext} alt="" />
                )
              }
            })()}
          </div>
          <div className="narrow">
            <div className="caption" dangerouslySetInnerHTML={{ __html: node.post_content }} />
            <div className="metadata">
              <div className="date">
                <Link to={node.slug}>
                  {node.date_gmt}
                </Link>
              </div>
            </div>
          </div>
        </div>
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
            // childImageSharp {
            //   fluid(maxWidth: 1280) {
            //     ...GatsbyImageSharpFluid
            //   }
            // }
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