import React, { useState } from "react"
import { uploadCompanyData } from "../../firebase"

const Company = ({ company_data }) => {
  const [data, setData] = useState({})

  const handleUploadCompanyLogos = async () => {
    try {
      const res = await uploadCompanyData(
        company_data ? company_data : [],
        data
      )
      if (res) {
        console.log(res, "response")
        setData({ file: "", name: "", from: "", to: "" })
      }
    } catch (error) {
      console.log(error, "error uploading company logos")
    }
  }

  return (
    <div className="border-4 max-w-fit p-5 flex flex-col gap-8">
      <input
        type="file"
        onChange={(e) =>
          setData((prev) => ({ ...prev, file: e.target.files[0] }))
        }
      />
      <input
        type="text"
        placeholder="company name"
        className="border-2 p-2"
        value={data?.name}
        onChange={(e) => setData((prev) => ({ ...prev, name: e.target.value }))}
      />
      <input
        type="text"
        placeholder="from Month, year"
        className="border-2 p-2"
        value={data?.from}
        onChange={(e) => setData((prev) => ({ ...prev, from: e.target.value }))}
      />
      <input
        type="text"
        placeholder="to Month, year"
        className="border-2 p-2"
        value={data?.to}
        onChange={(e) => setData((prev) => ({ ...prev, to: e.target.value }))}
      />
      <button onClick={handleUploadCompanyLogos} className="border-2 p-2">
        Submit
      </button>
    </div>
  )
}

export default Company
