import React from 'react'
import { Link } from 'gatsby'

export default function Navbar() {
//   const data = useStaticQuery(graphql`
//     {
//       site {
//         siteMetadata {
//           title
//         }
//       }
//     }
//   `)
  //const { title } = data.site.siteMetadata

  return (
    <nav>
      <h1><Link to="/">BerryBlogs</Link></h1>
      <div className="links">
        <Link to="/">Blogs</Link>
        <Link to="/about">About</Link>
        <Link to="/projects">Contact</Link>
      </div>
    </nav>
  )
}
