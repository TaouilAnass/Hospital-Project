import React from 'react'
import { Link, useParams } from 'react-router-dom'

function Footer() {
    const UserName = useParams().username
  return (
    <section className="footer">

    <div className="box-container">

        <div className="box">
            <h3>Quick links</h3>
            <Link to={`/HomeLogin/${UserName}`}><i className="bi bi-chevron-right"></i> home </Link>
            <Link to={`/Services/${UserName}`}> <i className="bi bi-chevron-right"></i> services </Link>
            <Link to={`/About/${UserName}`}> <i className="bi bi-chevron-right"></i> about </Link>
            <Link to={`/Doctors/${UserName}`}> <i className="bi bi-chevron-right"></i> doctors </Link>
            <Link to={`/Book/${UserName}`} > <i className="bi bi-chevron-right"></i> book </Link>
            <Link to={`/Review/${UserName}`}> <i className="bi bi-chevron-right"></i> review </Link>
            <Link to={`/Blogs/${UserName}`}> <i className="bi bi-chevron-right"></i> blogs </Link>
        </div>

        <div className="box">
            <h3>Our services</h3>
            <a href='#!'> <i className="bi bi-chevron-right"></i> dental care </a>
            <a href='#!'> <i className="bi bi-chevron-right"></i> message therapy </a>
            <a href='#!'> <i className="bi bi-chevron-right"></i> cardioloty </a>
            <a href='#!'> <i className="bi bi-chevron-right"></i> diagnosis </a>
            <a href='#!'> <i className="bi bi-chevron-right"></i> ambulance service </a>
        </div>

        <div className="box">
            <h3>Contact info</h3>
            <a href="tel:+212-589-639-654"> <i className="bi bi-telephone"></i> +212-589-639-654  </a>
            <a href="tel:+212-522-333-329"> <i className="bi bi-phone"></i> +212-622-333-329 </a>
            <a href='mailto:Echo.health.asaad@gmail.ma'> <i className="bi bi-envelope"></i> Echo.health.asaad@gmail.ma </a>
            <a href='mailto:Echo.health.asaad@gmail.ma'> <i className="bi bi-envelope"></i> health.echo.hospital@yahoo.ma </a>
            <a target="_blank" href='https://www.google.com/maps/place/H%C3%B4pital+Mohamed+V/@35.2388327,-3.9406138,17z/data=!3m1!4b1!4m6!3m5!1s0xd7432282742fdc9:0xf530909023f26d65!8m2!3d35.2388327!4d-3.9384251!16s%2Fg%2F11c5_n7ln_'> <i className="bi bi-geo-alt"></i> AL Hoceima, Morocco - 320000 </a>
        </div>

        <div className="box">
            <h3>Follow us</h3>
            <a href='https://www.facebook.com/profile.php?id=100086624156656' target="_blank"> <i className="bi bi-facebook"></i> facebook </a>
            <a href='#!'> <i className="bi bi-snapchat"></i> Snapchat </a>
            <a href='#!'> <i className="bi bi-twitter"></i> twitter </a>
            <a href='#!'> <i className="bi bi-instagram"></i> instagram </a>
            <a href='https://www.linkedin.com/company/amgen/life/fbff351d-4925-4a0f-94b1-8180943174e8/' target="_blank"> <i className="bi bi-linkedin"></i> linkedin </a>
            <a href='#!'> <i className="bi bi-pinterest"></i> pinterest </a>
        </div>

    </div>

    <div className="credit"> created by <span><i className="bi bi-heart-pulse-fill text-dark"></i> Echo Health.</span> | all rights reserved </div>

</section>
  )
}

export default Footer