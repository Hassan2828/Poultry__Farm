import React, { useEffect } from 'react'
import './Poultry.css';
import PoultryCard from './PoultryCard.js'
import { useSelector } from "react-redux";
import { selectProducts } from "../../redux/poultrySlice.js";

const Poultry = () => {
    const products = useSelector(selectProducts);
    useEffect(() => {
      console.log("mnmnmn", products);
    }, [products]);

  return (
    <div className="gallery1">
    {products.map((item, index) => (
      <PoultryCard
         index = {index}
        id={item.id}
        imageSrc={item.imageSrc}
        title={item.title}
        description={item.description}
        originalPrice={item.price}
        weight={item.weight}
        weightImage = {item.weightImage}
        Ages={item.age}
        Colors={item.color}
      />
    ))}
  </div>
  )
}

export default Poultry