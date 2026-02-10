import { useState } from "react";
import { toast } from "sonner";
import { uploadCompanyData } from "../../firebase";
import { MySelector } from "../../redux/store";

const Company = () => {
  const { portfolio } = MySelector((state) => state.portfolio);

  const company_data = portfolio?.company_data;

  const [data, setData] = useState<{
    name?: string;
    file?: File;
    to?: string;
    from?: string;
  }>();
  const [openCard, setOpenCard] = useState(false);

  const handleUploadCompanyLogos = async () => {
    try {
      const res = await uploadCompanyData(company_data ? company_data : [], {
        name: data?.name ?? "",
        to: data?.to ?? "",
        from: data?.from ?? "",
        file: data?.file,
      });
      if (res) {
        toast.success("Company Data Uploaded Successfully");
        setData({ name: "", from: "", to: "" });
      }
    } catch (error: unknown) {
      console.log(error);
      toast.error("Error Uploading Company Data");
    }
  };

  return (
    <div
      onClick={() => {
        if (openCard) return;
        setOpenCard(true);
      }}
      className={`border-4 flex-1 px-5 pt-1 flex flex-col gap-8 ${
        openCard ? "" : "h-10"
      } transition-all duration-200 ease-linear overflow-hidden`}
    >
      <p>Create Company Data</p>

      <input
        type="file"
        onChange={(e) =>
          setData((prev) => ({ ...prev, file: e?.target?.files?.[0] }))
        }
      />
      <input
        type="text"
        placeholder="company name"
        className="border-2 p-2"
        value={data?.name}
        onChange={(e) =>
          setData((prev) => ({ ...prev, name: e?.target?.value }))
        }
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
  );
};

export default Company;
