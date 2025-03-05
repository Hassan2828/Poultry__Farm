import React, { useEffect } from "react";
import "./Rooster.css";
import RoosterCard from "./RoosterCard";
import { useSelector } from "react-redux";
import { selectProducts } from "../../redux/rooster";

const Rooster = () => {
  const products = useSelector(selectProducts);
  useEffect(() => {
    console.log("mnmnmn", products);
  }, [products]);

  return (
    <div className="gallery1">
      {products.map((item, index) => (
        <RoosterCard
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
  );
};

export default Rooster;
