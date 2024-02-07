import React from 'react'

const JoinUsBanner = () => {
  return (
    <div className='bg-[#c0d1dd] rounded-[32px] flex flex-col md:flex-row md:items-center lg:px-[64px] md:px-[50px] md:py-[70px] p-[36px] bg-no-repeat bg-contain bg-center relative lg:w-[70%] w-[95%] m-auto overflow-hidden xl:max-w-[1140px] xl:m-auto'>
      <img src="/banner_image.png" alt="banner" className='absolute right-[-30%] md:right-[10%] top-[-10%] h-full' />
      <div className='w-[98%] h-[93%] bg-[#2d89c8fc] absolute rounded-[32px] left-[1%] top-[3.5%] opacity-60 '></div>
      <span className='z-10 mb-[48px]'>
        <p className='text-lg font-bold uppercase text-white'>Fueling Dreams</p>
        <p className='text-[24px] md:text-[42px] font-bold uppercase lg:max-w-full md:max-w-[80%] text-white'>Together, we can change the world for good</p>
      </span>
      <button className='z-10 px-[78px] py-[24px] bg-white whitespace-nowrap rounded-[40px] font-bold text-2xl text-[#2D8AC8] flex justify-center'>Join Us <span className='md:hidden'>- Its free</span></button>
    </div>
  )
}

export default JoinUsBanner