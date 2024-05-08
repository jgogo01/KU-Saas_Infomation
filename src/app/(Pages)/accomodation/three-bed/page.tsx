import React from 'react'

type Props = {}

export default async function page({}: Props) {
    const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));
    await delay(1500);

    return (
      <main>
        three bed placeholder
      </main>
    )
}