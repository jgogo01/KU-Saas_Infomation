'use client'

import React from 'react'

import { IoMenuOutline } from "react-icons/io5";
import { LuHotel } from "react-icons/lu";


import Link from 'next/link'

type Props = {}

export default function Navigation({}: Props) {
    return (
        <section className='w-full sticky top-0 z-10'>
            <div className='flex flex-row w-full items-center justify-between mobile:px-[3vw] text-gray-800 font-medium md:text-lg lg:text-xl lg:px-[3vw] xl:px-[6vw] '>
                <span className='hover:bg-gray-100 h-full py-[2vh] px-[2vw]'>
                    <Link href="/">
                        <LuHotel className='text-3xl  font-thin'/>
                    </Link>
                </span>
                <ul className='flex flex-row gap-x-[2vw] lg:gap-x-[3vw] items-center w-full'>
                    {/* responsive handle < sm */}
                    <li className='sm:flex md:hidden '>
                        <button
                            onClick={(e)=>{
                                e.preventDefault()
                            }}
                        >   
                        <h1 className='hover:opacity-75'>
                            qwer
                        </h1>
                        </button>
                    </li>  
                    <li className='sm:flex md:hidden hover:bg-gray-100 h-full py-[2vh] px-[2vw]'>
                        <span className=''>
                            <IoMenuOutline/>
                        </span>
                    </li>
                    <ul className='mobile:hidden md:flex flex-row items-center  w-full '>
                        <li className='mobile:hidden md:flex w-full justify-center items-center hover:bg-gray-100 h-full py-[2vh] px-[2vw]'>
                            <Link href='/marketplace'>
                                <h1 className='lg:text-xl md:text-base'>About us </h1>
                            </Link>
                        </li>
                        <li className='mobile:hidden md:flex flex-row gap-x-[1vw] w-full justify-center items-center hover:bg-gray-100 h-full py-[2vh] px-[2vw]'> 
                            <Link href='/benefit'>
                                <h1 className='lg:text-xl md:text-base'>Organize</h1>
                            </Link>
                        </li>  
                        <li className='mobile:hidden md:flex flex-row gap-x-[1vw] w-full justify-center items-center hover:bg-gray-100 h-full py-[2vh] px-[2vw]'> 
                            <Link href='/benefit'>
                                <h1 className='lg:text-xl md:text-base'>Organize</h1>
                            </Link>
                        </li>  
                        <li className='mobile:hidden md:flex flex-row gap-x-[1vw] w-full justify-center items-center hover:bg-gray-100 h-full py-[2vh] px-[2vw]'> 
                            <Link href='/benefit'>
                                <h1 className='lg:text-xl md:text-base'>Organize</h1>
                            </Link>
                        </li>  
                        <li className='mobile:hidden md:flex flex-row gap-x-[1vw] w-full justify-center items-center hover:bg-gray-100 h-full py-[2vh] px-[2vw]'> 
                            <Link href='/benefit'>
                                <h1 className='lg:text-xl md:text-base'>Organize</h1>
                            </Link>
                        </li>  
                        <li className='mobile:hidden md:flex flex-row gap-x-[1vw] w-full justify-center items-center hover:bg-gray-100 h-full py-[2vh] px-[2vw]'> 
                            <Link href='/benefit'>
                                <h1 className='lg:text-xl md:text-base'>Organize</h1>
                            </Link>
                        </li>                        
                    </ul>


                </ul>

            </div>
        </section>
    )
}