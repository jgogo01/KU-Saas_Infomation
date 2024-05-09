
import React from 'react'

import Conditions from '@/Components/Pages/Facility/Conditions';
import Facility from '@/Components/Pages/Facility/Facility';

type Props = {}

export default async function page({}: Props) {
    const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));
    await delay(1500);

    return (
      <main className='flex flex-col'>
        <span className='flex bg-gray-200 h-[10vh] w-full'>
          
        </span>
        <Facility/>
        <Conditions/>
      </main>
    )
}