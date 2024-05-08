import React from 'react'

import Link from 'next/link'

type Props = {}

export default function Advantages({}: Props) {
  return (
    <section className='px-[3vw] gap-y-[5vh] py-[5vh] bg-gold bg-opacity-35'>
      <h1 className='text-4xl text-center '>
        ADVANTAGES
      </h1>
        <ul className='flex flex-col items-center justify-center gap-y-[2vh] mt-[3vh]'>
          <li className=''>
            <h1 className='text-center text-2xl font-base mb-[1vh]'>
              OverFine Mixed-use Space
            </h1>
            <p className='text-base text-center'>A versatile area designed for working or hosting various activities such as workshops, parties, or private events.</p>                    
          </li>
          <li className=''>
            <h1 className='text-center text-2xl font-base mb-[1vh]'>
              Convenient Transportation
            </h1>
            <p>You can easily reach the Sai Mai BTS Skytrain station, just 150 meters from the hotel.</p>
          </li>
          <li className=' '>
            <h1 className='text-center text-2xl font-base mb-[1vh]'>
              Friendly Staff
            </h1>
            <p className='text-base text-center'>
              Our team is always ready to assist you with any questions or assistance you may need.
            </p>
          </li>
          <li className=' '>
            <h1 className='text-center text-2xl font-base mb-[1vh]'>
              Parking Facilities
            </h1>
            <p className='text-base text-center'>We provide parking services for hotel guests.</p>
          </li>
          <li className=''>
            <h1 className='text-center text-2xl font-base mb-[1vh]'>
              Air Conditioning
            </h1>
            <p className='text-base text-center'>All our rooms are equipped with air conditioning to ensure your comfort throughout your stay.</p>
          </li>
          <li className=''>
            <h1 className='text-center text-2xl font-base mb-[1vh]'>
              Wireless Internet
            </h1>
            <p className='text-base text-center'>High-speed wireless internet is available for free within the hotel premises and guest rooms.</p>            
          </li>
        </ul>
    </section>
  )
}