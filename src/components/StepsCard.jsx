import React from 'react'

const StepsCard = ({ step }) => {
  return (
    <div className='steps_card flex  flex-col md:flex-row gap-[20px] md:gap-[48px] justify-between items-center mb-[-60px] pb-[68px]' >
        <img src={step.img_src} alt="step1" className='h-[340px] w-[340px] bg-white rounded-full'/>
        <span>
        <h4 className='text-[#183244] text-center md:text-left text-[24px] md:text-[32px] font-bold Quicksand'>{step.title}</h4>
        <p className='text-[16px] md:text-xl text-center md:text-left text-balance DM_Sans'>{step.description}</p>
        </span>
    </div>
  )
}

export default StepsCard