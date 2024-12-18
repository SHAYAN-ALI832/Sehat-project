import React from 'react'
import CircularProgressBar from './Circles'
import CircularProgressBar2 from './Circle2'
import CircularProgressBar3 from './Circle3'
import LineGraph from './LineGraph'

function DashBoard() {
  return (
    <div className='bg-slate-200 pt-1 mt-[55px]'>
      <p className='ml-8 mb-3 text-2xl font-semibold'>Dashboard</p>
      
      <div className='w-full sm:w-[95vw] mx-auto flex flex-col sm:flex-row sm:gap-5 md:h-[12rem]'>
        {/* First Section */}
        <div className='w-full sm:w-[25rem] rounded-lg bg-white pl-2'>
          <p className='font-semibold'>Total Projects Covered</p>
          <p className='text-[30px] underline'>987</p>
          <div className='flex gap-1 md:gap-3  mt-4'>
            <CircularProgressBar value={18} /> {/* 70% progress */}
            <CircularProgressBar2 value={17} />
            <CircularProgressBar3 value={67} />
          </div>
        </div>
        
        {/* Second Section */}
        <div className='w-full sm:w-[35rem] rounded-lg bg-white p-4 mt-4 sm:mt-0'>
          <p className='font-semibold pl-1'>Application Breakdown</p>
          <div className='w-[98%] mx-auto text-center mt-2 rounded-lg bg-blue-200 '>
            <p className='text-md font-semibold'>7040</p>
            <p>Patients Referred</p>
          </div>
          <div className='w-[98%] mx-auto text-center mt-4 rounded-lg bg-pink-200'>
            <p className='text-lg font-semibold'>2940</p>
            <p>Patients Treated</p>
          </div>
        </div>
      </div>

      {/* Line Graph */}
      <LineGraph />
    </div>
  )
}

export default DashBoard
