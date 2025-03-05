import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { addToCart, increaseQuantity,decreaseQuantity } from '../../redux/slice';
import './EggCard.css'

const EggCard = ({items}) => {
    const cart = useSelector((state) => state.cart.cart);

const dispatch = useDispatch();

  const [isAdded, setIsAdded] = useState(0);
  const sendData = () =>{
         console.log("dispatching add to cart");
         dispatch(addToCart({
             id : items.id, 
             title : items.title,
             description : items.description,
             imageSrc : items.imageSrc,
             price :items.originalPrice
         }));
         setIsAdded(true);
     }  
  return(
    <div className="egg-container">
    <div className="card-box">
    {items.map((item) =>(
        <div key={item.id} className='egg-card'>
    <img src={item.imageSrc} alt="image" className="card-image" />
    <div className="content">
        <h3 className="name">{item.title}</h3>
        <p className="description">{item.description}</p>
        <div className="price-row">
        <br />
            <span className='mrp'>MRP : </span>
            <span className='weight'>{item.discountedPrice}</span>
        </div>
    </div>
    {!isAdded ?(
                 <section className='addtocart-section'>
                 <button onClick={sendData} className="add-to-cart-button-1">
               <div className='add'>Add</div>
               <div className='add'>+</div>
                 </button>
                 </section>
                   ) : (
            <div className="egg-quantity">
<button onClick={() => dispatch(decreaseQuantity(items))}>-</button> 
        <span>
        {cart.length > 0 && cart.some((item) => item.id === items.id)
        ? cart.find((item) => item.id === items.id).quantity : 0}
    </span>
<button onClick={() => dispatch(increaseQuantity(items))}>+</button>
        </div>
       )}
    </div>
    ))}
    </div>
    </div>
   )
 }

export default EggCard