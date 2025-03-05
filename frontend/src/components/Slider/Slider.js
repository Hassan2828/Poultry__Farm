import React, { useEffect, useRef, useState } from 'react';
import './Slider.css';
import { FaCircleArrowRight } from "react-icons/fa6";
import { FaCircleArrowLeft } from "react-icons/fa6";
import { useNavigate } from 'react-router-dom';

const Slider = ({ images }) => {
    const slides = [
        { src: 'image1.jpg', buttonColor: 'red', path: '/about' },
        { src: 'image2.jpg', buttonColor: 'blue', path: '/contact' },
        { src: 'image3.jpg', buttonColor: 'green', path: '/eggs' }
    ];
    const [next, setNext] = useState(0);
    const ref = useRef(null);
    const navigate = useNavigate();

    const handleNext = () => {
        setNext((previousValue) => {
            if (previousValue === images.length - 1) {
                return 0;
            }
            return previousValue + 1;
        });
    };

    const handlePre = () => {
        setNext((previousValue) => {
            if (previousValue === 0) {
                return images.length - 1;
            } else {
                return previousValue - 1;
            }
        });
    };

 
    useEffect(() => {
        ref.current = setInterval(handleNext, 3000); // Change to 3000ms for better visibility
        return () => {
            clearInterval(ref.current);
        };
    }, []);

    return (
        <div className='sliders'>
        <div
            className="container-slider"
            onMouseEnter={() => clearInterval(ref.current)}
            onMouseLeave={() => (ref.current = setInterval(handleNext, 3000))}>
            <img src={images[next]}  alt={`Slide ${next + 1}`} />
              {/* Button overlay */}
              <button
                    className="overlay-button"
                    style={{ backgroundColor: slides[next].buttonColor }}
                    onClick={() => navigate(slides[next].path)} // Navigate to the slide's specific path
              >
                    Go to Page
                </button>
        </div>
        <div className="left-btn">
        <button onClick={handleNext}><FaCircleArrowLeft width={20} height={20}  color='#E61A4B' fontSize={30}/></button>
        </div>

        <div className="right-btn">
        <button onClick={handleNext}><FaCircleArrowRight fontSize={30} color='#E61A4B' /></button>
        </div>
     </div>
    );
};

export default Slider;
