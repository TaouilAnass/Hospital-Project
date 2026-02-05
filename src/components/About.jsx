import React from 'react'
import Footer from './Footer'
import Doctors from './hospitalDoctors.jpg'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import Navigator from './Navigator'
function About() {
  const Users = useSelector((state) => state.Users)
  const UserName = useParams().username
  return (
    <>{
      Users.map((User) =>
        User.Username === UserName ? <>
           <Navigator/>
          <section className="about mt-5" id="About" style={{ backgroundColor: '#c9c6c2' }}>

            <h1 className="heading mt-5 pt-5"> <span>about</span> us </h1>

            <div className="row">

              <div className="image">
                <img src={Doctors} alt="" className='shadow-lg rounded' />
              </div>

              <div className="content">
                <h3>we take care of your healthy life</h3>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iure ducimus, quod ex cupiditate ullam in assumenda maiores et culpa odit tempora ipsam qui, quisquam quis facere iste fuga, minus nesciunt.</p>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Natus vero ipsam laborum porro voluptates voluptatibus a nihil temporibus deserunt vel?</p>
                <a href="#" className="bttn"> learn more <span className="bi bi-chevron-double-right"></span> </a>
              </div>

            </div>

          </section>

          <Footer />
        </> : null
      )
    }</>
  )
}

export default About