import React, { useEffect } from "react";
import "./Cart.css";
import { useDispatch, useSelector } from "react-redux";
import { BiShoppingBag } from "react-icons/bi";
import {increaseQuantity,decreaseQuantity,removeFromCart } from '../../redux/slice';
import { IoClose } from "react-icons/io5";
import { useState } from "react";

const Cart = () => {
  const [isAdded, setIsAdded] = useState(false);
  const cart = useSelector((state) => state.cart.cart);

  const dispatch = useDispatch();
  const total = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);

  useEffect(()=>{
    console.log("abc",cart);
  },[cart])
  return (
    <div>
      <div className="cart-container">
        <div className="cart-title-container">
          <BiShoppingBag className="cart-icon" />
          <h2 className="cart-title">Shopping Cart</h2>
        </div>
        
        {cart.length === 0 ? (
          <p>Your cart is empty, Go ahead and add something to the cart</p>
        ) : (
          <>
            <div className="cart-content">
              <div className="cart-items-section">
                <div className="cart-header">
                  <div className="header-item">Product</div>
                  <div className="header-item">Price</div>
                  <div className="header-item">Quantity</div>
                  <div className="header-item">Total</div>
                </div>

                {cart.map((item, index) => (
              <div key={index} className="cart-item">
              <div className="cart-product">
              <img src={item.imageSrc} alt=""  className="cart-product-image" />
              <p>{item.title}</p>
              </div>

              <div className="cart-price">${item.price}</div>

                    <div className="cart-quantity">

                      <button onClick={() => dispatch(decreaseQuantity(item))}>
                        -
                      </button>

                      <span>{item.quantity}</span>

                      <button onClick={() => dispatch(increaseQuantity(item))}>
                        +
                      </button>
                      </div>

                    <div className="cart-total">
                      ${parseFloat(item.price * item.quantity).toFixed(2)}
                    </div>

                    <button
                      className="remove-btn"
                      onClick={() => dispatch(removeFromCart(item.id))}>
                      <IoClose size={20} />
                    </button>

                  </div>
                ))}
              </div>
              <div className="cart-summary">
                <h3 className="summary-title">Order Summary</h3>
                <div className="summary-details">
                  <div className="summary-item">
                    <span>Price:</span>
                    <span>${total.toFixed(2)}</span>
                  </div>
                  <div className="summary-item">
                    <span>Delivery:</span>
                    <span>Free</span>
                  </div>
                  <div className="summary-item">
                    <span>Total:</span>
                    <span>${total.toFixed(2)}</span>
                  </div>
                </div>
                <button className="checkout-btn">Proceed to Checkout</button>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};
export default Cart;
