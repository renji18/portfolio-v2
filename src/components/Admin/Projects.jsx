import React, { useState } from "react"
import { uploadProjectData } from "../../firebase"

const Projects = ({ projects }) => {
  const [data, setData] = useState(null)

  const handleUploadProjectData = async () => {
    try {
      const res = await uploadProjectData(projects ? projects : [], data)
      if (res) {
        console.log(res, "response")
        setData(null)
      }
    } catch (error) {
      console.log(error, "error uploading company logos")
    }
  }

  return (
    <div className="border-4 w-[30vw] p-5 flex flex-col gap-2">
      <p>Big</p>
      <input
        type="file"
        placeholder="cover image"
        className="border"
        onChange={(e) =>
          setData((prev) => ({ ...prev, image: e.target.files[0] }))
        }
      />
      <p>Small</p>
      <input
        type="file"
        placeholder="cover image small"
        className="border"
        onChange={(e) =>
          setData((prev) => ({ ...prev, imageSmall: e.target.files[0] }))
        }
      />
      <input
        type="text"
        placeholder="website link"
        className="border"
        onChange={(e) => setData((prev) => ({ ...prev, link: e.target.value }))}
        value={data?.link}
      />
      <input
        type="text"
        placeholder="website name"
        className="border"
        onChange={(e) => setData((prev) => ({ ...prev, name: e.target.value }))}
        value={data?.name}
      />
      <textarea
        type="text"
        placeholder="website desc, in case of multiple, separate by # without space"
        className="border"
        onChange={(e) => setData((prev) => ({ ...prev, desc: e.target.value }))}
        value={data?.desc}
      />
      <textarea
        type="text"
        placeholder="website repos, in case of multiple, separate by comma without space"
        className="border"
        onChange={(e) => setData((prev) => ({ ...prev, repo: e.target.value }))}
        value={data?.repo}
      />
      <textarea
        type="text"
        placeholder="skills, enter as many, separated by comma, without space"
        onChange={(e) =>
          setData((prev) => ({ ...prev, skills: e.target.value }))
        }
        value={data?.skills}
      />
      <button onClick={handleUploadProjectData}>Upload Project</button>
    </div>
  )
}

export default Projects
