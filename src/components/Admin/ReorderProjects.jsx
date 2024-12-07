import { useEffect, useState } from "react"
import { updateProjectOrder } from "../../firebase"
import { toast } from "sonner"

const ReorderProjects = ({ projects }) => {
  const [data, setData] = useState()
  const [openCard, setOpenCard] = useState(false)

  const moveLeft = (index) => {
    setData((prevData) => {
      if (index === 0) return prevData

      const newData = [...prevData]
      ;[newData[index], newData[index - 1]] = [
        newData[index - 1],
        newData[index],
      ]

      return newData
    })
  }

  const moveRight = (index) => {
    setData((prevData) => {
      if (index === prevData.length - 1) return prevData

      const newData = [...prevData]
      ;[newData[index], newData[index + 1]] = [
        newData[index + 1],
        newData[index],
      ]

      return newData
    })
  }

  const reorder = async () => {
    try {
      const res = await updateProjectOrder(data)
      if (res) toast.success("Projects Reordered Successfully")
    } catch (error) {
      toast.error("Error Reordering Projects")
    }
  }

  useEffect(() => {
    if (!projects) return
    setData(projects)
  }, [projects])

  return (
    <div
      className={`border-4 px-5 pb-2 pt-1 mt-2 ${
        openCard ? "" : "h-10"
      } transition-all duration-200 ease-linear overflow-hidden`}
      onClick={() => {
        if (openCard) return
        setOpenCard(true)
      }}
    >
      <p className="pb-1">Update Projects Order</p>

      <div className="flex gap-2">
        {data?.map((d, index) => (
          <div
            key={d?.link}
            className="flex flex-col flex-1 justify-center items-center border-2 p-5"
          >
            <div className="flex justify-between w-full">
              <div className="flex gap-5 mb-5 font-extrabold text-2xl">
                <p>{index}</p>
                <p>{d?.name}</p>
              </div>
              <div className="flex gap-5 font-extrabold text-2xl">
                <div onClick={() => moveLeft(index)}>{"<"}</div>
                <div onClick={() => moveRight(index)}>{">"}</div>
              </div>
            </div>
            <img src={d?.imageSmall} alt="" />
          </div>
        ))}
      </div>

      <div className="flex justify-center">
        <button
          className="bg-myBlue mt-3 mx-3 px-3 py-2 rounded-lg font-medium text-lg text-lightWhite"
          onClick={reorder}
        >
          Update
        </button>
      </div>
    </div>
  )
}

export default ReorderProjects
