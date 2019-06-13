import React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/layout"

export default ({ data }) => (
  <Layout>
    <div class="post text">
      <div class="narrow">
        <div class="title">
          <h1>about {data.site.siteMetadata.title}</h1>
        </div>
        <div class="caption">
          <p>I broke my wrist in November of 2015 and after months of casts, therapies, and fancy medical devices, I was given the green light to return to normal life. The next August, it was deduced that it was still broken, actually more than it was originally, and I needed surgery to alleviate the daily excruciating pain and prevent arthritis much later. The surgery happened in October, way after my doctor suggested. I’d still had some gigs with my band to do and a few bike things to wrap up beforehand. The surgery involved a bone graft from my hip for its fruitful stem cells; they sculpted and shaped the harvested bone around the scaphoid. My team of doctors were not sure if I’d need additional surgery after that and we wouldn’t know anything for months.</p>
          <p>All of that is the necessary context for this project, which came out of a need to stay sane during the months of waiting. Since I’d broken the wrist on my dominant hand and have been given very strict lifting restrictions (‘maximum stress activity is pulling up your pants,’ came from the doctor’s mouth), I knew that like the previous year’s tenure in a cast, I had to work around not being able to use my right hand. I had to find new activities outside of biking, guitar, and drums. And this time, I wasn’t allowed to swing a hammer to build desks like the year before.</p>
          <p>So I decided I would sketch with my left hand, my non-dominant hand, my opposite hand, to sort of document this period. Sometimes the sketch was kind of a metaphor or visual journal entry, other times it was complete nonsense. Often it had some contextual caption paired with it. It gave me something to do while I waited to know how long I’d need to continue waiting for.</p>
          <p>This site exists as an archive of that period, which thankfully ended three months after the surgery to a lifted lifting restriction, rigorous physical therapy, and eventual full healing.</p>
          <p><Link to={`/`}>view the project in chronological order</Link></p>
        </div>
      </div>
    </div>
  </Layout>
)

export const query = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`