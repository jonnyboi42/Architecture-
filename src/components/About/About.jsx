import React from 'react'
import Header from '../Header/Header'
const About = () => {
  return (
    <main className='about-grid-container'>
        <Header/>

        <section className='about-section'>
        
            <img src="src\assets\imgs\brutalist.jpg" alt="" />
            <div>
            <h1>Our Philosophy</h1>
            <p>We believe that architecture should reflect the environment and tell a story. With our commitment to using concrete, glass, and steel, we create spaces that are not only visually striking but also durable and sustainable. Our designs challenge traditional norms, embracing the bold lines and geometric forms characteristic of brutalist style.</p>

            </div>
           
        </section>

        <section className='projects'>
            <div>
                <h1>Projects</h1>
                <p>
                From residential buildings that blend seamlessly into their surroundings to public spaces that foster community engagement, each project is a testament to our dedication to craftsmanship and originality. Our portfolio showcases a diverse range of structures
                </p>
                <button>View Projects</button>
            </div>
        </section>


        <section className='owner'>
            <h1>Meet The Owner</h1>
            <p>
            At Brutal Forms, we are passionate about the raw beauty and unapologetic simplicity of brutalist architecture. Founded by a team of visionary architects and designers, our company is dedicated to reshaping the urban landscape with innovative structures that prioritize functionality while celebrating the unique aesthetic of brutalism.
            </p>
        </section>
                

         
        
    

    </main>

    
  )
}

export default About





