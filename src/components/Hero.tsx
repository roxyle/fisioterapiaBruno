import React, { useEffect, useState } from 'react'
import CardIntro from './Cards/CardIntro'
import ContCardIntro from './Containers/ContCardIntro'
import { TextContent } from '@/constants/types'
import { cardIntroTxt } from '@/constants/data'
import ContPresentazione from './Containers/ContPresentazione'

const Hero = () => {

  
  return (

    <div className='w-full mx-auto bg-hero-pattern bg-cover'> 
      <div className="flex flex-row p-10"> 
        <div className=''>
          <h1 className="text-black text-center text-4xl font-bold">
            Farti tornare in forma <br/>è la nostra missione
          </h1> 

          <div>
            <ContPresentazione cardIntroTxt={cardIntroTxt}/>

            

          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero