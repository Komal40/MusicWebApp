import Link from 'next/link'
import React from 'react'

function Herosection() {
  return (
    <div className='h-auto md:h-[40rem] w-full rounded-md flex flex-col items-center justify-center relative overflow-hidden mx-auto py-10 md:py-0'>
        <div className='p-4 relative text-center z-10 w-full'>
            <h1>Master The Art of Music</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde, quibusdam!</p>
            <div className="mt-4">
                <Link href={'/courses'}>Explore Courses</Link>
            </div>
        </div>
    </div>
  )
}

export default Herosection
