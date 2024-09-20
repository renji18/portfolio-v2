import React from "react"

const Blogs = ({ blogs }) => {
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
        {blogs &&
          blogs
            ?.slice()
            ?.reverse()
            ?.map((b, indx) => (
              <div
                style={{ fontFamily: ["Lora", "sans-serif"] }}
                key={indx}
                className="break-inside-avoid shadow-boldShadow rounded-xl p-8 mb-4"
              >
                <div className="flex flex-col justify-between">
                  <p className="text-2xl md:text-3xl font-semibold">
                    {b?.title}
                  </p>
                  <p className="text-slate-500">({b?.date})</p>
                </div>
                <div className="my-7 space-y-2">
                  {b?.content?.split("#")?.map((bcs, idx) => (
                    <p>{bcs}</p>
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
    </div>
  )
}

export default Blogs
