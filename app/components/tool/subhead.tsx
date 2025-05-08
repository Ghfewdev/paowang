"use client"

import { usePathname, useRouter } from 'next/navigation'
import React, { useState } from 'react'

export default function Subhead() {
    const pathname = usePathname()
  const router = useRouter()

  const handleNavigate = (path: string) => {
    router.push(path)
  }

    return (
        <div className='bg-gray-300 p-2'>
            <div>
                ระบบรายงาน
            </div>
            <div className='grid grid-cols-12 gap-1'>
            <button
        onClick={() => handleNavigate('/page1')}
        className={`border-2 p-2 rounded-xl cursor-pointer w-full ${
          pathname === '/page1' ? 'bg-blue-600 text-white' : 'bg-[#74c5d3dd] hover:bg-blue-400'
        }`}
      >
        <div className='flex justify-center mb-1'>
          <svg className='w-6 h-6' fill='none' viewBox='0 0 18 20' xmlns='http://www.w3.org/2000/svg'>
            <path
              stroke='currentColor'
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth='2'
              d='M4 4H1m3 4H1m3 4H1m3 4H1m6.071.286a3.429 3.429 0 1 1 6.858 0M4 1h12a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1Zm9 6.5a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0Z'
            />
          </svg>
        </div>
        กลุ่มเสี่ยง
      </button>

      {/* ปุ่ม กลุ่มป่วย */}
      <button
        onClick={() => handleNavigate('/page2')}
        className={`border-2 p-2 rounded-xl cursor-pointer w-full ${
          pathname === '/page2' ? 'bg-blue-600 text-white' : 'bg-[#74c5d3dd] hover:bg-blue-400'
        }`}
      >
        <div className='flex justify-center mb-1'>
          <svg className='w-6 h-6' fill='currentColor' viewBox='0 0 18 20' xmlns='http://www.w3.org/2000/svg'>
            <path d='M16 0H4a2 2 0 0 0-2 2v1H1a1 1 0 0 0 0 2h1v2H1a1 1 0 0 0 0 2h1v2H1a1 1 0 0 0 0 2h1v2H1a1 1 0 0 0 0 2h1v1a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Zm-5.5 4.5a3 3 0 1 1 0 6 3 3 0 0 1 0-6ZM13.929 17H7.071a.5.5 0 0 1-.5-.5 3.935 3.935 0 1 1 7.858 0 .5.5 0 0 1-.5.5Z' />
          </svg>
        </div>
        กลุ่มป่วย
      </button>
      <button
        onClick={() => handleNavigate('/page3')}
        className={`border-2 p-2 rounded-xl cursor-pointer w-full ${
          pathname === '/page3' ? 'bg-blue-600 text-white' : 'bg-[#74c5d3dd] hover:bg-blue-400'
        }`}
      >
        <div className='flex justify-center mb-1'>
          <svg className='w-6 h-6' fill='currentColor' viewBox='0 0 18 20' xmlns='http://www.w3.org/2000/svg'>
            <path d='M16 0H4a2 2 0 0 0-2 2v1H1a1 1 0 0 0 0 2h1v2H1a1 1 0 0 0 0 2h1v2H1a1 1 0 0 0 0 2h1v2H1a1 1 0 0 0 0 2h1v1a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Zm-5.5 4.5a3 3 0 1 1 0 6 3 3 0 0 1 0-6ZM13.929 17H7.071a.5.5 0 0 1-.5-.5 3.935 3.935 0 1 1 7.858 0 .5.5 0 0 1-.5.5Z' />
          </svg>
        </div>
        กลุ่มป่วย
      </button>
      <button
        onClick={() => handleNavigate('/page4')}
        className={`border-2 p-2 rounded-xl cursor-pointer w-full ${
          pathname === '/page4' ? 'bg-blue-600 text-white' : 'bg-[#74c5d3dd] hover:bg-blue-400'
        }`}
      >
        <div className='flex justify-center mb-1'>
          <svg className='w-6 h-6' fill='currentColor' viewBox='0 0 18 20' xmlns='http://www.w3.org/2000/svg'>
            <path d='M16 0H4a2 2 0 0 0-2 2v1H1a1 1 0 0 0 0 2h1v2H1a1 1 0 0 0 0 2h1v2H1a1 1 0 0 0 0 2h1v2H1a1 1 0 0 0 0 2h1v1a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Zm-5.5 4.5a3 3 0 1 1 0 6 3 3 0 0 1 0-6ZM13.929 17H7.071a.5.5 0 0 1-.5-.5 3.935 3.935 0 1 1 7.858 0 .5.5 0 0 1-.5.5Z' />
          </svg>
        </div>
        กลุ่มป่วย
      </button>
      <button
        onClick={() => handleNavigate('/page5')}
        className={`border-2 p-2 rounded-xl cursor-pointer w-full ${
          pathname === '/page5' ? 'bg-blue-600 text-white' : 'bg-[#74c5d3dd] hover:bg-blue-400'
        }`}
      >
        <div className='flex justify-center mb-1'>
          <svg className='w-6 h-6' fill='currentColor' viewBox='0 0 18 20' xmlns='http://www.w3.org/2000/svg'>
            <path d='M16 0H4a2 2 0 0 0-2 2v1H1a1 1 0 0 0 0 2h1v2H1a1 1 0 0 0 0 2h1v2H1a1 1 0 0 0 0 2h1v2H1a1 1 0 0 0 0 2h1v1a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Zm-5.5 4.5a3 3 0 1 1 0 6 3 3 0 0 1 0-6ZM13.929 17H7.071a.5.5 0 0 1-.5-.5 3.935 3.935 0 1 1 7.858 0 .5.5 0 0 1-.5.5Z' />
          </svg>
        </div>
        กลุ่มป่วย
      </button>
      </div>
        </div>

    )
}
