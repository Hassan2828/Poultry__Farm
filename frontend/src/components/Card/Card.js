import React from 'react';
import './Card.css'; 

const Card = ({ imageSrc, name, description, originalPrice, discountedPrice, units, serves }) => {
    const discountPercentage = ((originalPrice - discountedPrice) / originalPrice * 100).toFixed(0);

    return (
        <div className="card">
            <img src={imageSrc} alt={name} className="card-image" />
            <div className="content">
                <h3 className="name">{name}</h3>
                <p className="description">{description}</p>
                <div className="units-info">
                    <span className='piece'>{units}</span> | 
                    <span className='serve'>{serves}</span>
                </div>
                <div className="pricing">
                    <span className="original-price">₹{originalPrice}</span>
                    <span className="discounted-price">₹{discountedPrice}</span>
                    <span className="discount-percentage">{discountPercentage}% off</span>
                </div>
                <button className="add-to-cart-button">Add to Cart</button>
            </div>
        </div>
    );
};

export default Card;
