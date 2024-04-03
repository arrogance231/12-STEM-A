import React, { useState } from 'react'


const Button = ({label, iconURL}) => {
  const [IsHovered, setIsHovered] = useState(false)

  return (
    <div className={`${IsHovered ? 'animate-mover' : 'animate-movel'}`} onMouseOver={() => setIsHovered(true)} onMouseOut={() => setIsHovered(false)} >
    <button className='flex justify-center item-center gap-2 px-7 py-4 font-montserrat text-lg leading-none bg-secondary text-black rounded-lg'>
        {label}
        <img src={iconURL} alt="ArrowRight Icon" className='ml-2 rounded-full w-5 h-5'/>
    </button>  
    </div> 
  )
}

export default Button
