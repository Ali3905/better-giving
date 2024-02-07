import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

const EditTestimonial = () => {
    const [testimonial, setTestimonial] = useState({
        review : "",
        reviewer : "",
        reviewer_profession : ""
    })

    const { id } = useParams()
    const navigate = useNavigate()

    const handleEditTestimonial = async(e) => {
        e.preventDefault()
        const formData = new FormData(e.target)
        const res = await axios({
            method : "patch",
            url : `/api/testimonials/${id}`,
            data : formData
        })
        if (res.data.success === true) {
            alert("Testimonial has been updated")
            navigate("/dashboard")
        }else {
            alert("Could not update Testimonial")
        }
    }

    const handleChange = (e) => {
        setTestimonial({...testimonial, [e.target.name] : e.target.value})
    }

    useEffect(()=>{
        const getTestimonial = async() => {
            const res = await axios({
                method : "get",
                url : `/api/testimonials/${id}`
            })
            if (res.data.success === true) {
                setTestimonial(res.data.Testimonial)
            }else(
                alert("Something went wrong")
            )
        }
        getTestimonial()
    }, [])

    return (
        <form className='flex flex-col items-center justify-center gap-5' onSubmit={handleEditTestimonial}>
            <p className='text-[42px]'>Edit Testimonial</p>


            <label htmlFor="reviewer" className='flex flex-col gap-1 w-[30%]'>Reviewer
            <input type="text" name='reviewer' id='reviewer' className='border border-solid border-gray-500 w-full rounded-md p-2 outline-none' value={testimonial?.reviewer} onChange={handleChange}/>
            </label>

            <label htmlFor="reviewer_profession" className='flex flex-col gap-1 w-[30%]'>Reviewer Profession
            <input type="text" name='reviewer_profession' id='reviewer_profession' className='border border-solid border-gray-500 w-full rounded-md p-2 outline-none' value={testimonial?.reviewer_profession} onChange={handleChange}/>
            </label>

            <label htmlFor="reviewer_logo" className='flex flex-col gap-1 w-[30%]'>Reviewer Logo
            <input type="file" name='reviewer_logo' id='reviewer_logo' className='w-full rounded-md'/>
            </label>

            <label htmlFor="review" className='flex flex-col gap-1 w-[30%]'>Review
            <textarea type="text" name='review' id='review' className='border border-solid border-gray-500 w-full rounded-md p-2 outline-none' value={testimonial?.review} onChange={handleChange}/>
            </label>

            <button className='bg-[#2D89C8] p-2 text-white rounded-md' type='submit'>Update</button>
        </form>
    )
}

export default EditTestimonial