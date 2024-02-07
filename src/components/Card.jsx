import React from 'react'

const Card = (props) => {
    return (
        <div className='flex flex-col gap-[10px] w-[350px] max-h-[520px] bg-white pb-8 rounded-[20px] z-10 shadow_1 DM_Sans'>
            <span className='relative'>
            <img src={props.img_src} alt="photo" className='w-[350px] h-[220px] rounded-tr-3xl rounded-tl-3xl'/>
            <img src={props.logo} alt="logo"  className='absolute bottom-[20px] right-[32px]' />
            </span>
                
            <h4 className='text-[#0D283A] font-bold text-xl px-8 whitespace-nowrap text-ellipsis'>{props.name}</h4>
            <p className='text-[#0D283A] text-base px-8 overflow-hidden text-ellipsis line-clamp-2'>{props.work}</p>
            <span className='px-8 self-end flex items-center gap-4 mt-[39px]'>
                <p className='text-base'>{props.supporters_count} supporters</p>
                <button className='rounded-[40px] py-4 px-8 border border-solid border-[#2D89C8] text-[#2D89C8] Quicksand'>Donate</button>
            </span>


        </div> 
    )
}

export default Card