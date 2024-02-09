import React, { useEffect } from 'react'
import "../styles/MobileAnimation.css"
import StepsCard from './StepsCard'

import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { MotionPathPlugin } from 'gsap/MotionPathPlugin';
import AnimationHeading from './AnimationHeading';

// gsap.registerPlugin(ScrollTrigger, MotionPathPlugin);

const MobileAnimation = () => {

  // useEffect(() => {
  //   gsap.defaults({ ease: "none" });

  //   const mobile = gsap
  //     .timeline({
  //       scrollTrigger: {
  //         trigger: "#svg3",
  //         scrub: 0.4,
  //         start: "top 30%",
  //         end: "100% 50%",
  //       },
  //       duration: 20,
  //     })
  //     .from(".line2", { duration: 10 }, 0)
  //     .to(
  //       ".dot",
  //       {
  //         motionPath: {
  //           path: ".line2",
  //           align: ".line2",
  //           alignOrigin: [0.5, 0.5],
  //         },
  //         duration: 15,
  //       },
  //       0
  //     )

  // },[])


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
    <div className='md:hidden mobile_animation relative overflow-visible'>
        <svg id='svg3' xmlns="http://www.w3.org/2000/svg" width="100%" height="1970" viewBox="0 0 360 1970" fill="none">
        <path class="line2" d="M153.309 23C47.6725 28.2255 -103.673 36.7785 -2.79612 226.945C98.0809 417.111 367.742 284.47 379.727 535.49C391.712 786.51 -62.7237 797.919 3.19453 1152.1C69.1127 1506.29 492.587 1264.78 522.051 1629.42C551.514 1994.07 238.403 1623.72 161.498 1947" stroke="url(#paint0_linear_1054_18924)" stroke-width="46" stroke-linecap="round"/>

<defs>
<linearGradient id="paint0_linear_1054_18924" x1="42.1468" y1="42.008" x2="83.7127" y2="1924.94" gradientUnits="userSpaceOnUse">
<stop stop-color="#FEFBFC"/>
<stop offset="0.0747417" stop-color="#F1ECFD"/>
<stop offset="0.195424" stop-color="#FEFBFC"/>
<stop offset="0.324275" stop-color="#ECF2FD"/>
<stop offset="0.508205" stop-color="#FEFBFC"/>
<stop offset="0.626472" stop-color="#ECFBFD"/>
<stop offset="0.754949" stop-color="#ECF2FD"/>
<stop offset="0.896279" stop-color="#ECF2FD"/>
<stop offset="1" stop-color="#FEFBFC"/>
</linearGradient>
</defs>
</svg>
       <div class="dot dot1"></div>
       <div className='absolute top-0 h-full flex flex-col justify-between px-[38px]'>
        <AnimationHeading />
        {
          steps.map((step)=>{
            return <StepsCard step={step} />
          })
        }
        </div>
        
        <div className='h-[300px]'></div>
    </div>
  )
}

export default MobileAnimation