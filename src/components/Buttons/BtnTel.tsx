import React, { useState } from 'react'
import Image from "next/image";
import { ourContact } from '@/constants/data';



const BtnTel = () => {
    
    const [isClicked, setIsClicked] = useState(false)
    const BtnTxtContent = isClicked? `Chiamaci!`: ourContact[0].telephone
    
    
  return (
    <div className='flex flex-row items-center'>
        <button onClick={() => {setIsClicked(!isClicked)}} className='outline outline-white py-2 px-2 w-64'>
            <span id='textButton' className='flex flex-row items-center justify-center hover:invert'>
                <Image src='/phone.png' alt='home' className='hidden md:flex mr-2' width={30} height={30}></Image>
                {BtnTxtContent}
            </span>
        </button>
    </div>
  )
}


export default BtnTel