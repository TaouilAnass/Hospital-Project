import React from 'react'
import Footer from './Footer'
import Carousel from 'react-bootstrap/Carousel';
import Navigator from './Navigator';
import { useSelector } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom'

function Doctors() {
    const nav = useNavigate()
    const Doctors = useSelector((state) => state.Doctors)
    console.log(Doctors)
    const Users = useSelector((state) => state.Users)
    const UserName = useParams().username
    return (
        <>
            {
                Users.map((e) =>
                    e.Username === UserName ?
                        <>
                            <Navigator />
                            <section className="doctors mt-5" id="Doctors">

                                <h1 className="heading mt-5 pt-5"> our <span>doctors</span> </h1>


                                <Carousel className="box-container" variant='dark'>
                                    {
                                        Doctors.map((doctor) =>
                                            <Carousel.Item >
                                                <div className='d-flex justify-content-center'>
                                                    <div className='d-flex justify-content-center' style={{ width: '80rem' }}>
                                                        <div className="box mb-3" >
                                                            <img src={doctor.Photo} alt="" />
                                                            <h3>Dr : {doctor.Last_Name + ' ' + doctor.First_Name}</h3>
                                                            <span>{doctor.Specialty}</span>
                                                            <div className="share" >
                                                                <button className='ExBtn mb-5 ' onClick={() => nav(`/Book/${UserName}`)}> Make An Appointment </button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </Carousel.Item>
                                        )
                                    }
                                </Carousel>

                            </section>

                            <Footer />
                        </> : ''
                )
            }
        </>
    )
}

export default Doctors