import React, { useEffect, useState } from 'react';
import './Header1.css';
import { NavLink } from 'react-router-dom';
import { FaLocationDot } from "react-icons/fa6";
import { IoSearchOutline } from "react-icons/io5";
import { IoCartOutline } from "react-icons/io5";
import { FaRegUserCircle } from "react-icons/fa";
import logored from '../../assets/header_logo/Poultry.png';
import { useSelector } from 'react-redux';

const Header = () => {
  const [currentAddress, setCurrentAddress] = useState("no address");
  const [Position,SetPosition] = useState({latitude: 0, longitude : 0});
  
  useEffect(()=>{
  if(navigator.geolocation){
    navigator.geolocation.getCurrentPosition(
      (position) =>{
        const latitude = position.coords.latitude;
        const longitude = position.coords.longitude;
        SetPosition({latitude,longitude})
      },
      (error) =>{
         console.log(error);
      }
    )
  } else{
    console.log("Fetching error in location");
  }
  },[])

  useEffect(()=>{
   console.log("Hello location",Position);
   if(Position.latitude !== 0 ){
    getReverseAddress(Position.latitude,Position.longitude);
   }
  },[Position])

  async function getReverseAddress(latitude, longitude) {
    try {
        // Make the API request and wait for the response
        const response = await fetch(
            `https://api.opencagedata.com/geocode/v1/json?key=57fe7860d9714a13b43252a1bb07ee02&q=${latitude}%2C+${longitude}&pretty=1`

            // `https://api.opencagedata.com/geocode/v1/json?
            // key=57fe7860d9714a13b43252a1bb07ee02&
            // q=${latitude}%2C+${longitude}&pretty=1`

            // `https://api.opencagedata.com/geocode/v1/json?
            // q=${latitude}%2C+${longitude}&key=57fe7860d9714a13b43252a1bb07ee02`
        );
        
        // Parse the JSON response and wait for the result
        
        const data = await response.json();

        // Check if the response contains results
        if (data.results && data.results.length > 0) {
            // Extract the formatted address from the first result
            const locationData = data.results[0].formatted;

            // Split the address into parts
            const addressParts = locationData.split(',');

            // Extract the relevant parts (locality, state, and country)
            // Assuming the format is: "unnamed road, Kapāli, - 832110, Jharkhand, India"
            const locality = addressParts[1]?.trim(); // Kapāli
            const state = addressParts[3]?.trim(); // Jharkhand
            const country = addressParts[4]?.trim(); // India

            // Combine the parts into the desired format
            const shortAddress = `${locality}, ${state}, ${country}`;

            // Set the shortened address in the state
            setCurrentAddress(shortAddress);
            return shortAddress; // Return the formatted address
        } else {
            console.log("No results found");
            return null;
        }
    } catch (error) {
        // Handle any errors that occur during the fetch or parsing
        console.error("Error fetching reverse address:", error);
        return null;
    }
}
  const cart = useSelector((state) => state.cart.cart)
  const total = cart.length
  return (
    <>
     <div className="header-container">
      <div className="navbar">
        <div className="nav">
        <section className='logo d-none' >
          <img src={logored} alt="logo" />
        </section>

        <div className="location-button">
          <div className="icon">
          <FaLocationDot className='icon'/>
          </div>
        <div className="address">
            <section className='address-store'>
              Address
            </section>
            <section className='address-name'>
              <p>{currentAddress}</p>
            </section>
          </div>
        </div>
        
      </div>

       <div className="secondary">
       <div className="search-box d-none">
            <IoSearchOutline color='black' />
          <input className='inputfield d-none'  type="text" placeholder='Search' name='search' />
        </div>
      
      <div className="login-register d-none">
      <div className='rightside d-none'>

        <div className="signup">
      <NavLink to="/login" className='rightside'>
      <FaRegUserCircle className='icons' />
      <span  className='text'> Login</span></NavLink>
        </div>

      <div className="cart d-none">
     <NavLink to='/carts' className='rightside d-none'>
     <IoCartOutline className='icons' />
     <span className='text'>Cart</span>
     {total > 0 && <span className='cart-badge'>{total}</span>}
     </NavLink>
      </div>

      </div>
     </div>
       </div>
      </div>
     </div>
    </>
  );
};

export default Header