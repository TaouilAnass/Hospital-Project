import React, { useState } from 'react'
import Modal from 'react-bootstrap/Modal';
import { useNavigate } from 'react-router-dom';


export default function Header() {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const nav = useNavigate()
    return (
        <header className="header">

            <a href='#home' className="logo"> <i className="bi bi-heart-pulse-fill"></i> Echo Health.</a>

            <button className='ExBtn' onClick={handleShow}>
                Make An Appointment
            </button>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title><a href='#!' className="text-decoration-none fs-3 text-dark"  > <i className="bi bi-heart-pulse-fill" style={{color: '#16a085'}}></i> Echo Health.</a></Modal.Title>
                </Modal.Header>
                <Modal.Body className='fs-2 text-center'>Please login to use the platform !</Modal.Body>
                <Modal.Footer>
                    <button className='bttn' onClick={() => nav("/SignUp")}>
                       Sign Up 
                    </button>
                </Modal.Footer>
            </Modal>
        </header>
    )
}
