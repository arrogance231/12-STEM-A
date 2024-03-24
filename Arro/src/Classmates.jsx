import React from 'react'
import {Card,Card1,Card2,Card3,Card4,Card5,Card6,Card7,Card8} from './classmates/card.jsx'
import './classmates/card.css'
import Nav from './components/Nav.jsx'

const Classmates = () => {
  return (
    <div className='flex relative'>
      <Nav/>
      <div className='mt-[200px] mx-10 justify-between columns-5'>
      <Card/>
      <Card1/>
      <Card2/>
      <Card3/>
      <Card4/>
      <Card5/>
      <Card6/>
      <Card7/>
      <Card8/>
      </div>
    </div>
  )
}

export default Classmates
