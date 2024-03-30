import React from 'react'
import Nav from './components/Nav.jsx'
import CardRow1 from './classmates/CardRow1.jsx'

const Classmates = () => {
  return (
    <div className= 'flex w-full'>
      <nav className='absolute w-full'><Nav/></nav>
      <div className='mt-[200px] w-full'>
        <CardRow1/>
      </div>
    </div>
  )
}

export default Classmates
