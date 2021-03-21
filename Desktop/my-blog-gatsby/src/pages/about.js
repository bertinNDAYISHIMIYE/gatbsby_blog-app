import React from 'react'
import Layout from '../components/Layout'
import '../styles/index.css'
import aboutImage from '../images/thumbnails/IMG-5167-removebg-preview.png'

const About = () => {

    return ( 
       <Layout>
         <h1 className='title'>About me</h1>
        <div className="about-page">
           <div className="about-image">
              <img src={aboutImage} alt="1"/>
           </div>
           <div className="about-content">
           <main>
              <div className="about-xull">
                 <h1>Qualifications</h1>
                 <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. <br />Earum ratione nisi est sunt quisquam tempora voluptate? Facilis, libero numquam! <br />Tempore dolores officia facere fuga ut voluptate iure! Eos, sed nesciunt!</p>
              </div>
              <div className="about-profession">
                 <h1>Experience</h1>
                 <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. <br />Sunt esse maxime expedita quam nisi est nemo voluptate excepturi perferendis, <br />deleniti quis dolorum natus cum consequatur fuga. Sunt libero omnis voluptatum.</p>
              </div>
              </main>
           </div>
        </div>
        </Layout>
     );
}
 
export default About;