import React from "react"
import CompanyLogos from "../components/Admin/CompanyLogos"

const Admin = ({ data }) => {
  return (
    <div>
      <CompanyLogos logos={data && data?.company_logos} />
    </div>
  )
}

export default Admin
