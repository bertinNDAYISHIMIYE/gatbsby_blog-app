import React from 'react'
import Layout from '../components/Layout'
import '../styles/index.css'
import { Link, graphql } from 'gatsby'
import Img from "gatsby-image"

const Blogs = ({data}) => {
  console.log(data)
  const blogs = data.blogs.nodes

  return (
    <Layout>
      <div className="blogs">
        <h2>All blogs</h2>
        <div className="blogs-preview">
          {blogs.map(blog => (
            <Link to={"/blogs/" + blog.frontmatter.slug} key={blog.id}>
              <div className="single-blog">
                <Img fluid={blog.frontmatter.thumb.childImageSharp.fluid} />
                <h3>{ blog.frontmatter.title }</h3>
                <p><small> Written by { blog.frontmatter.Author }</small></p>
                <p><small>Published on { blog.frontmatter.Publish_Date }</small></p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </Layout>
  );
}
 
export default Blogs


export const query = graphql`
  query BlogsPage {
    blogs: allMarkdownRemark(sort: {order: DESC, fields: frontmatter___Publish_Date}) {
      nodes {
        frontmatter {
          slug
          title
          Author
          Publish_Date
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