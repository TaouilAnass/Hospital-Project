import React from 'react'
import { IconBed, IconStethoscope } from '@tabler/icons-react';
import Footer from './Footer'
import Home from './homePic.jpg'
import { useNavigate, useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Navigator from './Navigator';

function HomeLogin() {
    const Users = useSelector((state) => state.Users)
    const nav = useNavigate()
    const UserName = useParams().username
    return (
        <>{
            Users.map((User) =>
                User.Username === UserName ? <>
                    <Navigator/>
                    <section className="home mt-5" id="home" style={{ backgroundColor: '#EAEAEA' }}>

                        <div className="image">
                            <img src={Home} alt="" className='shadow-lg rounded' />
                        </div>

                        <div className="content">
                            <  h3>We Care for Your Health Every Moment</h3>
                            <p>If you are looking at blank cassettes on the web, you may be very confused at the difference in price You may see some for as low as each</p>
                            <button className="bttn" onClick={() => nav(`/Book/${UserName}`)}> Make An Appointment <span className="bi bi-chevron-double-right "></span> </button>
                        </div>

                    </section>


                    <section className="icons-container">

                        <div className="icons">
                            <IconStethoscope size={'7rem'} style={{ color: '#16a085', paddingBottom: '0.7rem' }} />
                            <h3>140+</h3>
                            <p>doctors at work</p>
                        </div>

                        <div className="icons">
                            <i className="bi bi-people-fill"></i>
                            <h3>1040+</h3>
                            <p>satisfied patients</p>
                        </div>

                        <div className="icons">
                            <IconBed size={'7rem'} style={{ color: '#16a085', paddingBottom: '0.7rem' }} />
                            <h3>500+</h3>
                            <p>bed facility</p>
                        </div>

                        <div className="icons">
                            <i className="bi bi-hospital"></i>
                            <h3>80+</h3>
                            <p>available hospitals</p>
                        </div>

                    </section>
















                    <Footer />
                </> : ''
            )
        }</>

    )
}

export default HomeLogin