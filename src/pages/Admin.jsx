import React from "react"
import CompanyLogos from "../components/Admin/CompanyLogos"
import Projects from "../components/Admin/Projects"

const Admin = ({ data }) => {
  return (
    <div>
      <CompanyLogos logos={data && data?.company_logos} />
      <Projects projects={data && data?.projects} />
    </div>
  )
}

export default Admin
