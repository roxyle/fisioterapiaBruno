import Link from 'next/link'
import React from 'react'

const BtnMenu = () => {
  return (
    <div className='py-5 flex flex-1 flex-row flex-wrap justify-evenly items-center'>
        <Link href='/' id='Home' className='hover:[text-decoration:underline_overline] hover:font-bold hover:text-lg underline-offset-4'>Home</Link>
        <Link href='/Servizi' className='hover:[text-decoration:underline_overline] hover:font-bold hover:text-lg underline-offset-4'>Servizi</Link>
        <Link href='/Contatti' className='hover:[text-decoration:underline_overline] hover:font-bold hover:text-lg underline-offset-4'>Contatti</Link>
    </div>
  )
}

export default BtnMenu