import React from 'react'
import CardIntro from './Cards/CardIntro'

const Hero = () => {
  return (

    <div className='w-full mx-auto bg-hero-pattern bg-cover'> 
      <div className="flex items-center justify-center"> 
        <div className='grid grid-cols-2 py-8 px-8'>
          <h1 className="text-black text-4xl font-bold py-8 px-8">
            Farti tornare in forma <br/>è la nostra missione
          </h1> 
          <CardIntro/>
        </div>
      </div>
    </div>
  )
}

export default Hero