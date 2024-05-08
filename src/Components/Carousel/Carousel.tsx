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
          autoplaySpeed={4000}
          dotPosition='bottom'
          effect='scrollx'
          className='overflow-y-scroll'
          speed={2000}
        >
          <div className='flex w-full h-fit max-h-[80vh] text-center items-center overflow-y-scroll'>
            <Image
              src='/assets/hotelsImg/out2.png'
              alt='Hotels structure image'
              className=''
              width={1920}
              height={1080}
            />
          </div>
          <div className='flex w-full h-fit max-h-[80vh] text-center items-center overflow-y-scroll'>
            <Image
              src='/assets/hotelsImg/in13.png'
              alt='Hotels structure image'
              className=''
              width={1920}
              height={1080}
            />
          </div>
          <div className='flex w-full h-fit max-h-[80vh] text-center items-center overflow-y-scroll'>
            <Image
              src='/assets/hotelsImg/out5.png'
              alt='Hotels structure image'
              className=''
              width={1920}
              height={1080}
            />
          </div>
          <div className='flex w-full h-fit max-h-[80vh] text-center items-center overflow-y-scroll'>
            <Image
              src='/assets/hotelsImg/in12.png'
              alt='Hotels structure image'
              className=''
              width={1920}
              height={1080}
            />
          </div>
          <div className='flex w-full h-fit max-h-[80vh] text-center items-center overflow-y-scroll'>
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