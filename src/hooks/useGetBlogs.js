import { useEffect, useState } from "react"
import axios from "axios"

export default function useGetBlogs (initial, num) {
    const [blogs, setBlogs] = useState(initial)

    useEffect(() => {
        const fetchBlogs = async() => {
            const res = await axios({
                method : "get",
                url : "/api/blogs"
            })
            if (res.data.success === true) {
                setBlogs(res.data.Blogs)
            }
            else {
                alert("Could not get blogs")
            }
        }

        fetchBlogs()
    }, [num])

    return [blogs, setBlogs]
}