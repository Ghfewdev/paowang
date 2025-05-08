import React from 'react'

export default function Head() {
  return (
    <div>
      <header className="bg-[#168aceaa] text-white text-shadow-black text-shadow-2xs p-1 shadow-md sticky top-0 z-50 border-2 border-black grid grid-cols-11 gap-1">
        <div className='col-span-10 p-1'>
            ระบบรายงานโรคเบาหวานและโรคความดันโลหิตสูง โรงพยาบาลสังกัดสำนักการแพทย์
        </div>
        <div>
            <button className='bg-red-500 text-white text-shadow-black text-shadow-2xs p-1 hover:bg-amber-500 cursor-pointer rounded-2xl'>ออกจากบัญชี</button>
        </div>
      </header>
    </div>
  )
}
