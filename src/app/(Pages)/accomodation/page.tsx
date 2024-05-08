import React from 'react'

import Accomodation from '@/Components/Pages/Accomodation/accomodation'

type Props = {}

export default async function page({}: Props) {
    const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));
    await delay(2000);

    return (
      <main>
        <Accomodation/>
      </main>
    )
}