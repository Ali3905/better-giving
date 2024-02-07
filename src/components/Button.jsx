import React from 'react'
import { FaArrowRight } from "react-icons/fa";

const Button = (props) => {
  return (
    <button className='px-10 py-5 bg-[#2D89C8] text-white rounded-[40px] font-bold flex items-center gap-3 Quicksand self-center'>
        {props.text}
        {/* <svg xmlns="http://www.w3.org/2000/svg" width="25" height="24" viewBox="0 0 25 24" fill="none">
  <path d="M4.5 12H20.5" stroke="white" stroke-width="2" stroke-linecap="square"/>
  <path d="M20.5 12C16.0817 12 12.5 8.41828 12.5 4" stroke="white" stroke-width="2" stroke-linecap="square"/>
  <path d="M20.5 12C16.0817 12 12.5 15.5817 12.5 20" stroke="white" stroke-width="2" stroke-linecap="square"/>
</svg> */}
     <FaArrowRight />
    </button>
  )
}

export default Button