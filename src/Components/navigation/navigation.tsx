'use client'

import React from 'react'

import { IoMenuOutline } from "react-icons/io5";
import { RiHotelLine } from "react-icons/ri";

import { LuHotel } from "react-icons/lu";


import Link from 'next/link'

type Props = {}

export default function Navigation({}: Props) {
    return (
        <section className='w-full sticky top-0 z-10'>
            <div className='flex flex-row w-full items-center justify-between mobile:px-[3vw] sm:px-0 text-gray-800 font-medium mobile:justify-between md:text-lg lg:text-xl lg:px-[3vw] xl:px-[6vw] '>
                <span className='mobile:hidden sm:flex hover:bg-gray-100 h-full py-[2vh] px-[2vw]'>
                    <Link href="/">
                        <RiHotelLine className='text-2xl  font-thin'/>
                    </Link>
                </span>

                <ul className='flex flex-row gap-x-[2vw] lg:gap-x-[3vw] items-center mobile:w-full h-full'>
                    <ul className='mobile:flex sm:hidden flex-row items-center w-full justify-between'>
                        {/* responsive handle < sm */}
                        <li className='justify-center items-center hover:bg-gray-100 h-full py-[2vh] px-[2vw]'>
                            <IoMenuOutline className='text-2xl'/>                            
                        </li>
                        <li className='justify-center items-center bg-gold opacity-70 hover:opacity-100  h-full py-[2vh] px-[2vw]'> 
                            <Link href='/booking'>
                                <h1 className='text-white lg:text-xl md:text-base'>BOOK NOW</h1>
                            </Link>
                        </li>
                    </ul>

                    <ul className='mobile:hidden sm:flex flex-row items-center  w-full transition-all h-full'>
                        <li className='flex w-full justify-center items-center hover:bg-gray-100  h-full py-[2vh] px-[2vw]'>
                            <Link href='/about-us'>
                                <h1 className='lg:text-xl md:text-base'>ABOUT US</h1>
                            </Link>
                        </li>
                        <li className='flex w-full justify-center items-center hover:bg-gray-100 h-full py-[2vh] px-[2vw]'> 
                            <Link href='/room'>
                                <h1 className='lg:text-xl md:text-base'>ROOM</h1>
                            </Link>
                        </li>
                        <li className='flex w-full justify-center items-center hover:bg-gray-100 h-full py-[2vh] px-[2vw]'> 
                            <Link href='/facilities'>
                                <h1 className='lg:text-xl md:text-base'>FACILITIES</h1>
                            </Link>
                        </li> 
                        <li className='flex w-full justify-center items-center hover:bg-gray-100 h-full py-[2vh] px-[2vw]'> 
                            <Link href='/location'>
                                <h1 className='lg:text-xl md:text-base'>LOCATIONS</h1>
                            </Link>
                        </li>
                        <li className='flex w-full justify-center items-center hover:bg-gray-100 h-full py-[2vh] px-[2vw]'> 
                            <Link href='/contact'>
                                <h1 className='lg:text-xl md:text-base'>CONTACT</h1>
                            </Link>
                        </li>
                        <li className='flex w-full justify-center items-center bg-gold opacity-70 hover:opacity-100 h-full py-[2vh] px-[2vw]'> 
                            <Link href='/booking'>
                                <h1 className='text-white lg:text-xl md:text-base'>BOOK NOW</h1>
                            </Link>
                        </li>                        
                    </ul>


                </ul>

            </div>
        </section>
    )
}