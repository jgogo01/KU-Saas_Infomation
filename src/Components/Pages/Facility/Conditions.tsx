import React from 'react'
import { LuDot } from "react-icons/lu";

type Props = {}

export default function Conditions({}: Props) {
    return (
        <div className='cursor-default py-[5vh]'>
                <h1 className='mobile:text-3xl md:text-4xl mb-[3vh] text-center text-gray-800'>
                        TERMS & CONDITIONS
                </h1>
                <ul className='flex flex-col px-[5vw] gap-y-[1vh]'>
                        <li className='flex flex-row text-gray-700 items-center gap-x-[2vw]'>
                            <LuDot className='text-3xl'/>
                            <p className='text-lg'>Rates are quoted in Thai Baht (THB) on a per room per night basis.</p>
                        </li>
                        <li className='flex flex-row text-gray-700 items-center gap-x-[2vw]'>
                            <LuDot className='text-3xl'/>
                            <p className='text-lg'>Rates are subject to 10% Service Charge and 7.7% Prevailing Government Tax.</p>
                        </li>
                        <li className='flex flex-row text-gray-700 items-center gap-x-[2vw]'>
                            <LuDot className='text-3xl'/>
                            <p className='text-lg'>Check-in is from 2:00 pm and check-out is until 12:00 pm.</p>
                        </li>
                        <li className='flex flex-row text-gray-700 items-center gap-x-[2vw]'>
                            <LuDot className='text-3xl'/>
                            <p className='text-lg'>Early check in and late check out are subject to availability.</p>
                        </li>
                        <li className='flex flex-row text-gray-700 items-center gap-x-[2vw]'>
                            <LuDot className='text-3xl'/>
                            <p className='text-lg'>Early check in before 10:00 am will require a full day&apos;s charge.</p>
                        </li>
                        <li className='flex flex-row text-gray-700 items-center gap-x-[2vw]'>
                            <LuDot className='text-3xl'/>
                            <p className='text-lg'>Early check in between 10:00 am - 2:00 pm will require a half day&apos;s charge.</p>
                        </li>
                        <li className='flex flex-row text-gray-700 items-center gap-x-[2vw]'>
                            <LuDot className='text-3xl'/>
                            <p className='text-lg'>Late check out from 12:00 pm to 4:00 pm will require a half day&apos;s charge.</p>
                        </li>
                        <li className='flex flex-row text-gray-700 items-center gap-x-[2vw]'>
                            <LuDot className='text-3xl'/>
                            <p className='text-lg'>Late check-out from 4:00 pm will require a full day&apos;s charge.</p>
                        </li>
                        <li className='flex flex-row text-gray-700 items-center gap-x-[2vw]'>
                            <LuDot className='text-3xl'/>
                            <p className='text-lg'>Credit card information provided does not require a signature and constitutes approval by the cardholder to guarantee the booking per our cancellation policies.</p>
                        </li>
                        <li className='flex flex-row text-gray-700 items-center gap-x-[2vw]'>
                            <LuDot className='text-3xl'/>
                            <p className='text-lg'>Reservations will be cancelled at the hotel&apos;s discretion without prior notice should an invalid credit card be submitted.</p>
                        </li>
                        <li className='flex flex-row text-gray-700 items-center gap-x-[2vw]'>
                            <LuDot className='text-3xl'/>
                            <p className='text-lg'>Extra person charge is THB 2,000.00 person per night, subject to 10% Service Charge and 7.7% Prevailing Government Tax. Package inclusions are not included unless a full extra person package is paid.</p>
                        </li>
                        <li className='flex flex-row text-gray-700 items-center gap-x-[2vw]'>
                            <LuDot className='text-3xl'/>
                            <p className='text-lg'>Only one extra person is allowed in each room.</p>
                        </li>
                        <li className='flex flex-row text-gray-700 items-center gap-x-[2vw]'>
                            <LuDot className='text-3xl'/>
                            <p className='text-lg'>No pets are allowed.</p>
                        </li>
                        <li className='flex flex-row text-gray-700 items-center gap-x-[2vw]'>
                            <LuDot className='text-3xl'/>
                            <p className='text-lg'>In the event of a no-show or early departure, the total rate of the confirmed room nights for the entire stay shall be chargeable.</p>
                        </li>
                </ul>
        </div>
    )
}