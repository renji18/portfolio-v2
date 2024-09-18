import React, { useState } from "react"
import { uploadBlog } from "../../firebase"

const Blogs = ({ blogs }) => {
  const [blogData, setBlogData] = useState()

  const returnDate = () => {
    const date = String(new Date()).split(" ")
    return `${date[2]} ${date[1]}, ${date[3]}`
  }

  const handleUploadBlog = async () => {
    try {
      const res = await uploadBlog(blogs ? blogs : [], {
        ...blogData,
        tags: blogData?.tags?.trim()?.split(" "),
        date: returnDate(),
      })
      if (res) {
        console.log(res, "response")
        setBlogData({ title: "", content: "", tags: "" })
      }
    } catch (error) {
      console.log(error, "error uploading blog")
    }
  }

  return (
    <div className="px-5 border-4 w-[26vw]">
      <p>Create Blog</p>

      <div className="flex flex-col my-5 gap-3">
        <input
          value={blogData?.title}
          onChange={(e) =>
            setBlogData((prev) => ({ ...prev, title: e.target.value }))
          }
          placeholder="Title"
          className="border-2 p-1"
        />
        <textarea
          value={blogData?.content}
          onChange={(e) =>
            setBlogData((prev) => ({ ...prev, content: e.target.value }))
          }
          rows={4}
          placeholder="Content"
          className="border-2 p-1"
        />
        <textarea
          value={blogData?.tags}
          onChange={(e) =>
            setBlogData((prev) => ({ ...prev, tags: e.target.value }))
          }
          rows={4}
          placeholder="Tags"
          className="border-2 p-1"
        />
      </div>

      <div className="flex justify-center">
        <button onClick={handleUploadBlog} className="border-2 p-2">
          Upload Blog
        </button>
      </div>
    </div>
  )
}

export default Blogs
