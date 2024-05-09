import React from 'react'

type Props = {}

export default async function page({}: Props) {
    const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));
    await delay(1500);

    return (
      <main className='text-center h-[95vh] bg-gray-100'>
        Contact PLaceholder 
      </main>
    )
}