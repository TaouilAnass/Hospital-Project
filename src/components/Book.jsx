import React, { useState } from 'react'
import Footer from './Footer'
import appointment from './appointment.jpg'
import Navigator from './Navigator'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import Modal from 'react-bootstrap/Modal';



function Book() {

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const Users = useSelector((state) => state.Users)
  const UserName = useParams().username
  const [ContwithName , setContWithName] = useState(false)

  const Continue =()=>{
      setContWithName(true)
      setShow(false)
  }
  return (
  <>
  {
    Users.map((e) => 
     e.Username === UserName ? 
     <>
     <Navigator/>
     <section className="book mt-5 " id="Book" style={{backgroundColor : '#dde1e4'}}>

       <h1 className="heading mt-5 pt-5"> <span>book</span> now </h1>

       <div className="row">

         <div className="image">
           <img src={appointment} alt="" className='shadow-lg rounded'/>
         </div>

         <form  >
           <h3 ><a href="#!" className='text-dark text-decoration-none'>book Appointment</a></h3>
           <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title><a href='#!' className="text-decoration-none fs-3 text-dark"  > <i className="bi bi-heart-pulse-fill" style={{color: '#16a085'}}></i> Echo Health.</a></Modal.Title>
                </Modal.Header>
                <Modal.Body className='fs-2 text-center'>Do you want to continue with the name <span style={{color : '#16a085'}}>{e.First_Name}</span> ?</Modal.Body>
                <Modal.Footer>
                    <button className='bttn' onClick={Continue}>
                       Yes I Want 
                    </button>
                </Modal.Footer>
            </Modal>
           {
            ContwithName ? <> 
           
            <input type="text" placeholder="your name" className="box"  value={e.First_Name + ' ' + e.Last_Name}/>
            <input type="number" placeholder="your number" className="box" value={e.Number_Phone}/>
            <input type="email" placeholder="your email" className="box" value={e.Email}/></> :<> <input type="text" placeholder="your name" className="box" onClick={handleShow} />
            <input type="number" placeholder="your number" className="box" />
            <input type="email" placeholder="your email" className="box" /></>
           }
           <input type="datetime-local" className="box" value={Date().today}/>
           <button type='button' className="ExBtn mt-4" >book now</button>
         </form>

       </div>

     </section>

     <Footer />
   </> : ''
    )
  }
  </>
  )
}

export default Book