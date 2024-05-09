import React from 'react'

import { RiServiceFill } from "react-icons/ri";
import { FaSquareParking } from "react-icons/fa6";
import { FaWifi } from "react-icons/fa";
import { FaRegCreditCard } from "react-icons/fa6";
import { GiCctvCamera } from "react-icons/gi";
import { MdHotel } from "react-icons/md";
import { IoRestaurant } from "react-icons/io5";
import { IoIosFitness } from "react-icons/io";
import { MdOutlinePool } from "react-icons/md";


type Props = {}

export default function Facility({}: Props) {
  return (
    <section className=''>
        <div className='flex flex-col w-full py-[5vh] px-[3vw]'>
            <h1 className='text-4xl text-center mb-[5vh] text-coldGold opacity-80 hover:opacity-100 '>
                FACILITY
            </h1>
            <ul className='flex mobile:flex-col items-center justify-between cursor-default gap-y-[2vh]'>
                <li className='flex flex-row items-center justify-center w-full hover:border-coldGold hover:border-opacity-60 border-2 border-white gap-x-[3vw] rounded-xl px-[2vw] py-[1vh]'>
                    <MdHotel className='text-2xl text-gray-700 hover:text-gray-800'/>
                    <p className='mobile:text-lg md:text-xl lg:text-2xl text-gray-600 hover:text-gray-700'>
                        Room service available
                    </p>
                </li>
                <li className='flex flex-row items-center justify-center w-full hover:border-coldGold hover:border-opacity-60 border-2 border-white gap-x-[3vw] rounded-xl px-[2vw] py-[1vh]'>
                    <IoRestaurant className='text-2xl text-gray-700 hover:text-gray-800'/>
                    <p className='mobile:text-lg md:text-xl lg:text-2xl text-gray-600 hover:text-gray-700'>
                        Complimentary breakfast included
                    </p>
                </li>
                <li className='flex flex-row items-center justify-center w-full hover:border-coldGold hover:border-opacity-60 border-2 border-white gap-x-[3vw] rounded-xl px-[2vw] py-[1vh]'>
                    <RiServiceFill className='text-2xl text-gray-700 hover:text-gray-800'/>
                    <p className='mobile:text-lg md:text-xl lg:text-2xl text-gray-600 hover:text-gray-700'>
                        Reception available 24 hours
                    </p>
                </li>
                <li className='flex flex-row items-center justify-center w-full hover:border-coldGold hover:border-opacity-60 border-2 border-white gap-x-[3vw] rounded-xl px-[2vw] py-[1vh]'>
                    <FaSquareParking className='text-2xl text-gray-700 hover:text-gray-800'/>
                    <p className='mobile:text-lg md:text-xl lg:text-2xl text-gray-600 hover:text-gray-700'>
                        Parking facilities provided
                    </p>
                </li>
                <li className='flex flex-row items-center justify-center w-full hover:border-coldGold hover:border-opacity-60 border-2 border-white gap-x-[3vw] rounded-xl px-[2vw] py-[1vh]'>
                    <MdOutlinePool className='text-2xl text-gray-700 hover:text-gray-800'/>
                    <p className='mobile:text-lg md:text-xl lg:text-2xl text-gray-600 hover:text-gray-700'>
                        Swimming pool available
                    </p>
                </li>
                <li className='flex flex-row items-center justify-center w-full hover:border-coldGold hover:border-opacity-60 border-2 border-white gap-x-[3vw] rounded-xl px-[2vw] py-[1vh]'>
                    <IoIosFitness className='text-2xl text-gray-700 hover:text-gray-800'/>
                    <p className='mobile:text-lg md:text-xl lg:text-2xl text-gray-600 hover:text-gray-700'>
                        Fitness center/gym
                    </p>
                </li>
                <li className='flex flex-row items-center justify-center w-full hover:border-coldGold hover:border-opacity-60 border-2 border-white gap-x-[3vw] rounded-xl px-[2vw] py-[1vh]'>
                    <FaWifi className='text-2xl text-gray-700 hover:text-gray-800'/>
                    <p className='mobile:text-lg md:text-xl lg:text-2xl text-gray-600 hover:text-gray-700'>
                        Complimentary Wi-Fi services available
                    </p>
                </li>
                <li className='flex flex-row items-center justify-center w-full hover:border-coldGold hover:border-opacity-60 border-2 border-white gap-x-[3vw] rounded-xl px-[2vw] py-[1vh]'>
                    <FaRegCreditCard className='text-2xl text-gray-700 hover:text-gray-800'/>
                    <p className='mobile:text-lg md:text-xl lg:text-2xl text-gray-600 hover:text-gray-700'>
                        Accepted payment methods: Cash & Credit Card
                    </p>
                </li>
                <li className='flex flex-row items-center justify-center w-full hover:border-coldGold hover:border-opacity-60 border-2 border-white gap-x-[3vw] rounded-xl px-[2vw] py-[1vh]'>
                    <GiCctvCamera className='text-2xl text-gray-700 hover:text-gray-800'/>
                    <p className='mobile:text-lg md:text-xl lg:text-2xl text-gray-600 hover:text-gray-700'>
                        24-hour CCTV surveillance for enhanced security
                    </p>
                </li>
            </ul>   
        </div>
    </section>
  )
}