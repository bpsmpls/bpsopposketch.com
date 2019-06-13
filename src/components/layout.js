import React from "react"
import styles from "../assets/styles/global.css"
import { Link } from "gatsby"

const ListLink = props => (
  <li>
    <Link to={props.to}>{props.children}</Link>
  </li>
)

export default ({ children }) => {
  return (
    <div id="page">
      <div id="header">
        <div className="links">
          <ul>
            <ListLink to="/about/">about this project</ListLink>
            <ListLink to="/">view project chronologically</ListLink>
          </ul>
        </div>
        <div className="blog-title">
          <h1><Link to="/">bps</Link></h1>
          <p className="blog-description">oppo sketches</p>
          <p className="blog-description"><small>(drawings with a non-dominant hand)</small></p>
        </div>
      </div>
      <div id="content">
        {children}
      </div>
      <div id="footer">
        <div id="footer-links">
          <ul>
            <ListLink to="/about/">about this project</ListLink>
          </ul>
        </div>
        <div className="colophon">
          <p>&copy; bps 2016–2019</p>
        </div>
      </div>
    </div>
  )
}