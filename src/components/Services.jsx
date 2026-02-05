import React from 'react'
import Footer from './Footer'
import Carousel from 'react-bootstrap/Carousel';
import { IconAmbulance, IconBed, IconStethoscope } from '@tabler/icons-react';
import Navigator from './Navigator';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

export default function Services() {
    const Users = useSelector((state) => state.Users)
    const UserName = useParams().username
  return (
   <>
     {
        Users.map((e) => 
         e.Username  ===   UserName ? 
         <>
         <Navigator/>
         <section className="services mt-5 pt-5" id="Services">
    
    <h1 className="heading mt-5 pt-5"> our <span>services</span> </h1>
    
    <div className="box-container">
    
        <Carousel className='text-center'  variant="dark" >
            <Carousel.Item >
                <div className="box mb-3">
                    <i className="bi bi-clipboard-pulse"></i>
                    <h3>free checkups</h3>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ad, omnis.</p>
                    <a href="#" className="bttn"> learn more <span className="bi bi-chevron-double-right"></span> </a>
                </div>
            </Carousel.Item>
            <Carousel.Item>
                <div className="box mb-3">
                    <IconAmbulance size={'7rem'} style={{ color: '#16a085', paddingBottom: '0.7rem' }} />
                    <h3>24/7 ambulance</h3>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ad, omnis.</p>
                    <a href="#" className="bttn"> learn more <span className="bi bi-chevron-double-right"></span> </a>
                </div>
            </Carousel.Item>
            <Carousel.Item>
                <div className="box mb-3">
                    <IconStethoscope size={'7rem'} style={{ color: '#16a085', paddingBottom: '0.7rem' }} />
                    <h3>expert doctors</h3>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ad, omnis.</p>
                    <a href="#" className="bttn"> learn more <span className="bi bi-chevron-double-right"></span> </a>
                </div>
    
            </Carousel.Item>
            <Carousel.Item>
                <div className="box mb-3">
                    <i className="bi bi-capsule-pill"></i>
                    <h3>medicines</h3>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ad, omnis.</p>
                    <a href="#" className="bttn"> learn more <span className="bi bi-chevron-double-right"></span> </a>
                </div>
    
            </Carousel.Item>
            <Carousel.Item>
                <div className="box mb-3">
                    <IconBed size={'7rem'} style={{ color: '#16a085', paddingBottom: '0.7rem' }} />
                    <h3>bed facility</h3>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ad, omnis.</p>
                    <a href="#" className="bttn"> learn more <span className="bi bi-chevron-double-right"></span> </a>
                </div>
            </Carousel.Item>
            <Carousel.Item>
                <div className="box mb-3">
                    <i className="bi bi-heart-pulse"></i>
                    <h3>total care</h3>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ad, omnis.</p>
                    <a href="#" className="bttn"> learn more <span className="bi bi-chevron-double-right"></span> </a>
                </div>
            </Carousel.Item>
        </Carousel>
    
    
    </div>
    
    </section>
    
         <Footer/>
        </> : null
        )
     }
   </>
  )
}
