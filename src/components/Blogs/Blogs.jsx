import React, {useEffect, useState} from "react"
import {Masonry} from "@mui/lab";

const Blogs = ({blogs}) => {
  const [visibleBlogs, setVisibleBlogs] = useState([])

  const showMore = () => {
    if (visibleBlogs.length === blogs?.length) return
    setVisibleBlogs((prev) => [
      ...prev,
      ...blogs?.slice(visibleBlogs?.length, visibleBlogs.length + 4),
    ])
  }

  useEffect(() => {
    if (!blogs) return
    setVisibleBlogs(blogs?.slice(0, 4))
  }, [blogs])

  return (
    <div
      id="blogs"
      className="py-[100px] lg:py-[80px] lg:pb-[150px] flex flex-col items-center"
    >
      <p
        className="text-[24px] md:text-[27.2px] lg:text-[32px] my-[12px] font-[700] text-center leading-[1.3] text-darkBlack">
        From the Developer's Desk
      </p>
      <p className="text-[16px] text-center md:w-[480px] leading-[1.7] text-lightBlack px-[15px]">
        Thoughts, tutorials, and stories from{" "}
        <span className="font-[700]">my journey</span> in web development,
        design, and tech innovations.
      </p>

      <div className="pt-[60px] px-5 md:px-10">
        <Masonry columns={{xs: 1, sm: 2, md: 3}} spacing={1.5} sequential>
          {visibleBlogs?.map((b, indx) => (
            <div
              style={{fontFamily: "Lora"}}
              key={indx}
              className="shadow-boldShadow rounded-xl p-8 mb-4"
            >
              <div className="flex flex-col justify-between">
                <p className="text-xl lg:text-2xl xl:text-3xl font-semibold">{b?.title}</p>
                <p className="text-slate-500 text-sm xl:text-base">({b?.date})</p>
              </div>
              <div className="my-5 space-y-1 xl:space-y-2">
                {b?.content?.split("#")?.map((bcs, idx) => (
                  <p key={idx} className="text-sm lg:text-base">{bcs}</p>
                ))}
              </div>
              <div className="flex items-center gap-1.5 xl:gap-2 flex-wrap">
                {b?.tags?.map((bt, indx) => (
                  <div
                    className="bg-lightBlack/70 text-sm font-medium text-white px-2 py-1 rounded-full"
                    key={indx}
                  >
                    #{bt}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </Masonry>
      </div>

      {visibleBlogs.length < blogs?.length && (
        <div
          className="w-full flex justify-center items-center mt-5"
        >
          <div
            onClick={showMore}
            className="bg-lightBlack/15 font-medium px-4 py-2 rounded-md cursor-pointer text-darkBlack"
          >
            Load More Blogs ?
          </div>
        </div>
      )}
    </div>
  )
}

export default Blogs
