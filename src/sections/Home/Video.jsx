import React, { useEffect } from 'react'
import Button from '../../components/Button'


const Video = () => {
    // useEffect(() => {
    //     const text = document.querySelector(".rotating-text p")
    //     text.innerHTML = text.innerText.split("").map((char, i) => {
    //         return `<span style="transform:rotate(${i * 5.4}deg)">${char}</span>`
    //     }).join("")
    // }, [])

    return (
        <section className='p-[24px] lg:p-[100px] lg:pt-0 md:px-[30px] md:py-[100px] flex flex-col gap-[56px] relative xl:max-w-[1440px] xl:m-auto'>
            <div className='h-[150px]'></div>
            <span className='flex flex-col items-center gap-3 relative'>
                {/* <img src="" alt="" /> */}
                <span className='flex items-center absolute top-[-100px] md:top-[-250px] -z-10'>
                    <span className='video_bg_blur hidden md:block'></span>
                    {/* <svg width="370" height="309" viewBox="0 0 391 309" fill="none" className='w-[180px] h-[150px] md:w-[370px] md:h-[309px] mr-[-50px]' xmlns="http://www.w3.org/2000/svg">
                        <path d="M77.0748 77.3271C119.642 34.7599 188.657 34.7599 231.224 77.3271L308.299 154.402L231.224 231.476C188.657 274.044 119.642 274.044 77.0748 231.476V231.476C34.5076 188.909 34.5076 119.894 77.0748 77.3271V77.3271Z" stroke="url(#paint0_angular_519_580)" stroke-width="70" />
                        <defs>
                            <radialGradient id="paint0_angular_519_580" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(154.149 154.402) scale(193.351)">
                                <stop stop-color="#2D89C8" />
                                <stop offset="1" stop-color="#2D89C8" stop-opacity="0" />
                            </radialGradient>
                        </defs>
                    </svg> */}
                    <img src="/videoLogo.png" alt="logo" className=' md:w-[770px] md:h-[309px] z-10 video_image relative'/>
                    {/* <svg xmlns="http://www.w3.org/2000/svg" width="348" height="289" viewBox="0 0 348 289" fill="none" className='w-[180px] h-[150px] md:w-[370px] md:h-[309px] mr-[-50px]'>
                        <path d="M280.925 221.178C238.358 263.745 169.343 263.745 126.776 221.178L49.7013 144.103L126.776 67.0285C169.343 24.4614 238.358 24.4614 280.925 67.0285V67.0285C323.492 109.596 323.492 178.611 280.925 221.178V221.178Z" stroke="url(#paint0_angular_1039_7844)" stroke-width="70" />
                        <defs>
                            <radialGradient id="paint0_angular_1039_7844" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(203.851 144.103) rotate(180) scale(193.351)">
                                <stop stop-color="#2D89C8" />
                                <stop offset="1" stop-color="#2D89C8" stop-opacity="0" />
                            </radialGradient>
                        </defs>
                    </svg> */}
                </span>

                <h2 className='text-[#183244] text-[32px] md:text-[42px] font-bold text-center Quicksand max-w-[80%]'>The Better.Giving Alliance</h2>
                <p className='text-[20px] md:text-[28px] font-medium lg:max-w-[60%] md:w-full text-center m-auto text=[##1D3C51] DM_Sans'>Joining Better Giving as an alliance offers a powerful avenue for communal social responsibility, with a vast network of 125+ partners dedicated to the giving pledge. </p>
            </span>
            <div className='flex flex-col items-center gap-[48px] lg:p-[36px] md:p-[10px] rounded-3xl p-[8px] pb-[24px] md:rounded-[66px] border border-solid bg-white z-10'>
                {/* <video src=""></video> */}
                <div className='relative w-full'>
                    <img src="/video_banner.png" alt="video" className='h-[180px] lg:min-h-[600px] md:h-[400px] rounded-3xl md:rounded-[66px] w-full' />
                    <button className='absolute md:top-[40%] md:left-[45%] top-[20%] left-[30%] p-3 bg-[#a3c6de] rounded-full h-[110px] w-[110px] flex items-center justify-center'>
                        <span className='w-[70px] h-[70px] md:w-[90px] md:h-[90px] bg-[#2D89C8] rounded-full px-5 flex items-center justify-center'>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="white" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="text-white w-12 h-12">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.347a1.125 1.125 0 0 1 0 1.972l-11.54 6.347a1.125 1.125 0 0 1-1.667-.986V5.653Z" />
                            </svg>
                        </span>
                    </button>
                    <span className='absolute lg:left-[-10px] md:left-[50px] lg:bottom-[-10px] md:bottom-[-90%] text-[42px] w-[200px] h-[200px] circle hidden md:block'>

                        {/* <span className='uppercase text-lg font-bold rotating-text absolute top-[40%] left-[-45%]'>
                            <strong className='absolute top-[40%] left-[25%] text-[72px]'>
                                💙
                            </strong>
                            <p className='Quicksand text-[#2D89C8]'>
                                Give Today, Give Forever BetterGiving
                            </p>
                        </span> */}
                        <img src="/heart.png" alt="heart" className='uppercase text-lg font-bold rotating-text absolute top-[40%] left-[-45%]' />
                    </span>
                </div>
                <p className='text-[16px] md:text-[24px] text-center w-[80%] DM_Sans'>Through strategic connections and shared purpose, the platform magnifies impact, enabling sponsors to support local nonprofit experts, multiply their influence, and drive collective support for causes that truly matter.</p>
                <Button text={"Join the Movement"} className="self-center" />
            </div>
            <svg xmlns="http://www.w3.org/2000/svg" width="209" height="332" viewBox="0 0 209 332" fill="none" className='absolute top-[50%] right-0'>
                <path opacity="0.4" fill-rule="evenodd" clip-rule="evenodd" d="M42.4599 1.46459C58.4961 5.03489 68.6012 20.9313 65.0303 36.9701C41.8195 141.223 107.503 244.549 211.738 267.756C315.973 290.963 419.289 225.263 442.5 121.01C446.07 104.971 461.965 94.8632 478.001 98.4335C494.038 102.004 504.143 117.9 500.572 133.939C470.219 270.269 335.114 356.186 198.807 325.838C62.4991 295.491 -23.3944 160.371 6.95815 24.041C10.529 8.00208 26.4237 -2.1057 42.4599 1.46459Z" fill="url(#paint0_linear_509_319)" />
                <defs>
                    <linearGradient id="paint0_linear_509_319" x1="505.55" y1="111.579" x2="-27.334" y2="246.616" gradientUnits="userSpaceOnUse">
                        <stop stop-color="#D8E7FD" />
                        <stop offset="1" stop-color="#E1F0EB" />
                    </linearGradient>
                </defs>
            </svg>
        </section>
    )
}

export default Video