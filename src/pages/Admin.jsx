import React, { useState } from "react"
import CompanyLogos from "../components/Admin/CompanyLogos"
import Projects from "../components/Admin/Projects"
import { useNavigate } from "react-router-dom"

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
        <>
          <CompanyLogos logos={data && data?.company_logos} />
          <Projects projects={data && data?.projects} />
        </>
      )}
    </div>
  )
}

export default Admin
