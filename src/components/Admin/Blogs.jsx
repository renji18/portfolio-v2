import React, { useState } from "react"
import { uploadBlog } from "../../firebase"
import { toast } from "sonner"

const Blogs = ({ blogs }) => {
  const [blogData, setBlogData] = useState()
  const [openCard, setOpenCard] = useState(false)

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
        toast.success("Blog Uploaded Successfully")
        setBlogData({ title: "", content: "", tags: "" })
      }
    } catch (error) {
      toast.error("Error Uploading Blog")
    }
  }

  return (
    <div
      className={`px-5 pt-1 flex-1 border-4 ${
        openCard ? "" : "h-10"
      } transition-all duration-200 ease-linear overflow-hidden`}
      onClick={() => {
        if (openCard) return
        setOpenCard(true)
      }}
    >
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
          placeholder="Tags (seperated by spaces and no #)"
          className="border-2 p-1"
        />
      </div>

      <div className="flex justify-center mb-4">
        <button
          onClick={handleUploadBlog}
          className="border-2 px-3 py-2 rounded-lg font-medium text-lg text-lightWhite bg-myBlue"
        >
          Upload Blog
        </button>
      </div>
    </div>
  )
}

export default Blogs
