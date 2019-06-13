import React from "react"
import { Link } from "gatsby"
import PostMedia from "../components/post-media"

const Post = ( props ) => {
  return (
      <div key={props.id} className={`post ` + props.type}>
        <div className="wide">
          <PostMedia 
            type={props.type} 
            photo={props.photo} 
            video_id={props.video_id} 
          />
        </div>
        <div className="narrow">
          <div className="caption" dangerouslySetInnerHTML={{ __html: props.post_content }} />
          <div className="metadata">
            <div className="date">
              <Link to={props.slug}>
                {props.date_gmt}
              </Link>
            </div>
          </div>
        </div>
      </div>
    )
}

export default Post