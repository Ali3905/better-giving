import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const CreateTestimonial = () => {
    const [testimonial, setTestimonial] = useState({
        review : "",
        reviewer : "",
        reviewer_profession : "",
        reviewer_logo : null
    })
    const navigate = useNavigate()

    const handleCreateTestimonial = async(e) => {
        e.preventDefault()
        const formData = new FormData(e.target)
        const res = await axios({
            method : "post",
            url : "/api/testimonials",
            data : formData
        })
        if (res.data.success === true) {
            alert("Testimonial has been created")
            navigate("/dashboard")
        }else {
            alert("Could not create Testimonial")
        }
    }

    const handleChange = (e) => {
        setTestimonial({...testimonial, [e.target.name] : e.target.value})
    }

    return (
        <form className='flex flex-col items-center justify-center gap-5' onSubmit={handleCreateTestimonial}>
            <p className='text-[42px]'>Create New Testimonial</p>


            <label htmlFor="reviewer" className='flex flex-col gap-1 w-[30%]'>Reviewer
            <input type="text" name='reviewer' id='reviewer' className='border border-solid border-gray-500 w-full rounded-md p-2 outline-none' onChange={handleChange}/>
            </label>

            <label htmlFor="reviewer_profession" className='flex flex-col gap-1 w-[30%]'>Reviewer Profession
            <input type="text" name='reviewer_profession' id='reviewer_profession' className='border border-solid border-gray-500 w-full rounded-md p-2 outline-none' onChange={handleChange}/>
            </label>

            <label htmlFor="reviewer_logo" className='flex flex-col gap-1 w-[30%]'>Reviewer Logo
            <input type="file" name='reviewer_logo' id='reviewer_logo' className='w-full rounded-md' onChange={(e)=>setTestimonial({...testimonial, reviewer_logo : e.target.files[0]})}/>
            </label>

            <label htmlFor="review" className='flex flex-col gap-1 w-[30%]'>Review
            <textarea type="text" name='review' id='review' className='border border-solid border-gray-500 w-full rounded-md p-2 outline-none' onChange={handleChange}/>
            </label>

            <button className={`${!testimonial.review || !testimonial.reviewer || !testimonial.reviewer_profession || !testimonial.reviewer_logo ? "bg-[#bbd6e8]" : "bg-[#2D89C8]"} p-2 text-white rounded-md`} type='submit' disabled={!testimonial.review || !testimonial.reviewer || !testimonial.reviewer_profession || !testimonial.reviewer_logo ? true : false}>Create</button>
        </form>
    )
}

export default CreateTestimonial