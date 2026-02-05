import React from 'react'

import { useNavigate } from 'react-router-dom';


function Home() {

    const NavigateLogin = useNavigate()
  return (
    <>
    <section className="home" id="home">

    <div className="image">
        <img src="image/home-img.svg" alt=""/>
    </div>

    <div className="content">
    <h3>We Care for Your Health Every Moment</h3>
        <p>If you are looking at blank cassettes on the web, you may be very confused at the difference in price You may see some for as low as each</p>
        <button className="bttn" onClick={() => NavigateLogin("/Login")}> Get Started <span className="bi bi-chevron-double-right "></span> </button>
    </div>

</section>

</>

  )
}

export default Home