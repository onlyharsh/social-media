import React, { useState } from 'react';
import './Auth.css';
import Logo from '../../img/Logo_of_Twitter.png';

import { useDispatch, useSelector } from "react-redux";
import { logIn, signUp } from '../../actions/AuthActions';
import { useNavigate } from 'react-router-dom';

const Auth = () => {
  const initialState = {
    firstname: "",
    lastname: "",
    username: "",
    password: "",
    confirmpassword: "",
  };
  const loading = useSelector((state) => state.authReducer.loading);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [isSignUp, setIsSignUp] = useState(false);

  const [data, setData] = useState(initialState);

  const [confirmPass, setConfirmPass] = useState(true);


  // Reset Form
  const resetForm = () => {
    setData(initialState);
    setConfirmPass(confirmPass);
  };

  // handle Change in input
  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  // // Form Submission
  const handleSubmit = (e) => {
    setConfirmPass(true);
    e.preventDefault();
    if (isSignUp) {
      data.password === data.confirmpassword
        ? dispatch(signUp(data))
        : setConfirmPass(false);
       // setIsSignUp(false);
    } else {
      dispatch(logIn(data, navigate));
    }
  };

  return (
    <div className="Auth">
      <div className="auth-left">
        <img src={Logo} alt="" />
        <div className="webname">
          <h1>Zwitter<sup>+</sup></h1>
          <h6>Explore the ideas throughout the world</h6>
        </div>
      </div>

      <div className="auth-right">
        <form className='infoForm authForm' onSubmit={handleSubmit}>
          <h3>{isSignUp ? "Sign up" : "Log in"}</h3>

          {isSignUp && (
            <div>
              <input type="text" placeholder='First Name' className='infoInput' name='firstname' onChange={handleChange} value={data.firstname} />
              <input type="text" placeholder='Last Name' className='infoInput' name='lastname' onChange={handleChange} value={data.lastname} />
            </div>
          )}

          <div>
            <input type="text" placeholder='Username' className='infoInput' name='username' onChange={handleChange} value={data.username} />
          </div>

          <div>
            <input type="password" placeholder='Password' className='infoInput' name='password' onChange={handleChange} value={data.password} />

            {isSignUp &&
              <input type="password" placeholder='Confirm Password' className='infoInput' name='confirmpassword' onChange={handleChange} value={data.confirmpassword} />
            }
          </div>

          <span style={{ display: confirmPass ? "none" : "block", fontSize: '12px', color: 'red', alignSelf: 'flex-end', marginRight: '5px' }}>
            *password not matched
          </span>

          {isSignUp ? (
            <div>
              <span style={{ fontSize: '13px' }}>Already have an account? <u onClick={() => { setIsSignUp(false); resetForm() }} style={{ cursor: 'pointer' }}>Log in</u></span>
            </div>
          ) : (
            <div>
              <span style={{ fontSize: '13px' }}>Don't have an account? <u onClick={() => { setIsSignUp(true); resetForm() }} style={{ cursor: 'pointer' }}>Create account</u></span>
            </div>
          )}

          <button className='button sign-button' type='submit' onClick={(e)=>handleSubmit}>{isSignUp ? "Sign up" : "Log in"}</button>
        </form>
      </div>
    </div>
  );
};

export default Auth;



