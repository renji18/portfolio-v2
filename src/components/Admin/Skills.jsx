import React, { useEffect, useState } from "react"
import { IoIosRemoveCircle } from "react-icons/io"
import { IoMdAddCircleOutline } from "react-icons/io"
import { updateTechStack } from "../../firebase"

const Skills = ({ tech }) => {
  const [skills, setSkills] = useState([
    { type: "Programming Languages", stack: [] },
    { type: "Client Side", stack: [] },
    { type: "Server Side", stack: [] },
    { type: "Data storing and ORMs", stack: [] },
    { type: "Version Control & Collaboration", stack: [] },
    { type: "DevOps and Development Tools", stack: [] },
  ])

  const update = (firstObj, secondObj, key, value) => {
    setSkills((prev) =>
      prev?.map((p) =>
        p?.type === firstObj
          ? {
              ...p,
              stack: p?.stack?.map((ps, indx) =>
                indx === secondObj ? { ...ps, [key]: value } : ps
              ),
            }
          : p
      )
    )
  }

  const add = (firstObj) => {
    setSkills((prev) =>
      prev?.map((p) =>
        p?.type === firstObj
          ? { ...p, stack: [...p?.stack, { icon: "", name: "" }] }
          : p
      )
    )
  }
  const remove = (firstObj, secondObj) => {
    setSkills((prev) =>
      prev?.map((p) =>
        p?.type === firstObj
          ? {
              ...p,
              stack: p?.stack?.filter((ps) => ps?.name !== secondObj),
            }
          : p
      )
    )
  }

  const finalize = async () => {
    try {
      const res = await updateTechStack(skills)
      if (res) {
        console.log(res, "response")
      }
    } catch (error) {
      console.log(error, "error updating tech stack")
    }
  }

  useEffect(() => {
    if (!tech) return
    setSkills(tech)
  }, [tech])

  return (
    <div className="py-5 border-4">
      <div className="flex flex-wrap justify-evenly gap-10">
        {skills?.map((s, indx_a) => (
          <div key={indx_a}>
            <p className="text-xl">{s?.type}</p>
            <div>
              {s?.stack?.map((ss, indx_b) => (
                <div
                  key={indx_b}
                  className="flex items-center gap-2 w-full justify-between"
                >
                  <div className="mb-3 border-2 p-2 flex-1">
                    <div className="flex items-center gap-5 mb-1">
                      <i className={ss?.icon} />
                      <input
                        type="text"
                        className="w-full border-2 p-1"
                        placeholder="icon-name-here"
                        value={ss?.name}
                        onChange={(e) =>
                          update(s?.type, indx_b, "name", e.target.value)
                        }
                      />
                    </div>
                    <input
                      type="text"
                      onChange={(e) =>
                        update(s?.type, indx_b, "icon", e.target.value)
                      }
                      placeholder="icon-class-here"
                      className="w-full border-2 p-1"
                      value={ss?.icon}
                    />
                  </div>
                  <IoIosRemoveCircle
                    size={25}
                    color="red"
                    onClick={() => remove(s?.type, ss?.name)}
                  />
                </div>
              ))}
              <div onClick={() => add(s?.type)} className="flex justify-center">
                <IoMdAddCircleOutline size={30} color="blue" />
              </div>
            </div>
          </div>
        ))}
      </div>
      <button
        className="bg-myBlue mx-3 px-3 py-2 rounded-lg font-medium text-lg text-lightWhite"
        onClick={finalize}
      >
        Update
      </button>
    </div>
  )
}

export default Skills
