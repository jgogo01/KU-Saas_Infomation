'use client'
import React from 'react'

import { FcLikePlaceholder } from "react-icons/fc";


export default function Loading() {
  return (
    <main className='flex flex-col h-[100vh] w-[100vw] text-center justify-center bg-coldGold bg-opacity-10'>
      <div className='animate-bounce duration-[1.5]'>
        <div className='animate-pulse text-coldGold text-opacity-70'>
          <h1 className=' text-5xl '>
            The SaaS Resident Hotel
          </h1>
        </div>
      </div>
      
    </main>
  )
}