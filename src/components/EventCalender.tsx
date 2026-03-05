"use client"

import Image from 'next/image';
import { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
// Importing the Calendar component from react-calendar
// and its associated CSS for styling.

type ValuePiece = Date | null;

type Value = ValuePiece | [ValuePiece, ValuePiece];

//dummy data
const events = [
  {
    id: 1,
    title: 'School Annual Day',
    time: "12:00 PM - 3:00 PM",
    description: 'Annual day celebration with cultural programs and awards.',
  },
  {
    id: 2,
    title: 'Parent-Teacher Meeting',
    time: "10:00 AM - 11:00 AM",
    description: 'Discussion on student progress and feedback.',
  },
  {
    id: 3,
    title: 'Sports Day',
    time: "9:00 AM - 5:00 PM",
    description: 'Annual sports day with various competitions and events.',
  },
];


const EventCalender = () => {
   const [value, onChange] = useState<Value>(new Date());
  return (
    <div className='bg-white p-4 rounded-md'>
      <Calendar onChange={onChange} value={value} />
      {/* Events */}
      <div className='flex flex-col gap-4'>
        <div className='flex items-center justify-between'>
          <h1 className='font-semibold text-xl my-4'>Upcoming Events</h1>
              <Image src="/moreDark.png" alt="more" width={20} height={20} className="cursor-pointer" />
        </div>
        {events.map((event) => (
          <div className='p-5 rounded-md border-2 border-gray-100 border-t-4 odd:border-t-tofunmiSky even:border-t-tofunmiPurple' key={event.id}>
            <div className="flex items-center justify-between">
              <h1 className="font-semibold text-gray-600">{event.title}</h1>
              <span className='text-gray-300 text-xs'>{event.time}</span>
            </div>
            <p className="mt-2 text-gray-400 text-small">{event.description}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default EventCalender