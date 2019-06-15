import React from "react"
import { Link } from "gatsby"

const NextPost = ( props ) => {
  return (
    <Link to="{props.NextPost}" className="next"><small>next</small></Link>
  )
}

const PrevPost = ( props ) => {
  return (
    <Link to="{props.PrevPost}" className="prev"><small>previous</small></Link>
  )
}

const PostNavigation = ( props ) => {
  return (
      <nav className="post-navigation">
        {(() => {
          if (props.NextPost) {
            return (
              <NextPost link={props.NextPost} />
            )
          }
        })()}
        {(() => {
          if (props.PrevPost) {
            return (
              <PrevPost link={props.PrevPost} />
            )
          }
        })()}
      </nav>
    )
}

export default PostNavigation