import React, { useState } from "react"
import Company from "../components/Admin/Company"
import Projects from "../components/Admin/Projects"
import { useNavigate } from "react-router-dom"
import Skills from "../components/Admin/Skills"
import Blogs from "../components/Admin/Blogs"

const Admin = ({ data }) => {
  const [authenticated, setAuthenticated] = useState(false)
  const [password, setPassword] = useState("")
  const navigate = useNavigate()

  const auth = () => {
    if (password !== process.env.REACT_APP_PASSWORD) navigate("/")
    else setAuthenticated(true)
  }

  return (
    <div>
      {!authenticated ? (
        <div className="h-40 border-2 border-black">
          <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            className="w-full border"
          />
          <button onClick={auth}>Authenticate</button>
        </div>
      ) : (
        <div className="flex flex-wrap gap-5 p-2">
          <Blogs blogs={data && data?.blogs} />
          <Company company_data={data && data?.company_data} />
          <Projects projects={data && data?.projects} />
          <Skills tech={data && data?.tech} />
        </div>
      )}
    </div>
  )
}

export default Admin
