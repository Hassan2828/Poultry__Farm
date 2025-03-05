import React from 'react'
import './SingleProduct.css'
import { useParams } from 'react-router-dom'
import RoosterCard from '../Rooster/RoosterCard';

const SingleProduct = () => {
    const {id} = useParams();
    const Rooster = RoosterCard.find((Rooster) => Rooster.id === parseInt(id));
    const colors = ["red", "purple","teal","green","black"];
    const sizes = ["xs","s","m","l","xl"];

  return (
    <>
    <div className='singleProduct-container'>
        <div className="singleProduct-wrapper">
            <div className="singleProduct-imageSection">
                <img src={Rooster.imageSrc} alt="" className='singleProduct-image' />
            </div>
            <div className="singleProduct-infoSection">
                <h2 className="singleProduct-title">
                    {Rooster.title}
                </h2>
                <p className="singleProduct-number">
                    {Rooster.price}
                </p>
                <h4 className="description-title">Description</h4>
                <p className="singleProduct-description">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia praesentium ipsum nobis ex laborum assumenda mollitia voluptatibus officia dolore voluptatum aliquid, reprehenderit libero quidem natus eveniet in excepturi eius sit?
                </p>
                <div className="singleProduct-options">
                    <div className="colors-section">
                        <h4>Colors</h4>
                        <div className="colors">
                           {colors.map((color) =>(
            <div style={{backgroundColor : color}} className="color-circle" key={color}>
            </div>
            ))}
                        </div>
                    </div>
                    <div className="size-section">
                        <h4>Size</h4>
                        <div className="sizes">
                       {sizes.map((size) =>(
                        <span key={size}>{size}</span>
                       ))}
                        </div>
                    </div>
                </div>
            <div className="addToCart">
                <button>Add to Cart</button>
            </div>
            </div>
        </div>
    </div>
   </>
  )
}

export default SingleProduct