import React, { useEffect, useState } from "react";
import "./RoosterCard.css";
import { useDispatch, useSelector } from "react-redux";
import {
  addToCart,
  decreaseQuantity,
  increaseQuantity,
} from "../../redux/slice";
import { useNavigate } from "react-router-dom";

const RoosterCard = (dataObj) => {
  const cart = useSelector((state) => state.cart.cart);
  const [isAdded, setIsAdded] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleViewDetails = (id) => {
    navigate(`/product/${id}`);
  };
  
  const sendData = () => {
    console.log("dispatching add to cart");
    dispatch(
      addToCart({
        id: dataObj.id,
        title: dataObj.title,
        description: dataObj.description,
        imageSrc: dataObj.imageSrc,
        quantity: 1,
        price : dataObj.originalPrice
      }));
    console.log("xyz", dataObj.id);
    setIsAdded(true);
  };

  useEffect(() => {
  cart.length > 0 && cart.some((item) => item.id === dataObj.id)
  ? setIsAdded(true) : setIsAdded(false)
  }, [cart]);

  return (
  <div className="card">
  <img
    src={dataObj.imageSrc}
    onClick={() => handleViewDetails(dataObj.id)}
    alt="Galleries"
    className="card-image"
      />
      <div className="content" onClick={() => handleViewDetails(dataObj.id)}>
        <h3 className="name">{dataObj.title}</h3>
        <p className="description">{dataObj.description}</p>
        <div className="units-info">
          <span className="piece">MRP : ₹<span className="MRP">{dataObj.originalPrice}</span></span>
          <span className="weight">
          {dataObj.weight}
          </span>
        </div>
        <div className="Ages">
          <div className="chicks-age">Age : {dataObj.Ages}</div>
        </div>
        <div className="Color">
        <span className="Chick-Color">Color : {dataObj.Colors}</span>
        </div>
    </div>
      {!isAdded ? (
       <section className='addtocart-section'>
       <button onClick={sendData} className="add-to-cart-button-1">
     <div className='add'>Add</div>
     <div className='add'>+</div>
       </button>
           </section>
      ) : (
        <div className="cart-quantity-1">
          <button onClick={() => dispatch(decreaseQuantity(dataObj))}>-</button>
          {/* <span>{cart.length > 0 ? cart.includes() &&  cart[dataObj.id].quantity: 0}</span> */}
          <span>
            {cart.length > 0 && cart.some((item) => item.id === dataObj.id)
              ? cart.find((item) => item.id === dataObj.id).quantity
              : 0}
          </span>
        <button onClick={() => dispatch(increaseQuantity(dataObj))}>+</button>
        </div>
      )}
    </div>
  );
};

export default RoosterCard;
