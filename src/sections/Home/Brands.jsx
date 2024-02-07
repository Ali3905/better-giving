import React from 'react'

const Brands = () => {
  return (
    <section className='flex flex-col gap-[56px] py-[64px]'>
        <h2 className='text-[32px] md:text-[42px] font-bold lg:max-w-[50%] md:max-w-[70%] text-[#183244] text-center mx-auto text-balance Quicksand'>Trusted by Millions of changemakers at Orgs like yours</h2>
        <div className='brands_container whitespace-nowrap overflow-hidden'>
        <div className='inline-block brands'>
            <img src="/brand_1.svg" alt="brand_1" />
            <img src="/brand_2.svg" alt="brand_2" />
            <img src="/brand_3.svg" alt="brand_3" />
            <img src="/brand_4.svg" alt="brand_4" />
            <img src="/brand_5.svg" alt="brand_5" />
            <img src="/brand_6.svg" alt="brand_6" />
            <img src="/brand_7.svg" alt="brand_7" />
        </div>
        <div className='inline-block brands'>
            <img src="/brand_1.svg" alt="brand_1" />
            <img src="/brand_2.svg" alt="brand_2" />
            <img src="/brand_3.svg" alt="brand_3" />
            <img src="/brand_4.svg" alt="brand_4" />
            <img src="/brand_5.svg" alt="brand_5" />
            <img src="/brand_6.svg" alt="brand_6" />
            <img src="/brand_7.svg" alt="brand_7" />
        </div>
        </div>
    </section>
  )
}

export default Brands