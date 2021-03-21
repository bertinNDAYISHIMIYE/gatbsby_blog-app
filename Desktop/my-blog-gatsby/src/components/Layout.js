import React from 'react'
import Navbar from './Navbar.js'


export default function Layout({ children }) {


  return (
    <div className="layout">
      <Navbar />
      <div className="content">
        { children }
      </div>
      <footer>
      <div className="footer">
        <p>copyright reserved @berrybabalao2021</p>
        </div>
      </footer>
    </div>
  )
}