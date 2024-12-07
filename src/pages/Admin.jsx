import React, { useState } from "react"
import Company from "../components/Admin/Company"
import Projects from "../components/Admin/Projects"
import { useNavigate } from "react-router-dom"
import Skills from "../components/Admin/Skills"
import Blogs from "../components/Admin/Blogs"
import ReorderProjects from "../components/Admin/ReorderProjects"
import { Toaster } from "sonner"

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
      <Toaster />
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
        <div className="p-2">
          <div className="flex gap-2 mb-2">
            <Blogs blogs={data && data?.blogs} />
            <Company company_data={data && data?.company_data} />
            <Projects projects={data && data?.projects} />
          </div>
          <Skills tech={data && data?.tech} />
          <ReorderProjects projects={data && data?.projects} />
        </div>
      )}
    </div>
  )
}

export default Admin
