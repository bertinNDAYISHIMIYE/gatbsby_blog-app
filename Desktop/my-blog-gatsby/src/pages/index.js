import React from 'react'
import Layout from '../components/Layout'
import '../styles/index.css'
import { Link, graphql } from 'gatsby'
import Img from "gatsby-image"

const Projects = ({data}) => {
  console.log(data)
  const projects = data.projects.nodes
  const contact = data.contact.siteMetadata.contact

  return (
    <Layout>
      <div className="blogs">
        <h2>All blogs</h2>
        <div className="blogs-preview">
          {projects.map(project => (
            <Link to={"/blogs/" + project.frontmatter.slug} key={project.id}>
              <div>
                <Img fluid={project.frontmatter.thumb.childImageSharp.fluid} />
                <h3>{ project.frontmatter.title }</h3>
              </div>
            </Link>
          ))}
        </div>
        <p>Likewhat you see? email me at {contact} for a quote!</p>
      </div>
    </Layout>
  );
}
 
export default Projects


export const query = graphql`
  query ProjectsPage {
    projects: allMarkdownRemark(sort: {order: DESC, fields: frontmatter___date}) {
      nodes {
        frontmatter {
          slug
          title
          thumb {
            childImageSharp {
              fluid {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
        id
      }
    }
    contact: site {
      siteMetadata {
        contact
      }
    }
  }
`