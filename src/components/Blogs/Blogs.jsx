import React, { useEffect, useState } from "react"

const Blogs = ({ blogs }) => {
  const [visibleBlogs, setVisibleBlogs] = useState([])

  const showMore = () => {
    if (visibleBlogs.length === blogs?.length) return
    setVisibleBlogs((prev) => [
      ...prev,
      ...blogs?.slice(visibleBlogs?.length, visibleBlogs.length + 6),
    ])
  }

  useEffect(() => {
    if (!blogs) return
    setVisibleBlogs(blogs?.slice(0, 6))
  }, [blogs])

  return (
    <div
      id="blogs"
      className="py-[100px] lg:py-[80px] lg:pb-[150px] flex flex-col items-center"
    >
      <p className="text-[24px] md:text-[27.2px] lg:text-[32px] my-[12px] font-[700] text-center leading-[1.3] text-darkBlack">
        From the Developer's Desk
      </p>
      <p className="text-[16px] text-center md:w-[480px] leading-[1.7] text-lightBlack px-[15px]">
        Thoughts, tutorials, and stories from{" "}
        <span className="font-[700]">my journey</span> in web development,
        design, and tech innovations.
      </p>

      <div className="pt-[80px] px-5 md:px-10 columns-1 lg:columns-2 xl:columns-3 gap-4">
        {visibleBlogs?.map((b, indx) => (
          <div
            style={{ fontFamily: ["Lora", "sans-serif"] }}
            key={indx}
            className="break-inside-avoid shadow-boldShadow rounded-xl p-8 mb-4"
          >
            <div className="flex flex-col justify-between">
              <p className="text-2xl md:text-3xl font-semibold">{b?.title}</p>
              <p className="text-slate-500">({b?.date})</p>
            </div>
            <div className="my-7 space-y-2">
              {b?.content?.split("#")?.map((bcs, idx) => (
                <p key={idx}>{bcs}</p>
              ))}
            </div>
            <div className="flex items-center gap-3 flex-wrap">
              {b?.tags?.map((bt, indx) => (
                <div
                  className="bg-lightBlack/70 font-semibold text-white px-2 py-1 rounded-full"
                  key={indx}
                >
                  #{bt}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {visibleBlogs.length < blogs?.length && (
        <div
          className="px-5 md:px-10 w-full flex justify-center items-center h-60 -translate-y-40"
          style={{
            backdropFilter: "blur(12px)",
          }}
        >
          <div
            onClick={showMore}
            className="bg-lightBlack/15 text-2xl font-semibold tracking-wide px-4 py-2 rounded-md cursor-pointer text-darkBlack"
          >
            Load More Blogs ?
          </div>
        </div>
      )}
    </div>
  )
}

export default Blogs
