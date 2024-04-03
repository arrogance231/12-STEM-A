import React from 'react'
import Nav from './components/Nav.jsx'
import CardRow1 from './classmates/CardRow1.jsx'
import CardRow2 from './classmates/CardRow2.jsx'

const Classmates = () => {
  return (
    <div className= 'absolute w-full bg-gradient-to-r from-sexy-violet to-accent animate-text'>
      <nav className='absolute w-full'><Nav/></nav>
      <div>
      <div className='mt-[200px] w-full mb-10 justify-evenly'>
        <CardRow1/>
      </div>
      <div className=''>
      <CardRow2/> 

      </div>
      </div>
    </div>
  )
}

export default Classmates
