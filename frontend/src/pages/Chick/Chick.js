import React, { useEffect } from 'react'
import './ChickCard.css';

import ChickCard from './ChickCard';

import Chic from '../../assets/Chick/Chic.jpg';
import OldChick from '../../assets/Chick/OldChick.jpg';
import Chick4 from '../../assets/Chick/Chick4.png';
import ChickGang from '../../assets/Chick/ChickGang.jpg';
import Big_Chick from '../../assets/Chick/Big_Chick.png';
import chicks2 from '../../assets/Chick/chicks2.png';
import onedayoldlivesilkiechicks from '../../assets/Chick/onedayoldlivesilkiechicks.jpeg'
import sonaliChicks from '../../assets/Chick/sonaliChicks.jpeg'
import DaysOldkadaknat from '../../assets/Chick/7DaysOldkadaknat.jpg'
import { useSelector } from 'react-redux';
import { selectProducts } from '../../redux/chickslice';

const Chick = () => {
  const chick = useSelector(selectProducts);
  useEffect(() => {
    console.log("ababab", chick);
  },[chick]);
  
  return (
    <div className="gallery1">
    {chick.map((item, index) =>(
      <ChickCard
      index = {index}
      id = {item.id}
      imageSrc = {item.imageSrc}
      title = {item.title}
      description = {item.description}
      originalPrice={item.originalPrice}
      weight = {item.weight}
      Ages = {item.age}
      Colors = {item.color}
      />
    ))}
  </div>
  );
};

export default Chick