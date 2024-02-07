import "../styles/writeBlog.css";
import { useEffect, useRef, useState } from "react";
import "react-quill/dist/quill.bubble.css";
import { useParams, useNavigate as useRouter } from "react-router-dom";
// import { useSession } from "next-auth/react";
import ReactQuill from "react-quill";
import axios from "axios";
import Quill from "quill";
import { Chips } from "primereact/chips";

const EditBlog = () => {
  //   const { status } = useSession();
  const router = useRouter();

  const [open, setOpen] = useState(false);
  const [file, setFile] = useState(null);
  const [preview, setPreview] = useState(null)
  const [media, setMedia] = useState("");
  const [value, setValue] = useState("");
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");

  const quillRef = useRef()
  const inputRef = useRef()


  const { id } = useParams()
  



  const handleImage = async (e) => {
  
    // input.onchange = async () => {
      const file = e.target.files[0];
      const form = new FormData();
      form.append('media', file);
  
      // Replace 'YOUR_IMAGE_UPLOAD_ENDPOINT' with your actual image upload endpoint
      const response = await axios({
        url : `/api/media`,
        method: 'post',
        data: form,
      });

  
      if (response.data.success) {
        const imageUrl =  `${process.env.REACT_APP_API_HOST}/uploads/` + response.data.media;
  
        const quill = quillRef.current.getEditor();
        const range = quill.getSelection(true);
        quill.insertEmbed(range.index, 'image', imageUrl);
        quill.setSelection(range.index + 1);
        setOpen(false)
      } else {
        console.error('Image upload failed');
      }
    // };
  };

  const modules = {
    toolbar: {
      container: [
        [{ header: '1' }, { header: '2' }],
        // [{ size: [] }],
        ['bold', 'italic', 'underline', 'blockquote'],
        [{ 'align': [] }],
        // [{ color: [] }, { background: [] }],
        // [{ list: 'ordered' }, { list: 'bullet' }],
        ['link', 'video'],
        // ['clean'],
        // ['code-block'],
        // ['mention'],
      ]
    },
  }


  useEffect(() => {
    
    if (file) {
      const objectUrl = URL.createObjectURL(file)
      setPreview(objectUrl)
    }
  }, [file]);

  useEffect(()=>{
    const getBlog = async() => {
        const res = await axios({
            method : "get",
            url : `/api/blogs/${id}`
        })
        if (res.data.success === true) {
            setTitle(res.data.Blog.title)
            setValue(res.data.Blog.description)
            setPreview(res.data.Blog.thumbnail !== "null" && res.data.Blog.thumbnail && `${process.env.REACT_APP_API_HOST}/uploads/${res.data.Blog.thumbnail}`)
            setCategory(res.data.Blog.category)
        }else(
            alert("Something went wrong")
        )
    }
    getBlog()
}, [])



  const slugify = (str) =>
    str
      .toLowerCase()
      .trim()
      .replace(/[^\w\s-]/g, "")
      .replace(/[\s_-]+/g, "-")
      .replace(/^-+|-+$/g, "");

  const handleSubmit = async () => {
    try {
      const formData = new FormData()
      formData.append("title", title)
      formData.append("description", value)
      for (var i = 0; i < category.length; i++) {
        formData.append('category', category[i].toLocaleLowerCase());
      }
      if (file) {
          formData.append("thumbnail", file)
      }

      const res = await axios({
        url: `/api/blogs/${id}`,
        method: "patch",
        data: formData,
        headers: {
          authToken: localStorage.getItem("token")
        }
      })
      if (res.data.success !== true) {
        return alert(res.data.message)
      }
      alert("Blog Edited")
      router("/")
    } catch (error) {
      console.log(error);
    }
  };
  

  return (
    <div className={"write_blog_container"}>
      <span className="flex flex-col-reverse justify-between lg:flex-row gap-4">
    
      <input
        type="text"
        placeholder="Title"
        className={"input"}
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        />


{
        file || preview ?
        <label htmlFor="coverImage" className="self-center lg:self-end" ref={inputRef}>
            <input
                  type="file"
                  id="coverImage"
                //   ref={inputRef}
                  accept="image/*"
                  onChange={(e)=>setFile(e.target.files[0])}
                  style={{ display: "none" }}
                />
            <img src={preview} alt="cover" className="self-center lg:self-end max-w-[300px] max-h-[250px]" onClick={()=>inputRef.current.focus()} /> 
            </label>
        :
        <div className={"self-center max-w-[300px] max-h-[250px]"}>
                <input
                  type="file"
                  id="image"
                //   ref={inputRef}
                  accept="image/*"
                  onChange={(e)=>setFile(e.target.files[0])}
                  style={{ display: "none" }}
                />
            <label htmlFor="image" className="w-[100px] h-[100px] p-4">
                {/* <button className={"addButton"}> */}
                    <img src="/image.png" alt="" width={26} height={26} />
                {/* </button> */}
                  </label>
                </div>
      }

        </span>
        <Chips value={category} onChange={(e) => setCategory(e.value)}  className="category border-none" placeholder="Add category"/>

      <div className={"editor"}>
        {
          <>
          <button className={"button"} onClick={() => setOpen(!open)}>
            <img src="/plus.png" alt="" width={16} height={16} />
          </button>
            {open && (
              <div className={"add"}>
                <input
                  type="file"
                  id="image"
                  accept="image/*"
                  onChange={handleImage}
                  style={{ display: "none" }}
                />
                <button className={"addButton"}>
                  <label htmlFor="image">
                    <img src="/image.png" alt="" width={16} height={16} />
                  </label>
                </button>
                {/* <button className={"addButton"}>
              <img src="/external.png" alt="" width={16} height={16} />
            </button>
            <button className={"addButton"}>
              <img src="/video.png" alt="" width={16} height={16} />
            </button> */}
              </div>
            )}
          </>
        }
        <ReactQuill
          className={"textArea"}
          modules={modules}
          theme="bubble"
          value={value}
          ref={quillRef}
          onChange={setValue}
          placeholder="Tell your story..."
        />
      </div>
      <button className={"publish"} onClick={handleSubmit}>
        Edit
      </button>
      

      {/* <div dangerouslySetInnerHTML={{ __html:  }}> */}

      {/* </div> */}
    </div>
  );
};

export default EditBlog;