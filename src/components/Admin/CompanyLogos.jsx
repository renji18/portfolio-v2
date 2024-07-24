import React, { useState } from "react"
import { uploadCompanyLogos } from "../../firebase"

const CompanyLogos = ({ logos }) => {
  const [files, setFiles] = useState([])

  const handleUploadCompanyLogos = async () => {
    try {
      const res = await uploadCompanyLogos(logos ? logos : [], files)
      if (res) {
        console.log(res, "response")
        setFiles([])
      }
    } catch (error) {
      console.log(error, "error uploading company logos")
    }
  }

  return (
    <div className="border-4 max-w-fit p-5">
      <input type="file" multiple onChange={(e) => setFiles(e.target.files)} />
      <button onClick={handleUploadCompanyLogos} className="border-2 p-2">
        Submit
      </button>
    </div>
  )
}

export default CompanyLogos
