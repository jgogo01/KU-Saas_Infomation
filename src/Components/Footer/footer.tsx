import React from 'react'

import Link from 'next/link';

import { Divider } from 'antd';

import { FaLine } from "react-icons/fa6";
import { BsFillTelephoneFill } from "react-icons/bs";
import { MdOutlineMail } from "react-icons/md";
import { FaFacebook } from "react-icons/fa";



export default function Footer() {
  return (
    <footer className='flex flex-col w-full bg-coldGold opacity-95 hover:opacity-100 text-white pt-[5vh] pb-[3vh]'>
        <div className='flex flex-col items-center justify-center text-center w-full gap-y-[2.5vh] px-[2vw]'>
            <h1 className='text-3xl'>
                {/* The SaaS Residence Hotel */}
                THE SAAS RESIDENCE HOTEL
            </h1>
            <h2 className='text-xl'>
            518/8 Chaopraya Road, Bangbuathong, Bangkratuek, Nonthaburi, 11000
            </h2>
            <div className='flex flex-col gap-y-[2vh] justify-center'>
                <div className='flex flex-row items-center gap-x-[1vw]'>
                    <BsFillTelephoneFill className='text-xl' />
                    <p className='hover:underline text-lg cursor-pointer'>
                        +66 02-357-xxxx
                    </p>
                </div>
                <div className='flex flex-row items-center gap-x-[1vw]'>
                    <MdOutlineMail className='text-2xl'/>
                    <p className='hover:underline text-lg cursor-pointer'>
                        saasResidence@hotel.com
                    </p>                
                </div>
                <div className='flex flex-row items-center gap-x-[1vw]'>
                    <FaLine className='text-2xl'/>
                    <p className='hover:underline text-lg cursor-pointer'>
                        @saasResidence
                    </p>                
                </div>
                <div className='flex flex-row items-center gap-x-[1vw]'>
                    <FaFacebook className='text-2xl'/>
                    <p className='hover:underline text-lg cursor-pointer transition-all duration-700'>
                        SaaSResidence
                    </p>                
                </div>     
            </div>
        </div>
        <div className='px-[3vw]'>
            <Divider style={{borderTop: '2px solid #B3AD7A' }}/>
        </div>
        <div className='flex mobile:flex-col mobile:gap-y-[1vh] md:flex-row items-center text-center w-full justify-between px-[5vw]'>
            <Link href='/'>
                <h1 className='text-2xl hover:text-black transition-color duration-700'>
                    HOME
                </h1>
            </Link>
            <Link href='/accomodation'>
                <h1 className='text-2xl hover:text-black transition-color duration-700'>
                    ROOM
                </h1>
            </Link>
            <Link href='/facility'>
                <h1 className='text-2xl hover:text-black transition-color duration-700 '>
                    FACILITY
                </h1>
            </Link>
            <Link href='/location'>
                <h1 className='text-2xl hover:text-black transition-color duration-700'>
                    LOCATION
                </h1>
            </Link>
            <Link href='/contact'>
                <h1 className='text-2xl hover:text-black transition-color duration-700 '>
                    CONTACT
                </h1>
            </Link>
        </div>
        <div className='px-[3vw]'>
            <Divider style={{borderTop: '2px solid #B3AD7A' }}/>
        </div>
        <div className='flex-col flex gap-y-[1vh]'>
            <p className='text-center text-lg'>
                Copyright © 2024 - The SaaS Residence Hotel Nonthaburi. All rights reserved.
            </p>
            <div className='flex mobile:flex-col md:flex-row items-center justify-center gap-x-[3vw]'>
                <p>
                    Terms & Conditions
                </p>
                <p>
                    Privacy Policy
                </p>
                <p>
                    Cookies & Tracking Notice
                </p>
     
            </div>
            <h1 className='text-center flex text-white opacity-70 text-base'>
                The SaaS Residence Hotel is a registered trademark of The SaaS Residence Hospitality Group. The SaaS Residence Hotel World&apos;s Best Awards is used under license. The SaaS Residence Hotel is published by The SaaS Resident Hotel, which is not affiliated with any other companies or organizations mentioned herein.
            </h1>
        </div>

    </footer>
  )
}