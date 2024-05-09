import React from 'react'

type Props = {}

export default function Conditions({}: Props) {
  return (
    <div className=''>
        <h1 className='text-4xl text-center'>
            TERMS & CONDITIONS
        </h1>
        <ul>
            <li>
                <p>Rates are quoted in Thai Baht (THB) on a per room per night basis.</p>
            </li>
            <li>
                <p>Rates are subject to 10% Service Charge and 7.7% Prevailing Government Tax.</p>
            </li>
            <li>
                <p>Check-in is from 2:00 pm and check-out is until 12:00 pm.</p>
            </li>
            <li>
                <p>Early check in and late check out are subject to availability.</p>
            </li>
            <li>
                <p>Early check in before 10:00 am will require a full day's charge.</p>
            </li>
            <li>
                <p>Early check in between 10:00 am - 2:00 pm will require a half day's charge.</p>
            </li>
            <li>
                <p>Late check out from 12:00 pm to 4:00 pm will require a half day's charge.</p>
            </li>
            <li>
                <p>Late check-out from 4:00 pm will require a full day's charge.</p>
            </li>
            <li>
                <p>Credit card information provided does not require a signature and constitutes approval by the cardholder to guarantee the booking per our cancellation policies.</p>
            </li>
            <li>
                <p>Reservations will be cancelled at the hotel’s discretion without prior notice should an invalid credit card be submitted.</p>
            </li>
            <li>
                <p>Extra person charge is THB 2,000.00 person per night, subject to 10% Service Charge and 7.7% Prevailing Government Tax. Package inclusions are not included unless a full extra person package is paid.</p>
            </li>
            <li>
                <p>Only one extra person is allowed in each room.</p>
            </li>
            <li>
                <p>No pets are allowed.</p>
            </li>
            <li>
                <p>In the event of a no-show or early departure, the total rate of the confirmed room nights for the entire stay shall be chargeable.</p>
            </li>
        </ul>
        Condition
    </div>
  )
}