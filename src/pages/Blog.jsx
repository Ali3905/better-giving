// import Menu from "@/components/Menu/Menu";
import { useEffect, useState } from "react";
import Comments from "../components/Comments";
import Menu from "../components/Menu";
import "../styles/BlogPage.css"
import { useParams } from "react-router-dom";
import axios from "axios";


const Blog = () => {
  const [data, setData] = useState({
    title : "This is titlte",
    description : "This is description",
    img : "/blog_thumbnail_1.png",
    user : {
        name : "Ali writer",
        image : "/external.png"
    }
  })
  const { id } = useParams();


  
  const formatDate = (inputDate) => {
    const date = new Date(inputDate);
    
    const options = { 
      day: 'numeric', 
      month: 'short', 
      year: 'numeric' 
    };
  
    return date.toLocaleDateString('en-GB', options);
  };

  const getBlog = async() => {
    try {
      const res = await axios({
        url : `/api/blogs/${id}`,
        method : "get",
  
      })
      setData(res.data.Blog)
    } catch (error) {
      alert(error.message)
    }
  }
  useEffect(()=>{

    getBlog()
  }, [id])


//   const data = await getData(slug);

  return (
    <div className={"blog_container"}>
      <div className={"infoContainer md:flex-row flex-col-reverse"}>
        <div className={"textContainer"}>
          <h1 className={"title"}>{data?.title}</h1>
          <div className={"user"}>
            {data?.user?.avatar && (
              <div className={"userImageContainer"}>
                <img src={`/${process.env.REACT_APP_API_HOST}uploads/${data?.user.avatar}`} alt="" fill className={"avatar"} />
              </div>
            )}
            <div className={"userTextContainer"}>
              <span className={"username"}>{data?.user.userName}</span>
              <span className={"date"}>{formatDate(data?.createdAt)}</span>
            </div>
          </div>
        </div>
        {data?.thumbnail && (
          <div className={"blog_imageContainer"}>
            <img src={`${process.env.REACT_APP_API_HOST}/uploads/${data.thumbnail}`} alt="" fill className={"blog_image"} />
          </div>
        )}
      </div>
      <div className={"content"}>
        <div className={"post"}>
          <div
            className={"description"}
            dangerouslySetInnerHTML={{ __html: data?.description }}
          />
          <div className={"comment"}>
            <Comments id={id} comments={data.comments} blogId={id} getBlog={getBlog} />
          </div>
        </div>
        <Menu />
      </div>
    </div>
  );
};

export default Blog;