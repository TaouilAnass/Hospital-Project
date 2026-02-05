import React, { useState } from 'react'
import { useSelector } from 'react-redux';
import { Link, NavLink, useNavigate, useParams } from 'react-router-dom'
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';


export default function Navigator(props) {
  const UserName = useParams().username
  const Users = useSelector((state) => state.Users);

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [signout, setOut] = useState(false)

  const nav = useNavigate();
  const [Email_User, setEmail] = useState('');
  const [Pass_User, setPass] = useState('');
  const [Errs, setErrs] = useState(false);
  const [EmailEmpty, setEmailEmpty] = useState(false);
  const [PassEmpty, setPassEmpty] = useState(false);


  const Sign_Out = (e) => {
    e.preventDefault();
    if (Email_User === '') {
      setEmailEmpty(true)
    } if (Pass_User === '') {
      setPassEmpty(true)
    } else {
      if (Users.find((user) => user.Email === Email_User && user.Password === Pass_User)) {
        nav('/')
        setEmailEmpty(false)
        setPassEmpty(false)
      } else {
        setErrs(true)
      }
    }
  }

  return (
    <header className="header">

      <Link to={`/HomeLogin/${UserName}`} className="logo"> <i className="bi bi-heart-pulse-fill"></i> Echo Health.</Link>

      <nav className="navbar">
        <NavLink to={`/HomeLogin/${UserName}`} className='a'>Home</NavLink>
        <NavLink to={`/Services/${UserName}`} className='a'>Services</NavLink>
        <NavLink to={`/About/${UserName}`} className='a'>About</NavLink>
        <NavLink to={`/Doctors/${UserName}`} className='a'>Doctors</NavLink>
        <NavLink to={`/Book/${UserName}`} className='a'>Book</NavLink>
        <NavLink to={`/Review/${UserName}`} className='a'>Review</NavLink>
        <NavLink to={`/Blogs/${UserName}`} className='a'>Blogs</NavLink>
      </nav>

      <>
        <Button type='button' style={{ background: 'none', border: 'none' }} onClick={handleShow}>
          {
            Users.map((e) =>
              UserName === e.Username ?
                <img src={e.Avater} alt="User" key={e.id} className='rounded-circle' height={65} style={{ background: 'none', border: '3px solid #16a085' }} /> :
                ''
            )
          }
        </Button>

        {
          Users.map((e) =>
            UserName === e.Username ?
              <Offcanvas show={show} onHide={handleClose} >
                <Offcanvas.Header closeButton>
                  <Offcanvas.Title><img src={e.Avater} alt="User" key={e.id} className='rounded-circle' height={65} style={{ background: 'none', border: '3px solid #16a085' }} /> <span className='fs-3 mx-3'> {e.First_Name + ' ' + e.Last_Name}</span>  </Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body className='text-center'>
                  {
                    Errs ? <div className='mx-5' style={{ width: '30rem' }}>
                      <p className='alert alert-danger fs-4'>Sorry ! User Not Found</p>
                    </div> : ''
                  }
                  {
                    signout ? <div className='d-flex justify-content-center'>
                      <form style={{ width: '25rem' }} className='needs-validation'>
                      {
                                EmailEmpty ? 
                                <> <input type="text" placeholder='Enter Email' onChange={(e) => setEmail(e.target.value)} className='form-control  form-control-lg mb-3 fs-3 is-invalid' /><p className="invalid-tooltip mx-5 fs-5 mb-5">
                                Please ! Enter Username.
                              </p></>: <input type="text" placeholder='Enter Email' onChange={(e) => setEmail(e.target.value)} className='form-control  form-control-lg mb-3 fs-3 border border-success' />
                            }
                               {
                               PassEmpty ? 
                                <> <input type="password" placeholder="Enter Password"  className='form-control  form-control-lg mb-3 fs-3  is-invalid' onChange={(e)=> setPass(e.target.value) }/><p className="invalid-tooltip mx-5 fs-5 mb-5">
                                Please ! Enter Password.
                              </p></> :
                              <input type="password" placeholder="Enter Password"  className='form-control  form-control-lg mb-3 fs-3 border border-success'  onChange={(e)=> setPass(e.target.value) }/>
                            }
                        <button className='bttn' onClick={Sign_Out}>Sign Out</button>
                      </form>
                    </div> : <button className='bttn' onClick={() => setOut(true)}>Sign Out</button>
                  }
                </Offcanvas.Body>
              </Offcanvas> : ''
          )
        }
      </>

    </header>
  )
}
