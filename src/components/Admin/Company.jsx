import React, { useState } from "react"
import { uploadCompanyData } from "../../firebase"
import { toast } from "sonner"

const Company = ({ company_data }) => {
  const [data, setData] = useState({})
  const [openCard, setOpenCard] = useState(false)

  const handleUploadCompanyLogos = async () => {
    try {
      const res = await uploadCompanyData(
        company_data ? company_data : [],
        data
      )
      if (res) {
        toast.success("Company Data Uploaded Successfully")
        setData({ file: "", name: "", from: "", to: "" })
      }
    } catch (error) {
      toast.error("Error Uploading Company Data")
    }
  }

  return (
    <div
      onClick={() => {
        if (openCard) return
        setOpenCard(true)
      }}
      className={`border-4 flex-1 px-5 pt-1 flex flex-col gap-8 ${
        openCard ? "" : "h-10"
      } transition-all duration-200 ease-linear overflow-hidden`}
    >
      <p>Create Company Data</p>

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
      <div className="flex justify-center mb-4">
        <button
          onClick={handleUploadCompanyLogos}
          className="border-2 px-3 py-2 rounded-lg font-medium text-lg text-lightWhite bg-myBlue"
        >
          Submit
        </button>
      </div>
    </div>
  )
}

export default Company
