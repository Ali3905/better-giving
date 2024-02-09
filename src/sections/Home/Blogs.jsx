import React, { useState } from 'react'
import BlogCard from '../../components/BlogCard'
import useGetBlogs from "../../hooks/useGetBlogs"
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import './styles.css';

// import required modules
import { Navigation, Pagination } from 'swiper/modules';

const Blogs = () => {
    const [blogs, setBlogs] = useGetBlogs([{
        title: "Why donate to a ‘Long Tail’ Charity?",
        description: "Medical aid where it's needed most — independent, neutral, impartial",
        tags: ["newstag", "newstag2"],
        thumbnail_src: "/blog_thumbnail_1.png"
    }, {
        title: "Is an endowment a realistic or even a good idea for a charity? Big or small?",
        description: "Medical aid where it's needed most — independent, neutral, impartial",
        tags: ["newstag", "newstag2"],
        thumbnail_src: "/blog_thumbnail_2.png"
    }, {
        title: "Why donate to a ‘Long Tail’ Charity?",
        description: "Medical aid where it's needed most — independent, neutral, impartial",
        tags: ["newstag", "newstag2"],
        thumbnail_src: "/blog_thumbnail_3.png"
    }, {
        title: "Is an endowment a realistic or even a good idea for a charity? Big or small?",
        description: "Medical aid where it's needed most — independent, neutral, impartial",
        tags: ["newstag", "newstag2"],
        thumbnail_src: "/blog_thumbnail_2.png"
    }, {
        title: "Why donate to a ‘Long Tail’ Charity?",
        description: "Medical aid where it's needed most — independent, neutral, impartial",
        tags: ["newstag", "newstag2"],
        thumbnail_src: "/blog_thumbnail_3.png"
    },
    ])
    
    return (
        <section className='xl:px-[126px] lg:px-[60px] md:px-[30px] flex flex-col gap-[56px] py-[90px] blogs relative z-10'>
            <svg xmlns="http://www.w3.org/2000/svg" width="156" height="286" viewBox="0 0 156 286" fill="none" className='absolute top-[40%] right-0'>
                <path opacity="0.4" fill-rule="evenodd" clip-rule="evenodd" d="M36.6441 1.54872C50.4083 4.61319 59.0818 18.2574 56.0168 32.024C36.0944 121.507 92.472 210.194 181.94 230.113C271.407 250.032 360.086 193.64 380.008 104.157C383.073 90.3908 396.716 81.715 410.48 84.7795C424.244 87.844 432.918 101.488 429.853 115.255C403.8 232.271 287.837 306.015 170.84 279.967C53.8442 253.919 -19.8803 137.942 6.17203 20.9266C9.23702 7.16001 22.8798 -1.51575 36.6441 1.54872Z" fill="#FDE3D8" />
            </svg>
            <h2 className='text-[#183244] text-[32px] md:text-[42px] font-bold text-center Quicksand'>Check out the latest</h2>
            {/* <div className='flex gap-[40px] justify-evenly items-center'> */}
            <div className='hidden md:block lg:hidden absolute bg-white h-full w-[40%] z-[8] left-[-20%] blur-[100px] rounded-full'></div>
            <div className='limit-to-1200-on-big-screen'>
                <button className='prev p-3 bg-white rounded-full border border-solid shadow lg:static lg:top-0 lg:left-0 absolute top-[50%] left-[2%] left_arrow z-10 hidden md:block self-center'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="text-[#2D89C8] w-[24px] h-[24px] font-bold">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
                    </svg>
                </button>
                <Swiper
                    slidesPerView={3}
                    loop={true}
                    // spaceBetween={24}
                    breakpoints={{
                        768 : {
                    //   spaceBetween : 20,
                      slidesPerView: 2,
                      initialSlide : 1,
                      centeredSlides : true
                        },
                        300 : {
                    //   spaceBetween : 20,
                      slidesPerView: 1,
                      initialSlide : 1,
                      centeredSlides : true
                        },
                        1100 : {
                          spaceBetween : 20,
                          slidesPerView: 3,
                          // initialSlide : 0,
                          // centeredSlides : true
                        }
                      }}
                    navigation={{
                        nextEl: '.next-blog',
                        prevEl: '.prev',
                        clickable: true,
                    }}
                    // pagination={{
                    //   clickable: true,
                    // }}
                    modules={[Navigation]}
                    className="blog_crousal"
                >
                    {/* <div className='flex gap-6'> */}
                    {blogs.map((ele) => {
                        return <SwiperSlide className='w-[300px]'><BlogCard blog={ele} /></SwiperSlide>
                        // <BlogCard blog={ele} />
                    })}
                    {/* <SwiperSlide></SwiperSlide> */}
                </Swiper>
                {/* </div> */}
                <button className='next-blog p-3  bg-white rounded-full border border-solid z-20 shadow lg:static lg:top-0 lg:right-0 absolute top-[50%] right-[2%] hidden md:block self-center'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="text-[#2D89C8] w-[24px] h-[24px] font-bold ">
                        <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                    </svg>
                </button>

                </div>
                <div className='hidden md:block lg:hidden absolute bg-white h-full w-[40%] z-[8] right-[-20%] blur-[100px] rounded-full '></div>
            {/* </div> */}


        </section>
    )
}

export default Blogs
