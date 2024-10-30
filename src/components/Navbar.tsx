'use client'

import React from 'react'
import Image from "next/image";
import Link from 'next/link';
import BtnMenu from './Buttons/BtnMenu';
import BtnLogo from './Buttons/BtnLogo';
import BtnTel from './Buttons/BtnTel';

const Navbar = () => {
    return (
    <div className='flex flex-row flex-wrap justify-center items-center w-full mx-auto py-5 px-10 bg-sky-500'>
                
                    <BtnLogo/>
                    <BtnMenu/>
                    <BtnTel/>       
    </div>
    )
}

export default Navbar