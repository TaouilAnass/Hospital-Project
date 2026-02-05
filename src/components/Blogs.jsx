import React from 'react'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import Footer from './Footer'
import Navigator from './Navigator'


function Blogs() {
    const Users = useSelector((state) => state.Users)
    const UserName = useParams().username
  return (
    <>{
        Users.map((User) =>
            User.Username === UserName ? <>
                <Navigator/>

<section className="blogs mt-5" id="Blogs">

<h1 className="heading mt-5 pt-5"> our <span>blogs</span> </h1>

<div className="box-container">

    <div className="box">
        <div className="image">
            <img src="image/Procedure.jpg" alt="" />
        </div>
        <div className="content">
            <div className="icon">
                <a href="#" className='text-decoration-none'> <i className="bi bi-calendar"></i> 1st may, 2021 </a>
                <a href="#" className='text-decoration-none'> <i className="bi bi-person"></i> by admin </a>
            </div>
            <h3>blog title goes here</h3>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Provident, eius.</p>
            <a href="#" className="bttn"> learn more <span className="bi bi-chevron-double-right"></span> </a>
        </div>
    </div>

    <div className="box">
        <div className="image">
            <img src="image/Procedure2.jpg" alt="" />
        </div>
        <div className="content">
            <div className="icon">
                <a href="#" className='text-decoration-none'> <i className="bi bi-calendar"></i> 1st may, 2021 </a>
                <a href="#" className='text-decoration-none'> <i className="bi bi-person"></i> by admin </a>
            </div>
            <h3>blog title goes here</h3>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Provident, eius.</p>
            <a href="#" className="bttn"> learn more <span className="bi bi-chevron-double-right"></span> </a>
        </div>
    </div>

    <div className="box">
        <div className="image">
            <img src="image/Procedure3.jpg" alt="" />
        </div>
        <div className="content">
            <div className="icon">
                <a href="#" className='text-decoration-none'> <i className="bi bi-calendar"></i> 1st may, 2021 </a>
                <a href="#" className='text-decoration-none'> <i className="bi bi-person"></i> by admin </a>
            </div>
            <h3>blog title goes here</h3>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Provident, eius.</p>
            <a href="#" className="bttn"> learn more <span className="bi bi-chevron-double-right"></span> </a>
        </div>
    </div>

</div>

</section>

      
















                <Footer />
            </> : ''
        )
    }</>
  )
}

export default Blogs