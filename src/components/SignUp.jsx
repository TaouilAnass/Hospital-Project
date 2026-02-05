import React, { useRef, useState, useEffect } from 'react'
import './Style.css'
import Logo from './logo.png'
import { IconGenderFemme, IconGenderMale, IconLocation, IconLock, IconMail, IconPhone, IconPhoto, IconUser, IconUserCheck } from '@tabler/icons-react'
import { useDispatch, useSelector } from 'react-redux'
import { AddUsers } from '../Redux/UsersAray'
import Modal from 'react-bootstrap/Modal';
import { useNavigate } from 'react-router-dom'

export default function SignUp() {
    const img = '/image/user.png'
    // UseNavigate 
    const nav = useNavigate()
    // useSelctore to know if u have an account
    const Users = useSelector((state) => state.Users)
    console.log(Users)
    // Error info 
    const [alert_Err_info, setAlert] = useState(false)
    const [isExists, setExists] = useState(false)
    // condition info 
    const [show, setShow] = useState(false);
    const [SignUp_Good, setSignUp] = useState(false)
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const [Agree, setAgree] = useState(false)
    // change Sexe 
    const [sexe, setSexe] = useState('')
    // Add User Ref info 
    const First_name_Ref = useRef()
    const Last_name_Ref = useRef()
    const Username_Ref = useRef()
    const Age_Ref = useRef()
    const Email_Ref = useRef()
    const City_Ref = useRef()
    const Number_Phone_ref = useRef()
    const Sexe_Ref = useRef()
    const Password_Ref = useRef()
    // UseDispatch for add
    const dispatch = useDispatch()
    // Function Add User To redux by UseDispatch
    const AddUserFunction = (e) => {
        e.preventDefault();
        const Inputs_Ref = {
            First_Name: First_name_Ref.current.value,
            Last_Name: Last_name_Ref.current.value,
            Username: Username_Ref.current.value,
            Age: Age_Ref.current.value,
            Email: Email_Ref.current.value,
            City: City_Ref.current.value,
            Number_Phone: Number_Phone_ref.current.value,
            Sexe: Sexe_Ref.current.value,
            Password: Password_Ref.current.value,
        };

        if (Inputs_Ref.First_Name === '' || Inputs_Ref.Last_Name === '' || Inputs_Ref.Username === '' || Inputs_Ref.Age === '' || Inputs_Ref.Email === '' || Inputs_Ref.City === '' || Inputs_Ref.Number_Phone === '' || Inputs_Ref.Sexe === '' || Inputs_Ref.Password === '') {
            setAlert(true)
        } else {
            if (Agree === false) {
                setShow(true)
            } else {
                if (Users.find((Newuser) => Newuser.Email === Inputs_Ref.Email || Newuser.Number_Phone === Inputs_Ref.Number_Phone || Newuser.Username === Inputs_Ref.Username)) {
                    setExists(true)
                } else {
                    dispatch(
                        AddUsers({ id: Users.length + 1, First_name: Inputs_Ref.First_Name, Last_Name: Inputs_Ref.Last_Name, Username: Inputs_Ref.Username, Email: Inputs_Ref.Email, Age: Inputs_Ref.Age, City: Inputs_Ref.City, Sexe: Inputs_Ref.Sexe, Number_Phone: Inputs_Ref.Number_Phone, Password: Inputs_Ref.Password, Avater: img })
                    )
                    setSignUp(true)
                }
            }
        }

    }


    const I_Agree = () => {
        setAgree(true)
        setShow(false)
    }


    return (
        <div id='prent' >
            <div className="login-card-container">
                <div className="login-card mt-5">
                    <div className="login-card-logo">
                        <img src={Logo} alt="logo" />
                    </div>
                    <div className="login-card-header">
                        <h1>Sign Up</h1>
                        <div>Please create account to use the platform</div>
                    </div>
                    <div className='d-flex justify-content-center' style={{ position: 'relative', left: '20px', width: '35rem' }}>
                        {
                            alert_Err_info ? <div className="alert alert-danger w-100 ">
                                <span className='fs-4 mx-3'>Please Enter Full inforamtion !</span>
                            </div> : ''
                        }
                        {
                            isExists ? <div className="alert alert-danger w-100 ">
                                <span className='fs-4 mx-3'>The user already exists !</span>
                            </div> : ''
                        }
                    </div>
                    <form className="login-card-form">
                        {
                            SignUp_Good ? <img src="/image/good.png" alt="122" /> :
                                <>
                                    <div className='d-flex'>
                                        <div className="form-item me-3">
                                            <span className="form-item-icon material-symbols-rounded"><IconUser /></span>
                                            {/* input1 */}
                                            <input type="text" placeholder="Enter First Name" ref={First_name_Ref} />
                                        </div>
                                        <div className="form-item">
                                            <span className="form-item-icon material-symbols-rounded"><IconUser /></span>
                                            {/* input2 */}
                                            <input type="text" placeholder="Enter Last Name" ref={Last_name_Ref} />
                                        </div>
                                    </div>
                                    <div className="form-item">
                                        <span className="form-item-icon material-symbols-rounded"><IconUser /></span>
                                        {/* input3 */}
                                        <input type="text" placeholder="Enter Username" ref={Username_Ref} />
                                    </div>
                                    <div className="form-item">
                                        <span className="form-item-icon material-symbols-rounded"><IconMail /></span>
                                        {/* input4 */}
                                        <input type="text" placeholder="Enter Email" ref={Email_Ref} />
                                    </div>
                                    <div className="form-item">
                                        <span className="form-item-icon material-symbols-rounded"><IconUserCheck /></span>
                                        {/* input5 */}
                                        <input type="text" placeholder="Enter Age" ref={Age_Ref} />
                                    </div>
                                    <div className="form-item">
                                        <span className="form-item-icon material-symbols-rounded"><IconPhone /></span>
                                        {/* input6 */}
                                        <input type="text" placeholder="Enter Number Phone" ref={Number_Phone_ref} />
                                    </div>
                                    <main className='d-flex justify-content-between' >
                                        <div className="form-item mx-3" style={{ width: '18rem' }}>
                                            {
                                                sexe === '' ? <span className="form-item-icon material-symbols-rounded"><IconGenderMale /><IconGenderFemme /></span> :
                                                    <>
                                                        {
                                                            sexe === 'Male' ? <span className="form-item-icon material-symbols-rounded"><IconGenderMale /></span> : <>{
                                                                sexe === 'Famale' ? '' : <span className="form-item-icon material-symbols-rounded"><IconGenderFemme /></span>
                                                            }</>
                                                        }
                                                    </>
                                            }
                                            <select className='text-center' onChange={(e) => setSexe(e.target.value)} ref={Sexe_Ref}>
                                                <option value="">Enter Sexe : </option>
                                                <option value="Male">Male</option>
                                                <option value="Female">Female</option>
                                            </select>
                                        </div>
                                        <div className="form-item" style={{ width: '16rem' }}>
                                            <span className="form-item-icon material-symbols-rounded"><IconLocation /></span>
                                            {/* input7 */}
                                            <input type="text" placeholder="Enter City" ref={City_Ref} />
                                        </div>
                                    </main>
                                    <div className="form-item">
                                        <span className="form-item-icon material-symbols-rounded"><IconLock /></span>
                                        {/* input8 */}
                                        <input type="password" placeholder="Enter Password" ref={Password_Ref} />
                                    </div>
                                    <div className="form-item-other">
                                        <div className="checkbox">
                                            <input type="checkbox" id="chek" checked={Agree} />
                                            <label htmlFor="chek">I read and agree to <a href='#!' onClick={handleShow}>(Trems & Conditions)</a> </label>
                                        </div>
                                    </div>
                                    <Modal show={show} onHide={handleClose}>
                                        <Modal.Header closeButton>
                                            <Modal.Title className='fs-2'>Trems & Conditions</Modal.Title>
                                        </Modal.Header>
                                        <Modal.Body>
                                            <p className='fs-4 '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt voluptatum exercitationem fugiat quod adipisci vel deleniti harum ex reiciendis mollitia sed necessitatibus ullam, corrupti neque minus aut praesentium id labore?</p>
                                            <input type="checkbox" id='Q1' className='btn btn-primary' />
                                            <label htmlFor="Q1" className='fs-4 mx-3'>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</label>
                                        </Modal.Body>
                                        <Modal.Footer>
                                            <button className="bttn" onClick={I_Agree}>
                                                I Agree
                                            </button>
                                        </Modal.Footer>
                                    </Modal>
                                </>
                        }

                        <button type="button" onClick={AddUserFunction}>Create Account</button>
                    </form>
                    <div className="login-card-footer">
                        <span style={{ fontSize: '14px' }}>Remember Me</span> <a href="#" onClick={() => nav('/Login')}>I have an account</a>
                    </div>
                </div>
                <div className="login-card-social">
                    <div>Other Sign-Up Options</div>
                    <div className="login-card-social-btns">
                        <a href="#">
                            <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-brand-facebook"
                                width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none"
                                strokeLinecap="round" strokeLinejoin="round">
                                <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                                <path d="M7 10v4h3v7h4v-7h3l1 -4h-4v-2a1 1 0 0 1 1 -1h3v-4h-3a5 5 0 0 0 -5 5v2h-3"></path>
                            </svg>
                        </a>
                        <a href="#">
                            <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-brand-google" width={24}
                                height="24" viewBox="0 0 24 24" strokeWidth="3" stroke="currentColor" fill="none"
                                strokeLinecap="round" strokeLinejoin="round">
                                <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                                <path d="M17.788 5.108a9 9 0 1 0 3.212 6.892h-8"></path>
                            </svg>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}
