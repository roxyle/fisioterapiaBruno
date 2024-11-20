import Image from 'next/image'
import React from 'react'

type MyProps = {
    id: string,
    alt: string,
    immagine: string,
    text: string,
  }

export default function CardTerapie (imgTerapia: MyProps) {
  return (
    <div>
        <Image className='m-2' key={imgTerapia.id}
          src={imgTerapia.immagine} alt={imgTerapia.alt} width={40} height={120}/>    
            
        <div>
            <p></p>
        </div>
    </div>
  )
}
