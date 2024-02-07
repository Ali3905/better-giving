import React, { useEffect } from 'react'
import "../styles/TabletAnimation.css"
import StepsCard from './StepsCard'
import AnimationHeading from './AnimationHeading';

import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { MotionPathPlugin } from 'gsap/MotionPathPlugin';

gsap.registerPlugin(ScrollTrigger, MotionPathPlugin);


const TabletAnimation = () => {

  useEffect(() => {
    gsap.defaults({ ease: "none" });

    const tab = gsap
      .timeline({
        scrollTrigger: {
          trigger: "#svg5",
          scrub: 0.4,
          start: "top 40%",
          end: "bottom 40%",
        },
        duration: 20,
      })
      .from(".line1", { duration: 10 }, 0)
      .to(
        ".dot",
        {
          motionPath: {
            path: ".line1",
            align: ".line1",
            alignOrigin: [0.5, 0.5],
          },
          duration: 15,
        },
        0
      )

  },[])
  const steps = [{
    "img_src" : "/step1.png",
    "title" : "Donor Engagement",
    "description" : "Donors initiate the process by either directly contributing to a nonprofit or establishing their own Sustainability Fund, akin to a donor-advised fund, through Better Giving.",
  },{
    "img_src" : "/step2.png",
    "title" : "Customized Allocations",
    "description" : "Donors exercise control by choosing the percentage split between a direct donation to a nonprofit and the allocation to their Sustainability Fund when making contributions.",
  },{
    "img_src" : "/step1.png",
    "title" : "Efficient Donation Processing",
    "description" : "All donations seamlessly flow through the Better Giving platform. Direct donations to nonprofits are swiftly granted every week, ensuring immediate impact. Sustainability Funds are strategically invested for growth and pay out dividends quarterly, fostering continuous support and long-term impact.",
  },{
    "img_src" : "/logo.png",
    "title" : "Results",
    "description" : "Better Giving creates a dynamic and personalized giving experience, allowing donors to make an immediate impact while also fostering the long-term sustainability of nonprofits through thoughtful investment strategies.",
  },
]

  return (
    <div className='hidden md:block lg:hidden tablet_animation relative'>
      <svg id='svg5' xmlns="http://www.w3.org/2000/svg" width="387" height="1781" viewBox="0 0 387 1781" fill="none">
  <path class="line1" d="M338.463 45.3655C200.497 -20.9994 -14.9573 74.0563 -6.99955 225.5C0.958218 376.944 351 305.5 363 569.5C375 833.5 39.5 953 93 1221C146.5 1489 309.5 1459.5 303.5 1757.5" stroke="url(#paint0_linear_1039_8357)" stroke-width="46" stroke-linecap="round"/>
  <defs>
    <linearGradient id="paint0_linear_1039_8357" x1="205" y1="-24" x2="112.358" y2="1754.58" gradientUnits="userSpaceOnUse">
      <stop stop-color="#FEFBFC"/>
      <stop offset="0.133358" stop-color="#F1ECFD"/>
      <stop offset="0.311758" stop-color="#FEFBFC"/>
      <stop offset="0.364207" stop-color="#ECF2FD"/>
      <stop offset="0.528306" stop-color="#ECF2FD"/>
      <stop offset="0.753451" stop-color="#ECFBFD"/>
      <stop offset="1" stop-color="#FEFBFC"/>
    </linearGradient>
  </defs>
      </svg>
       <div class="dot dot1">
       
       </div>
       <div className='absolute top-0 h-full flex flex-col justify-between px-[38px]'>
         <AnimationHeading />
        {
          steps.map((step)=>{
            return <StepsCard step={step} />
          })
        }
        
          {/* <StepsCard />
          <StepsCard />
          <StepsCard />
          <StepsCard /> */}
        
       </div>
    </div>
  )
}

export default TabletAnimation