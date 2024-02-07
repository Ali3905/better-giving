import React, { useState } from 'react'
import JoinUsBanner from '../../components/JoinUsBanner'
import BenefitssCrousal from '../../components/BenefitssCrousal'
import Crousal from '../../components/Crousal'
import Button from '../../components/Button'

const Path = () => {
  const [path, setPath] = useState("non-profits")
  const [nonProfits, setNonProfits] = useState([{
    title: "Sustainable Impact",
    description: "Give the gift that keeps on giving by donating through nonprofit Sustainability Funds that invest and grow your donation",
    img_src: "/card_1_image.png",
  }, {
    title: "The World At Your Fingertips",
    description: "Donate to any nonprofit, anywhere in the world. Support local grassroots organizations who understand the problems on the ground",
    img_src: "/card_2_image_1.png",
  }, {
    title: "Impact Tracking and Transparency",
    description: "Our platform empowers donors with transparency, offering detailed information on how each charitable organization utilizes contributions to drive impactful change",
    img_src: "/card_3_image_1.png",
  },
  ])
  const [donors, setDonors] = useState([
    {
      title: "Seamless Setup",
      description: "Financially liberate your nonprofit with our free services – no setup or recurring costs, ensuring organizations can focus on their mission without budget constraints.",
      img_src: "/card_1_image.png",
    }, {
      title: "Automated Donation Process",
      description: "Spend less time on admin work and more on what matters with our streamlined donation processing, offering peace of mind and efficiency",
      img_src: "/card_2_image_1.png",
    }, {
      title: "Fundraising Tools",
      description: "Access a diverse range of fundraising tools and resources, designed to assist organizations in raising funds, orchestrating campaigns, and fostering effective donor engagement.",
      img_src: "/card_3_image_1.png",
    },
  ])

  return (
    <section className='px-[24px] lg:pt-0 lg:p-[128px] md:pt-0 md:p-[30px] pt-0 flex flex-col gap-[42px] mt-[-200px] xl:max-w-[1440px] xl:m-auto'>
      <div className='flex flex-col gap-[42px]'>
        <span className='flex flex-col items-center gap-2 '>
          <h3 className='text-[13px] md:text-[18px] uppercase font-bold text-[#2D89C8] Quicksand'>Bridge to better</h3>
          <h2 className='text-[32px] md:text-[42px] uppercase font-bold text-[#183244] lg:max-w-[75%] md:max-w-full text-balance mx-auto text-center Quicksand'>With Better Giving-Empower, Engage and Elevate</h2>
        </span>
        <span className='flex p-1 px-2 bg-[#F6EFE5] rounded-3xl gap-2 self-center'>
          <span className={`${path === "non-profits" ? "bg-white" : "bg-transparent"} p-2 px-4 rounded-3xl DM_Sans`} onClick={() => setPath("non-profits")}>For Nonprofits</span>
          <span className={`${path === "donors" ? "bg-white" : "bg-transparent"} p-2 px-4 rounded-3xl DM_Sans`} onClick={() => {setPath("donors"); console.log(12);}}>For Donors</span>
        </span>
        <p className='text-[18px] md:text-[28px] font-medium max-w-[70%] text-[#1D3C51] text-center text-balance mx-auto DM_Sans'>Accepting donations, support every giver, and offering services for free to charities all over the world.</p>
      </div>
      <BenefitssCrousal path={path} slides={path==="non-profits"?nonProfits:donors}/>
      <Crousal slides={path === "non-profits" ? nonProfits : donors} />
      <Button text={"Learn More"} className={"self-center"} />
    </section>
  )
}

export default Path