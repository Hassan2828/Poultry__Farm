import React, { useEffect, useState } from 'react';
import './ChickCard.css'; 
import { useDispatch, useSelector } from 'react-redux';
import { addToCart ,increaseQuantity, decreaseQuantity } from '../../redux/slice';

  const ChickCard = (dataObj) => {
    const cart = useSelector((state) => state.cart.cart);
    const [isAdded, setIsAdded] = useState(false);

    const dispatch = useDispatch();
     const sendData = () =>{
            console.log("dispatching add to cart");
            dispatch(addToCart({
                id : dataObj.id, 
                title : dataObj.title,
                description : dataObj.description,
                imageSrc : dataObj.imageSrc,
                quantity : 1,
                price :dataObj.originalPrice
            }));
        setIsAdded(true);
    };  
    useEffect(() =>{
    cart.length > 0 && cart.some((item) => item.id === dataObj.id)
    ? setIsAdded(true) : setIsAdded(false)
    },[cart]);

   return (
    <div className="chick-card">
      <img 
      src={dataObj.imageSrc} alt="nskd" className="chick-image" />
            <div className="chick-content">
                <h3 className="chick-name">{dataObj.title}</h3>
                <p className="chick-description">{dataObj.description}</p>
                <div className="units-info">
            <div className='chick-piece'>{dataObj.originalPrice}</div> 
            <div className='chick-weight'>{dataObj.weight}</div>
            </div>
            <div className="Ages">
                    <div className="chicks-age">Age : {dataObj.Ages}
                   </div>
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
                            <span>
                                {cart.length > 0 && cart.some((item) => item.id === dataObj.id)
                                ? cart.find((item) => item.id === dataObj.id).quantity : 0}
                            </span>
                        <button onClick={() => dispatch(increaseQuantity(dataObj))}>+</button>
                    </div>
                 )}
        </div>
    );
};
export default ChickCard;
