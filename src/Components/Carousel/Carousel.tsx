import React from 'react'

import { Carousel } from 'antd';
import Image from 'next/image';

type Props = {}

export default function CarouselRender({}: Props) {
  return (
    <>
    <Carousel
          autoplay
          draggable
          autoplaySpeed={5000}
          dotPosition='bottom'
          effect='scrollx'
          className='overflow-y-scroll'
        >
          <div className='flex w-full h-fit max-h-[70vh] text-center items-center overflow-y-scroll'>
            <Image
              src='/assets/hotelsImg/out2.png'
              alt='Hotels structure image'
              className=''
              width={1920}
              height={1080}
            />
          </div>
          <div className='flex w-full h-fit max-h-[70vh] text-center items-center overflow-y-scroll'>
            <Image
              src='/assets/hotelsImg/in13.png'
              alt='Hotels structure image'
              className=''
              width={1920}
              height={1080}
            />
          </div>
          <div className='flex w-full h-fit max-h-[70vh] text-center items-center overflow-y-scroll'>
            <Image
              src='/assets/hotelsImg/out5.png'
              alt='Hotels structure image'
              className=''
              width={1920}
              height={1080}
            />
          </div>
          <div className='flex w-full h-fit max-h-[70vh] text-center items-center overflow-y-scroll'>
            <Image
              src='/assets/hotelsImg/in12.png'
              alt='Hotels structure image'
              className=''
              width={1920}
              height={1080}
            />
          </div>
          <div className='flex w-full h-fit max-h-[70vh] text-center items-center overflow-y-scroll'>
            <Image
              src='/assets/hotelsImg/in1.png'
              alt='Hotels structure image'
              className=''
              width={1920}
              height={1080}
            />
          </div>      
    </Carousel>   
    </>
  )
}