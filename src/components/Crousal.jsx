import React, { useEffect, useState } from 'react'
import "../styles/crousal.css"


const Crousal = ({ slides }) => {
  const [right, setright] = useState(0)
  const [active, setActive] = useState(null)
  

  useEffect(() => {
    setActive(slides.length - 1)
    console.log(slides);
  }, [slides])

  useEffect(()=>{
    setright(-(active-2)*50)
  }, [active])

  return (
   
    <div className='flex flex-col gap-5 DM_Sans lg:hidden'>
      {
           slides.map((slide, index) => {
             return (
               <div className={`flex flex-col items-center justify-center px-[15px] md:px-[85px] w-full h-[480px] rounded-[56px] blur-[0px] shadow ${index === 0? "bg-[#EDFCE2]" : index === 1 ? "bg-[#EAE2FC]" : "bg-[#FCF6E2]"}`} key={index}>
                 <img src={slide.img_src} alt="logo" className='mb-[20px]'/>
                 <p className='text-[20px] text-center md:text-[28px] font-bold'>
                   {slide.title}
                
                 </p>
                 <p className='text-[16px] md:text-xl text-center'>
                   {slide.description}
                 </p>
                 {/* {active + index} */}
               </div>
             )
           }
           )
      }
    </div>
  )
}

export default Crousal;
