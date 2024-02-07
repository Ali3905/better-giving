import "../styles/writeBlog.css";
import { useEffect, useRef, useState } from "react";
import "react-quill/dist/quill.bubble.css";
import { useParams, useNavigate as useRouter } from "react-router-dom";
// import { useSession } from "next-auth/react";
import ReactQuill from "react-quill";
import axios from "axios";
import { Chips } from 'primereact/chips';
import "primereact/resources/themes/lara-light-cyan/theme.css";

const WritePage = () => {
  //   const { status } = useSession();
  const router = useRouter();

  const [open, setOpen] = useState(false);
  const [file, setFile] = useState(null);
  const [preview, setPreview] = useState(null)
  const [media, setMedia] = useState("");
  const [value, setValue] = useState("");
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState([])

  const quillRef = useRef()





  const handleImage = async (e) => {
    
      const form = new FormData();
      form.append('media', e.target.files[0]);
  
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

        // quill.insertText(range.index, '\n');
  
  // Move the cursor to the next line
  // quill.setSelection(range.index + 1);
  
        quill.insertEmbed(range.index, 'image', imageUrl);

        // Select the inserted image
      const image = quillRef.current.getEditor().getLeaf(range.index)[0];
      if (image && image.domNode && image.domNode.style) {
        // Center the image by applying CSS styles
        image.domNode.style.marginLeft = 'auto';
        image.domNode.style.marginRight = 'auto';
        image.domNode.style.display = 'block'; // Ensure it's a block-level element
      }

      // Move the selection after the inserted image
      quill.setSelection(range.index + 1);
        // quill.setSelection(range.index + 1);
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
        formData.append('category', category[i].toLowerCase());
      }
      formData.append("thumbnail", file)

      const res = await axios({
        url: `/api/blogs`,
        method: "post",
        data: formData,
        headers: {
          authToken: localStorage.getItem("token")
        }
      })
      if (res.data.success !== true) {
        return alert(res.data.message)
      }
      alert("Blog created")
      router("/")
    } catch (error) {
    }
  };


  return (
    <div className={"write_blog_container"}>
      <span className="flex flex-col-reverse lg:flex-row gap-4">
    
      <input
        type="text"
        placeholder="Title"
        className={"input"}
        onChange={(e) => setTitle(e.target.value)}
        />

{
        file ?
        
        <label htmlFor="CoverImage">
        <input
                  type="file"
                  id="CoverImage"
                  accept="image/*"
                  onChange={(e)=>setFile(e.target.files[0])}
                  style={{ display: "none" }}
                />
        <img src={preview} alt="CoverImage" className="self-center lg:self-end max-w-[300px] max-h-[250px]" /> 
        </label> :
        <div className={"self-center max-w-[300px] max-h-[250px]"}>
                <input
                  type="file"
                  id="CoverImage"
                  accept="image/*"
                  onChange={(e)=>setFile(e.target.files[0])}
                  style={{ display: "none" }}
                />
                <button className={"addButton"}>
                  <label htmlFor="CoverImage">
                    <img src="/image.png" alt="" width={16} height={16} />
                  </label>
                </button>
                </div>
      }

        </span>
        <Chips value={category} onChange={(e) => {setCategory(e.value)}}  className="category border-none" placeholder="Add category"/>
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
          theme="bubble"
          modules={modules}
          value={value}
          ref={quillRef}
          onChange={setValue}
          placeholder="Tell your story..."
        />
      </div>
      <button className={"publish"} onClick={handleSubmit}>
        Publish
      </button>
      

      {/* <div dangerouslySetInnerHTML={{ __html:  }}> */}

      {/* </div> */}
    </div>
  );
};

export default WritePage;