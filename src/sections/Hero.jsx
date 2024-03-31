import React from 'react'
import Button from '../components/Button'
import { arrowRight } from '../assets/icons'
import { statistics } from '../constants'
import { bigShoe1 } from '../assets/images'
import { FoundationDay } from '../assets/images'


const Hero = () => {
  return (
    <div>
      <section id='home' className='w-full flex xl:flex-row flex-col justify-start min-h-screen gap-10 max-container'>
        <div className='relative xl:w-2/5 flex flex-col justify-center items-start w-full max-xl:padding-x pt-28 padding-x'>
          <p className='text-xl font-montserrat text-coral-red hover:animate-mover mt-16'>Made By Arjhine A. Ty</p>
          <h1 className='mt-10 font-palanquin text-8xl max-sm:text-[72px] max-sm:leading-[82px] font-bold'><span className=' xl:whitespace-nowrap z-0 pr-10'>The power of</span>
          <br />
          <span className='text-violet-600 inline-block mt-3'>S</span>
          <span className= ' text-blue-300 inline-block mt-3'>T</span>
          <span className=' text-blue-950 inline-block'>E</span>
          <span className='text-slate-gray inline-block mt-3'>M</span> students
          </h1>
          <p className='font-montserrat bg-gradient-to-r from-sky-300 to-yellow-200 bg-clip-text text-transparent font-bold text-lg leading-8 mt-6 mb-14 sm:max-w-sm'>What make's one a Quezon City Academy STEM A Student?</p>
          <div>
          <Button label="Check us out!" iconURL={arrowRight}/>
          </div>
          <div className='flex justify-start items-start flex-wrap w-full mt-20 gap-16 bg-gradient-to-r from-cyan-300 to-orange-300 bg-clip-text text-transparent animate-text'> 
            {statistics.map((stat) => (
              <div key={stat.label} className='font-bold '>
                <p className='text-4xl font-palanquin font-bold'>{stat.value}</p>
                <p className='leading-7 font-montserrat text-slate-gray'>{stat.label}</p>
              </div>
            ))}
          </div>
        </div >
        <div className='animate-bounce  mt-[300px] mb-[250px] m-20 bg-gradient-to-r from-cyan-200 to-yellow-200'>
        <div className='relative flex-1 flex justify-enter items-center ml-16 mr-16 m-20'>
          <img src={FoundationDay} alt="" width={700} height={700} className='object-contain relative z-10'/>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Hero
