import React, { useState } from 'react'
import Image from "next/image";
import { ourContact } from '@/constants/data';
import Link from 'next/link';

type MyProps = {

  bottone: string,
  goTo: string

}

export default function Btn(testo: MyProps){
    


  return (
    <div className=''>
        <button className='bg-sky-500 rounded-sm py-2 px-2 w-64'>
            <Link href={testo.goTo} id='textButton' className='text-white'>
                {testo.bottone}
            </Link>
        </button>
    </div>
  )
}

