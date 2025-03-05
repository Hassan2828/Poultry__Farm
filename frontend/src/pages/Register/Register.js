import React, { useEffect, useState } from 'react';
import './Register.css';
import Chicken_Farm from  '../../assets/Chicken_Farm.jpg';
// import bg from '../../assets/bg.jpg'
import { useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { FaUser } from "react-icons/fa";
import { FaLock } from "react-icons/fa";
import { FaMobileRetro } from "react-icons/fa6";
const Register = () => {
  const [isRegister, setIsRegister] = useState(true);

  const location = useLocation();
  const navigate = useNavigate();

  const [registerdata, setRegisterdata] = useState({
    email : '',
    password : '',
    mobile : ''
  });

  const handleEmailOnType1 = (e) => {
    const email = e.target.value;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; 
    setRegisterdata({ ...registerdata, email: email });

    if (emailRegex.test(email)) {
        console.log("Valid email address");
    } else {
        console.log("Invalid email address");
    }
  };

const handlePasswordOnType1 = (e) => {
  const password = e.target.value;
  const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,}$/; 

  if (passwordRegex.test(password)) {
    setRegisterdata({ ...registerdata, password: password });
      console.log("Valid password");
  } else {
      console.log("Invalid password");
  }
};

  const handleMobileOnType = (e) => {
    const mobile = e.target.value;
    const mobileRegex = /^\+?[1-9]\d{1,14}$/; 

    if (mobileRegex.test(mobile)) {
      setRegisterdata({ ...registerdata, mobile: mobile });
        console.log("Valid mobile number");
    } else {
        console.log("Invalid mobile number");
    }
  };

   const handleRegister = () => {
    axios.post(`http://localhost:8000/register`, registerdata)
    .then(res => console.log(res))
    console.log(registerdata);
  }

  useEffect(() =>{
    if(location.pathname.toLowerCase() == '/register'){
      setIsRegister(true);
    } else
    {
      setIsRegister(false);
    }
  },[location])

  useEffect(()=>{
    localStorage.clear('user');
  },[])

  return (
    <div className='container'>
      <div className="image">
         <img src={Chicken_Farm} alt="Fresh Chicken Center" className='SliderImg' />
      </div>
      <div className="register">
        <form action="" className='form-container'>
          <h2>Registration</h2>

          <div className="input-boxes">
          <FaUser color='white' />
          <input onClick={(e)=> setRegisterdata({...registerdata, email:e.target.value})} value={registerdata.email} className='inputbox' type="text" placeholder='Email' required/>
          </div>

          <div className="input-boxes">
          <FaLock color='white' />
          <input onClick={(e)=> setRegisterdata({...registerdata, password:e.target.value})} value={registerdata.password} className='inputbox'  type="password" placeholder='Password*'  required />
          </div>

          <div className="input-boxes">
          <FaMobileRetro color='white' />
          <input onChange={(e)=> setRegisterdata({...registerdata, mobile:e.target.value})} value={registerdata.mobile} className='inputbox' type="number" placeholder='Phone Number*' required/>
          </div>

          <div className="remember-forgot">
        <label className='custom-checkbox'><input type="checkbox" /><span></span>Remember me</label>
          </div>

          <button onClick={handleRegister} type='submit' className='submit'>Register</button>

          <div className="register-link">
            <p>Already have an account? <a href="#" onClick={()=> navigate('/login')}>Login</a></p>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Register