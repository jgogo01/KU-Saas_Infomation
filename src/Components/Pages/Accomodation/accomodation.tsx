import React from 'react'

import Link from 'next/link'

type Props = {}

export default function Accomodation({}: Props) {
  return (
    <section>
        <div className='flex flex-col'>
          <h1>
            Accomodation
          </h1>
          <ul>
            <li>
              <Link href='/accomodation/standard'>
                <h1>Standard Room</h1>
              </Link>
            </li>
            <li>
              <Link href='/accomodation/supreior'>
                <h1>Suprerior Room</h1>
              </Link>
            </li>
            <li>
            <Link href='/accomodation/three-bed'>
                <h1>Three bed Room</h1>
              </Link>
            </li>
            <li>
            <Link href='/accomodation/deluxe'>
                <h1>Deluxe Room</h1>
              </Link>
            </li>            
          </ul>

        </div>
    </section>
  )
}