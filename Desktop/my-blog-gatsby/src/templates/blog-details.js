import React from "react"
import Img from "gatsby-image"
import { graphql } from 'gatsby'
import Layout from "../components/Layout"


const ProjectDetails = ({ data }) => {
  const { html } = data.markdownRemark
  const { title, thumb } = data.markdownRemark.frontmatter

  return (
    <Layout>
      <div className="details">
        <div className="featured">
          <Img fluid={thumb.childImageSharp.fluid} />
        </div>
        <h2>{title}</h2>
        <div className="html" dangerouslySetInnerHTML={{ __html: html }} />
      </div>
    </Layout>
  )
}
 
export default ProjectDetails

export const query = graphql`
  query ProjectDetails($slug: String) {
    markdownRemark(frontmatter: {slug: {eq: $slug}}) {
      html
      frontmatter {
        title
        thumb {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`