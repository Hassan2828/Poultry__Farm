import React, { useState, useCallback, useRef, useEffect } from 'react';
import './CategorySlider.css';
import category1 from '../../assets/category1.png';
import category2 from '../../assets/category2.jpg';
import category3 from '../../assets/category3.jpg';
import category4 from '../../assets/category4.jpg';
import category5 from '../../assets/category5.jpg';
import category6 from '../../assets/category6.png';
import { NavLink, useLocation } from 'react-router-dom';

const CategorySlider = () => {
    const [activeLink, setActiveLink] = useState(null);
    const underlineRef = useRef(null);
    const location = useLocation();
    const categoryRefs = useRef([]);

    useEffect(() => {
        const path = location.pathname;
        if (path === '/') setActiveLink('home');
        else if (path === '/eggs') setActiveLink('eggs');
        else if (path === '/chick') setActiveLink('chick');
        else if (path === '/poultry') setActiveLink('poultry');
        else if (path === '/rooster') setActiveLink('rooster');
        else if (path === '/cock') setActiveLink('cock');
        else setActiveLink(null);
    }, [location]);
    
    const moveUnderline = useCallback(() => {
        if (activeLink && underlineRef.current) {
            const activeIndex = getIndexFromActiveLink(activeLink);
            if (activeIndex !== null && categoryRefs.current[activeIndex]) {
                const element = categoryRefs.current[activeIndex];
                underlineRef.current.style.width = '120px';
                underlineRef.current.style.left = `${element.offsetLeft + (element.offsetWidth - 120) / 2}px`;
                underlineRef.current.style.display = 'block';
            } else {
                underlineRef.current.style.display = 'none';
            }
        }
    }, [activeLink]);

    useEffect(() => {
        moveUnderline();
    }, [moveUnderline]);

    const getIndexFromActiveLink = useCallback((link) => {
        switch (link) {
            case 'home': return 0;
            case 'eggs': return 1;
            case 'chick': return 2;
            case 'poultry': return 3;
            case 'rooster': return 4;
            case 'cock': return 5;
            default: return null;
        }
    }, []);

    const handleNavLinkClick = useCallback((link) => {
        setActiveLink(link);
    }, []);

    return (
        <div className='category-header'>
            <div className="category-content">
                <div className="slider-container">
                    <div className="swiper-container">
                        <div className="swiper-wrapper">
                            <NavLink
                                to="/"
                                style={{ textDecoration: 'none' }}
                                onClick={() => handleNavLinkClick('home')}
                            >
                                <div className="header-box">
                                <div className='header-box-3'>
                                        <img src={category1} alt="" />
                                </div>
                                    <div className='category-name' ref={(el) => (categoryRefs.current[0] = el)}>Home</div>
                                </div>
                            </NavLink>

                            <NavLink
                                to="/eggs"
                                style={{ textDecoration: 'none' }}
                                onClick={() => handleNavLinkClick('eggs')}
                            >
                                <div className="header-box">
                                    <img src={category2} alt="" />
                                    <div className='category-name' ref={(el) => (categoryRefs.current[1] = el)}>Desi Eggs</div>
                                </div>
                            </NavLink>

                        <NavLink to="/chick" style={{ textDecoration: 'none' }} onClick={() => handleNavLinkClick('chick')}>
                                <div className="header-box">
                             <div className='header-box-3'>
                                    <img src={category3} alt="" />
                             </div>
                                    <div className='category-name' ref={(el) => (categoryRefs.current[2] = el)}>Chick</div>
                                </div>
                        </NavLink>

                        <NavLink
                                to="/poultry"
                                style={{ textDecoration: 'none' }}
                                onClick={() => handleNavLinkClick('poultry')}
                        >
                                <div className="header-box">
                                    <img src={category4} alt="" className='circle-image'  />
                                    <div className='category-name' ref={(el) => (categoryRefs.current[3] = el)}>Poultry</div>
                                </div>
                        </NavLink>

                        <NavLink
                                to="/rooster"
                                style={{ textDecoration: 'none' }}
                                onClick={() => handleNavLinkClick('rooster')}
                            >
                                <div className="header-box">
                                <div className='header-box-3'>
                                    <img src={category5} alt="" />
                                </div>
                                    <div 
                                    className='category-name' ref={(el) => (categoryRefs.current[4] = el)}>Rooster</div>
                                </div>
                        </NavLink>

                        <NavLink
                                to="/cock"
                                style={{ textDecoration: 'none' }}
                                onClick={() => handleNavLinkClick('cock')}
                        >
                                <div className="header-box">
                                    <img src={category6} alt="" />
                                <div className='category-name' ref={(el) => (categoryRefs.current[5] = el)}>Cock</div>
                                </div>
                        </NavLink>
                        </div>
                    </div>
                    <div className="moving-underline" ref={underlineRef}></div>
                </div>
            </div>
        </div>
    );
};
export default CategorySlider;
