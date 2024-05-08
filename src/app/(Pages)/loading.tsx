import React from 'react'

type Props = {}

export default function Loading({}: Props) {
  return (
    <main className='flex flex-col h-[100vh] w-[100vw] text-center justify-center bg-coldGold bg-opacity-10'>
      <div className='animate-bounce'>
        Loading ...
      </div>
    </main>
  )
}