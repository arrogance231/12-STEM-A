import React from 'react'
import {headerLogo} from '../assets/images'
import {hamburger} from '../assets/icons'
import { navLinks } from '../constants'
import { Maskgroup } from '../assets/images'

const Nav = () => {
  return (
    <div>
        <header className='padding-x py-8 absolute z-10 w-full bg-gradient-to-r from-cyan-800 to-red-500'>
            <nav className='flex justify-between items-center max-container relative'>
                <a href="../classmates.html">
                    <img src={Maskgroup} alt='Logo' className='w-130 h-29' width={125}></img>
                </a>
                <ul className='flex-1 flex justify-center items-center gap-16 max-lg:hidden font-bold relative'>
                    {navLinks.map((item) => (
                      <li key={item.label}>
                        <a href={item.href} className= 'font-bold m-20 size-8xl font-montserrat leading-normal text-lg bg-gradient-to-r from-orange-400 to-teal-200 bg-clip-text text-transparent animate-text'>
                        {item.label}
                        </a>
                      </li>
                    ))}
                </ul>
                <div className='hidden max-lg:block'>
                  <img src={hamburger} alt="Hamburger" width={25} height={25} />
                </div>
            </nav>
        </header>
    </div>
  )
}

export default Nav
