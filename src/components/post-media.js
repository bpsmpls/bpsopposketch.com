import React from "react"
import Img from "gatsby-image"

const PostVideo = ( props ) => {
  return (
    <div className="videoWrapper">
      <iframe src={`https://www.youtube.com/embed/` + props.video_id + `?feature=oembed&amp;enablejsapi=1&amp;origin=http://safe.txmblr.com&amp;wmode=opaque`} allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen="" width="700" height="394" frameBorder="0" title="Video"></iframe>
    </div>
  )
}

const PostPhoto = ( props ) => {
  return (
    <Img Fluid={props.photo} alt="" />
  )
}

const PostMedia = ( props ) => {
  if (props.type === 'video') {
    return (
      <PostVideo 
        video_id={props.video_id}
      />
    )
  } else if (props.type === 'photo') {
    return (
      <PostPhoto 
        photo={props.photo}
      />
    )
  }
  
}

export default PostMedia