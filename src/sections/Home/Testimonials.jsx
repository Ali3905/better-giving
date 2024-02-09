import React, { useState } from 'react'
import TestimonialCard from '../../components/TestimonialCard'
import useGetTestimonials from "../../hooks/useGetTestimonials"
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import './styles.css';

// import required modules
import { Navigation, Pagination } from 'swiper/modules';

const Testimonials = () => {
    const [testimonials, setTestimonials] = useGetTestimonials([{
        review: "We are in love with the easy process Better Giving has created to start an endowment. We always focused on recurring giving with donors. This takes it to the next level.",
        reviewer: "Amber Olive",
        reviewer_profession: "Associate director, Australia Aid",
        reviewer_logo: "/reviewer_logo_1.png"
    }, {
        review: "We are in love with the easy process Better Giving has created to start an endowment. We always focused on recurring giving with donors. This takes it to the next level. I think we can grow our endowment to preserve our efforts through time.",
        reviewer: "Daniel Carranza",
        reviewer_profession: "Associate director, Australia Aid",
        reviewer_logo: "/reviewer_logo_2.png"
    }, {
        review: "Having an untied, passive income stream from an endowment is highly appealing to complement our other revenue streams",
        reviewer: "Sarah Hornby",
        reviewer_profession: "Associate director, Australia Aid",
        reviewer_logo: "/reviewer_logo_3.png"
    },
    ])
    return (
        <div className='lg:p-[100px] md:px-[30px] md:py-[100px] flex flex-col gap-[50px] relative'>
            {/* <p className='text-center text-[144px] font-bold text-[#2D89C8] leading-3'>“</p> */}
            {/* <div> */}
            <button className='testimonial-prev p-3 bg-white rounded-full border border-solid shadow absolute top-[60%] left-[2%]  z-10 hidden md:block lg:hidden self-center'>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="text-[#2D89C8] w-[24px] h-[24px] font-bold">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
                </svg>
            </button>
            <button className='testimonial-next p-3  bg-white rounded-full border border-solid z-20 shadow absolute top-[60%] right-[2%] hidden md:block lg:hiddenself-center'>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="text-[#2D89C8] w-[24px] h-[24px] font-bold ">
                    <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                </svg>
            </button>
            {/* </div> */}
            <svg xmlns="http://www.w3.org/2000/svg" width="287" height="358" viewBox="0 0 287 358" fill="none" className='absolute top-[15%] left-0'>
                <path opacity="0.4" fill-rule="evenodd" clip-rule="evenodd" d="M-186.87 150.179C-171.375 144.719 -154.386 152.856 -148.926 168.354C-113.43 269.088 -3.00679 321.979 97.7107 286.489C198.428 250.999 251.301 140.567 215.805 39.8331C210.344 24.3355 218.478 7.34603 233.973 1.88603C249.468 -3.57398 266.456 4.56309 271.917 20.0607C318.335 151.79 249.194 296.201 117.486 342.611C-14.221 389.021 -158.62 319.856 -205.038 188.126C-210.499 172.629 -202.365 155.639 -186.87 150.179Z" fill="#D8E9FD" />
            </svg>
            <img src='/quotation.svg' alt="quotation mark" className='h-[100px] w-[100px] m-auto' />
            <h2 className='lg:max-w-[50%] mx-auto text-center text-balance text-[42px] font-bold Quicksand'>Amazing stories from our customers</h2>
            <div className='hidden lg:flex justify-center gap-[18px] relative'>
                {
                    testimonials.map((ele, i) => {
                        if (i < testimonials.length - 3) {
                            return null
                        } else {

                            return <TestimonialCard review={ele.review} reviewer={ele.reviewer} reviewer_profession={ele.reviewer_profession} reviewer_logo={ele.reviewer_logo} />
                        }
                    })
                }
            </div>
            <Swiper
                slidesPerView={3}
                spaceBetween={24}
                loop={true}
                breakpoints={{
                    768: {
                        //   spaceBetween : 20,
                        slidesPerView: 2,
                        initialSlide: 1,
                        centeredSlides: true
                    },
                    300: {
                        //   spaceBetween : 20,
                        slidesPerView: 1,
                        initialSlide: 1,
                        centeredSlides: true,
                        spaceBetween: 24,
                    },
                    1100: {
                        spaceBetween: 20,
                        // initialSlide : 0,
                        // centeredSlides : true
                    }
                }}
                navigation={{
                    nextEl: '.testimonial-next',
                    prevEl: '.testimonial-prev',
                    clickable: true,
                }}
                // pagination={{
                //   clickable: true,
                // }}
                modules={[Navigation]}
                className="testimonial_swiper hidden"
            >
                {
                    testimonials.map((ele, i) => {
                        if (i < testimonials.length - 3) {
                            return null
                        } else {

                            return <SwiperSlide> <TestimonialCard review={ele.review} reviewer={ele.reviewer} reviewer_profession={ele.reviewer_profession} reviewer_logo={ele.reviewer_logo} /> </SwiperSlide>
                        }
                    })
                }
            </Swiper>

        </div>
    )
}

export default Testimonials