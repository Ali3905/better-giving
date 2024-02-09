import React from 'react'
import Card from './Card'
import Button from './Button'
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import './styles.css';

// import required modules
import { Navigation, Pagination } from 'swiper/modules';

const HeroBottom = () => {
  const donations = [{
    name: "Doctors Without Borders ",
    work: "Medical aid where it's needed most — independent, neutral, impartial",
    img_src: "/card-1.png",
    supporters_count: 1217
  }, {
    name: "United Nations Road Safety ",
    work: "The vision of the IJN Road Safety Fund is to build a world where roads are safe for every",
    img_src: "/card-2.png",
    supporters_count: 1242
  }, {
    name: "The Peer Power Foundation ",
    work: "Our mission is to inspire and empower youth to take control of their academic success through peer tutoring and mentoring.",
    img_src: "/card-3.png",
    supporters_count: 4342
  }, {
    name: "Doctors Without Borders ",
    work: "Medical aid where it's needed most — independent, neutral, impartial",
    img_src: "/card-1.png",
    supporters_count: 1217
  }, {
    name: "United Nations Road Safety ",
    work: "The vision of the IJN Road Safety Fund is to build a world where roads are safe for every",
    img_src: "/card-2.png",
    supporters_count: 1242
  }, {
    name: "The Peer Power Foundation ",
    work: "Our mission is to inspire and empower youth to take control of their academic success through peer tutoring and mentoring.",
    img_src: "/card-3.png",
    supporters_count: 4342
  },
  ]

  return (
    <div className='relative bottom-[300px] lg:bottom-[250px] z-10 pt-[150px] px-[24px] '>
      <img src="/map.png" alt="map" className='absolute bottom-[-10%] left-0 -z-10'/>
      <svg viewBox="0 0 1440 1533" fill="none" xmlns="http://www.w3.org/2000/svg" className='absolute top-0 left-0 z-[-8] overflow-hidden w-full h-full'>
        <g opacity="0.2" filter="url(#filter0_f_443_2773)">
          <path d="M195 1091.5C43.4 1208.3 -115.5 813.443 -157 685.443C-157 495.043 -547 418.11 -742 403.443C-485.667 390.943 162.4 362.643 704 349.443C1381 332.943 1489.5 782.943 947.5 685.443C405.5 587.943 384.5 945.5 195 1091.5Z" fill="#3DD3A6" fill-opacity="0.5" />
        </g>
        <defs>
          <filter id="filter0_f_443_2773" x="-1162" y="-71" width="2874.37" height="1603.84" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
            <feFlood flood-opacity="0" result="BackgroundImageFix" />
            <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
            <feGaussianBlur stdDeviation="210" result="effect1_foregroundBlur_443_2773" />
          </filter>
        </defs>
      </svg>
      <div className='bg_blur'></div>
      <div className=' absolute bottom-[0] right-[-20%] w-[60%] h-[60%] rounded-full bg-[#fdefd1]  z-[-12] blur-[450px]'></div>

      <div className='flex flex-col items-center gap-14'>
        <span className='flex flex-col items-center gap-2 '>
          <h3 className='text-lg uppercase font-bold text-[#2D89C8] Quicksand text-[13px] md:text-[18px]'>Bridge to better</h3>
          <h2 className='text-[32px] md:text-[42px] lg:w-full md:w-8/12 text-center font-bold text-[#183244] Quicksand'>Connecting Donors to Causes That Matter</h2>
        </span>
        <div className='flex gap-7'>            
        <div className='hidden md:block lg:hidden absolute bg-white h-[70%] w-[40%] z-[8] left-[-20%] blur-[100px] rounded-full'></div>
        <div className='limit-to-1200-on-big-screen'>
        <button className='p-3 bg-white rounded-full border border-solid shadow self-center cause-prev  left_arrow z-10 hidden md:block'>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="text-[#2D89C8] w-[24px] h-[24px] font-bold">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
            </svg>
            </button>
            <Swiper
        slidesPerView={3}
        loop={true}
        breakpoints={{
          300 : {
        spaceBetween : 20,
        slidesPerView: 1,
        // initialSlide : 2,
        centeredSlides : true
          },
          768 : {
        spaceBetween : 20,
        slidesPerView: 2,
        initialSlide : 2,
        centeredSlides : true
          },
          1100 : {
            slidesPerView: 3,
            spaceBetween : 20,
            // initialSlide : 0,
            // centeredSlides : true
          }
        }}
        navigation={{
          nextEl: '.cause-next',
          prevEl: '.cause-prev',
          clickable: true,
      }}
        modules={[Navigation]}
        className="cause-swiper"
      >
          {
            donations.map((ele, i) => {
              return <SwiperSlide><Card name={ele.name} work={ele.work} supporters_count={ele.supporters_count} img_src={ele.img_src} logo={`/Ellipse-${i+1}.png`} /></SwiperSlide>
            })
          }
          {/* <SwiperSlide className=''></SwiperSlide>
          <SwiperSlide className=''></SwiperSlide>
          <SwiperSlide className=''></SwiperSlide> */}
          {/* <SwiperSlide className='lg:hidden'></SwiperSlide> */}
          </Swiper>
        <button className='p-3  bg-white rounded-full border border-solid z-10 shadow self-center right_arrow cause-next hidden md:block'>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="text-[#2D89C8] w-[24px] h-[24px] font-bold ">
                <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
            </svg>
            </button>
            </div>
                <div className='hidden md:block lg:hidden absolute bg-white h-[70%] w-[40%] z-[8] right-[-20%] blur-[100px] rounded-full'></div>
        </div>
        <Button text={"Explore All Causes"} />
        <p className='bg-[#FFEECC] Gochi_Hand text-2xl py-1 px-8'>from all around the globe</p>
        {/* <img src="/map.svg" alt="map" className='absolute bottom-0 left-0 w-full h-full' /> */}
      </div>
      <img src="/frame_1.png" alt="frame1" className='img_frame absolute top-[15%] left-[5%] -z-10'/>
      <img src="/frame_2.png" alt="frame2" className='img_frame absolute top-[8%] left-[80%]  -z-10'/>
      <img src="/frame_4.png" alt="frame3" className='img_frame absolute top-[50%] left-[-4%] -z-10'/>
      <img src="/frame_4.png" alt="frame4" className='img_frame absolute top-[30%] left-[35%] -z-10'/>
      <img src="/frame_5.png" alt="frame5" className='img_frame absolute top-[30%] left-[97%] -z-10'/>
      <img src="/frame_6.png" alt="frame6" className='img_frame absolute top-[45%] left-[90%] -z-10'/>
      {/* <img src="/frame_7.png" alt="frame7" className='absolute top-[20%] left-[10%] -z-10'/> */}
      {/* <img src="/frame_1.png" alt="frame" className='absolute top-[20%] left-[10%] -z-10'/> */}
    </div>
  )
}

export default HeroBottom