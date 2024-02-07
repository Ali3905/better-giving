import React from 'react'
import CRUDButtons from './CRUDButtons'

const TestimonialCard = (props) => {
  return (
    <div className={`relative w-[360px] min-h-[450px] p-[32px] pt-[50px] border border-solid rounded-3xl flex flex-col justify-between bg-white DM_Sans blog_card overflow ${props.className}`}>
      {props.role==="ADMIN" && <CRUDButtons handleDelete={props.handleDelete} id={props.id} />}
        <img src={`${process.env.REACT_APP_API_HOST}/uploads/${props.reviewer_logo}`} alt="logo" className='h-[80px] w-[80px] absolute top-[-40px] left-[50px] rounded-xl bg-white'/>
        <p className='text-xl overflow-x-hidden'>{props.review || "We are in love with the easy process Better Giving has created to start an endowment. We always focused on recurring giving with donors. This takes it to the next level."}</p>
        <span>
            <p className='text-lg font-bold'>{props.reviewer || "Amber Olive"}</p>
            <p className='text-lg'>{props.reviewer_profession || "Associate director, Australia Aid"}</p>
        </span>
    </div>
  )
}

export default TestimonialCard