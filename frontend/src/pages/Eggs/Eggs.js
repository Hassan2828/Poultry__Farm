import React from 'react'
import EggCard from './EggCard.js'
import { useSelector } from 'react-redux'
import { getData } from '../../redux/eggslice.js'

const Eggs = () => {
  const data = useSelector(getData);
  return <EggCard items={data} />
}

export default Eggs