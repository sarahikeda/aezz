import React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/layout"
import styles from "../scss/blog.module.scss"
import Seo from "../components/SEO"
import Button from "../components/Button/button"
import Img from "gatsby-image"


export default ({ data }) => {
  console.log(data)

  let featuredImgFluid =
    '../content/images/dark-design.jpg'
  return (
    <Layout>
      <Seo />
      <h1>
        Ahmed Ezzeldin Mohamed is a PhD candidate in Political Science, specializing in comparative politics and political methodology.
      </h1>
      < Img fluid = {
        featuredImgFluid
      }
      src ='./images/dark-design.jpg'
      />

        <p>His research interest lies in the intersection between religion and politics, in the Greater Middle East. His dissertation examines how state actors shape religious policies and how citizens’ religiosity affects their political behavior.His other research projects investigate how conspiratorial thinking affects political behavior, the persistent effects of religious violence, the role of media in framing, the effectiveness of electoral boycotts in transitional elections, and the impact of terrorism on voting behavior in new democracies.</p>

        <p>
        Prior to Columbia, Mr. Mohamed worked
        for TUSIAD Competitiveness forum in Istanbul and IPSOS Market Research. He holds a B.A. in Economics from the American University in Cairo, an M.A.in Public Policy from Sabanci University in Istanbul, and an M.A. in Political Science from Central European University.
      </p>
    </Layout>
  )
}

export const query = graphql`
  query {
    allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      limit: 3
    ) {
      totalCount
      edges {
        node {
          id
          frontmatter {
            title
            date(formatString: "MMMM DD, YY")
            path
          }
          excerpt
        }
      }
    }
  }
`
