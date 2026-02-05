import React, { useRef, useState }  from 'react'
import './Style.css'
import Logo from './logo.png'
import { IconLock, IconMail, IconUser } from '@tabler/icons-react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

export default function Login() {
const Users = useSelector((state) => state.Users);
const nav = useNavigate();
const navigator = useNavigate();
const [Username_User , setUsername] = useState('');
const [Pass_User , setPass] = useState('');
const [Errs , setErrs] = useState(false);
const [EmailEmpty , setEmailEmpty] = useState(false);
const [PassEmpty , setPassEmpty] = useState(false);



const SignIn=()=>{
   if(Username_User === '' ){
    setEmailEmpty(true)
   }if(Pass_User === ''){
    setPassEmpty(true)
   }else{
    if (Users.find((user) => user.Username === Username_User && user.Password === Pass_User)) {
        nav(`/HomeLogin/${Username_User}`)
        setEmailEmpty(false)
        setPassEmpty(false)
     } else {
         setErrs(true)
     }
   }
}
    return (
        <div id='prent'>
            <div className="login-card-container">
                <div className="login-card">
                    <div className="login-card-logo">
                        <img src={Logo} alt="logo" />
                    </div>
                    <div className="login-card-header">
                        <h1>Sign In</h1>
                        <div>Please login to use the platform</div>
                    </div>
                  {
                    Errs ?   <div className='mx-5' style={{width: '30rem'}}>
                    <p className='alert alert-danger fs-4'>Sorry ! User Not Found <a href="#" className="alert-link">Create Account</a></p> 
              </div>: ''
                  }
                    <form className="login-card-form needs-validation">
                        <div className="form-item">
                            <span className="form-item-icon material-symbols-rounded"><IconUser /></span>
                            {
                                EmailEmpty ? 
                                <><input type="text" placeholder="Enter Username" className='is-invalid'  onChange={(e)=> setUsername(e.target.value) }/><p className="invalid-tooltip mx-5 fs-5 mb-5">
                                Please ! Enter Username.
                              </p></>:<input type="text" placeholder="Enter Username"  onChange={(e)=> setUsername(e.target.value) }/> 
                            }
                        </div>
                        <div className="form-item mt-4">
                            <span className="form-item-icon material-symbols-rounded"><IconLock /></span>
                            {
                               PassEmpty ? 
                                <> <input type="password" placeholder="Enter Password"  className='is-invalid' onChange={(e)=> setPass(e.target.value) }/><p className="invalid-tooltip mx-5 fs-5 mb-5">
                                Please ! Enter Password.
                              </p></> :
                              <input type="password" placeholder="Enter Password"   onChange={(e)=> setPass(e.target.value) }/>
                            }
                        </div>
                        <div className="form-item-other mt-4">
                            <div className="checkbox">
                                <input type="checkbox" id="rememberMeCheckbox" />
                                <label htmlFor="rememberMeCheckbox">Remember me</label>
                            </div>
                            <a href="#">I forgot my password!</a>
                        </div>
                        <button type='button' onClick={SignIn}>Sign In</button>
                    </form>
                    <div className="login-card-footer">
                        <span style={{ fontSize: '14px' }}>Don't have an account?</span> <a href="#" onClick={() => navigator('/SignUp')}>Create a free account.</a>
                    </div>
                </div>
                <div className="login-card-social">
                    <div>Other Sign-In Options</div>
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
