import React, { useEffect, useState } from 'react'
import './Login.css';
import banner1 from  '../../assets/login_banner/banner8.jpg';
import { FaUser } from "react-icons/fa";
import { FaLock } from "react-icons/fa";
import { useLocation,useNavigate } from 'react-router-dom';
import axios from 'axios';

const Login = () => {
  const [isLogin, setIsLogin] = useState(true);
  const location = useLocation();
  const navigate = useNavigate();

  const [formdata, setFormdata] = useState({
    email : '',
    password : '',
  })
  
  const handleEmailOnType = (e) => {
    const email = e.target.value;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // 

    setFormdata({ ...formdata, email: email });

    if (emailRegex.test(email)) {
        console.log("Valid email address");
    } else {
        console.log("Invalid email address");
    }
  };

const handlePasswordOnType = (e) => {
  const password = e.target.value;
  const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,}$/;

  if (passwordRegex.test(password)) {
      setFormdata({ ...formdata, password: password });
      console.log("Valid password");
  } else {
      console.log("Invalid password");
  }
};

    const handleLogin = () => {
      axios.post(`http://localhost:8000/login`, formdata)
      .then(
        res=>{
          if(res.data.status == 200){
            navigate("/");
            console.log(res.data.user.email);
            localStorage.setItem('user', res.data.user.email);
          }
          else
          {
            alert("error");
          }}
      )
    }
    useEffect(() =>{
      if(location.pathname.toLowerCase() == '/login'){
        setIsLogin(true);
      }else
      {
        setIsLogin(false);
      }
    },[location])      

    useEffect(()=>{
      localStorage.clear('user');
    },[])
  return (
    <div className='container'>
    <div className="image">
       <img src={banner1} alt="Fresh Chicken Center" className='SliderImg' />
    </div>
    <div className="login">
      <form action="" className='form-container'>
        <h2>Login</h2>
        <br />
       <div className="input-boxes">
        <FaUser color='white' />
        <input onChange={(e)=> setFormdata({...formdata, email:e.target.value})} value={formdata.email} className='inputbox'  type="text" placeholder='Email*' name='email' required /><br />
        <br />
       </div>

      <div className="input-boxes">
        <FaLock color='white' />
        <input onChange={(e)=> setFormdata({...formdata,password : e.target.value})} value={formdata.password} type="password"  className='inputbox' placeholder='Password*'  required /><br />
      </div>

        <div className="remember-forgot">
        <label className='custom-checkbox'><input type="checkbox" /><span></span>Remember me</label>
        <a href="#" className='forgot'><span>Forgot password?</span></a>
        </div>

        <button onClick={handleLogin} type='submit' className='submit'>Login</button>

        <div className="register-link">
          <p>Don't have an account? <a href="#" onClick={()=> navigate('/register')}>Register</a></p>
        </div>
      </form>
    </div>
  </div>  )
}
export default Login