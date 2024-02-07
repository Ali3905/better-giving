import React, { useContext, useEffect } from 'react'
import Blogs from '../components/Blogs'
import Testimonials from '../components/Testimonials'
import AdminNavbar from '../components/AdminNavbar'
import { PageContext } from '../state/PageState'
import useGetUser from '../hooks/useGetUser'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import MakeAdmin from '../components/MakeAdmin'

const Dashboard = () => {
  // const [user, setUser] = useGetUser({})
  const { page } = useContext(PageContext)
  const navigate = useNavigate()
  useEffect(()=>{
      
      if(!localStorage.getItem("token")){
        navigate("/")
      }else {
        const getUser = async() => {
          const res = await axios({
              method : "get",
              url : "/api/user/getUser",
              headers : {
                  authToken : localStorage.getItem("token")
              }
          })
          if (res.data.User.role === "NORMAL") {
              navigate("/")
          }
          else {
              // alert("Could not get User")
          }
      }
      getUser()
      
      }
    // }
  }, [])
  return (
    <>
        <AdminNavbar />
        {
          page === "blog"?
          <Blogs /> : page === "makeAdmin" ?  <MakeAdmin />  : <Testimonials />
        }
    </>
  )
}

export default Dashboard