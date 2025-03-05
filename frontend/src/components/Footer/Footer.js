import React from 'react';
import './Footer.css';
import { FaPinterest, FaFacebook, FaPhone } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import poultrylogo from '../../assets/header_logo/Poultry_Farm_Final1.png'
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagramSquare } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";


const Footer = () => {
  return (
    <div className="footer_area">
      <div className="box">
        <div className="row">
          <div className="col1">
            <div className="footer_logo">
              <a href="#"><img src={poultrylogo} alt="Logo" /></a>
            </div>
            <p className="footer_desc">
              KADAKNATH, ASEEL CROSS, TURKEY CHICKS, GUINEA FOWL, ASEEL PERUVEDAI, SONALI CHICKS, GIRIRAJA, GRAMAPRIYA, RUNNER CHICKS....
            </p>
          </div>

          <div className="col2">
            <div className="footer-content">
              <div className="footer-title">
                <h3>Contact Info</h3>
              </div>
              <div className="footer_contact">
                <div className="contact-icon"><FaLocationDot /></div>
                <div className="contact-text">15A, M/S Complex, 2nd Floor, Aambagan, Sakchi, Jamshedpur- 831001</div>
              </div>
              <div className="footer_contact">
                <div className="contact-icon"><FaPhone /></div>
                <div className="contact-text">+91 9142015149</div>
              </div>
              <div className="footer_contact">
                <div className="contact-icon"><MdEmail /></div>
                <div className="contact-text">professora498@gmail.com</div>
              </div>
              <div className="social-icons">
                <ul>
          <li className='social-icons-size' ><a href="#" className='social-icons-size '><FaXTwitter /></a></li>
                  <li><a href="#"><FaPinterest /></a></li>
                  <li><a href="#"><FaFacebook /></a></li>
                  <li><a href="#"><FaInstagramSquare /></a></li>
                </ul>
              </div>
            </div>
          </div>

          <div className="col3">
            <div className="footer-content">
              <div className="footer-title">
                <h4>Links</h4>
              </div>
              <div className="footer-menu">
                <ul>
                  <li><a href="#">About Us</a></li>
                  <li><a href="#">Services</a></li>
                  <li><a href="#">Contact Us</a></li>
                  <li><a href="#">Blog</a></li>
                </ul>
              </div>
            </div>
          </div>

          <div className="col4">
            <div className="footer-contact">
              <div className="footer-title">
                <h4>Working Time</h4>
              </div>
              <div className="footer_contact">
                <p>Mon - Fri: 9.00am - 5.00pm</p>
                <p>Saturday: 10.00am - 6.00pm</p>
                <p>Sunday Closed</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="tiny-footer">
        <div className="footer-container">
          <div className="footer-row">
            <div className="footer-col">
              <p>©Copyright 2025 All Rights Reserved | Designed by <a href="http://www.globuslabs.com/" target='_blank' className='copyrightlink'>Hassan Raza Ansari</a></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;