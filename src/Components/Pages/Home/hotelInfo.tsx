import React from 'react'

type Props = {}

export default function HotelInfo({}: Props) {
  return (
    <section className='gap-y-[4vh] h-fit my-[7vh] mx-[5vw] flex flex-col items-center justify-center text-center'>
        <h1 className='text-4xl text-gold '>
            The SaaS Residence Hotel Nonthaburi
        </h1>
        <h2 className='text-2xl text-gray-800'>Comfortable and Affordable Accommodation</h2>
        <p className='text-lg'>
            The SaaS Residence Hotel,
            your modern oasis nestled in the heart of Nonthaburi.
            Our hotel is designed to provide you with a comfortable and affordable stay.
            We offer a variety of room types to suit your needs.
            Conveniently located near the BTS station, our hotel offers easy access to transportation, making it convenient for you to explore the city.
        </p>
    </section>
  )
}