import { useState } from "react";
import { uploadProjectData } from "../../firebase";
import { toast } from "sonner";
import { MySelector } from "../../redux/store";

const Projects = () => {
  const { portfolio } = MySelector((state) => state.portfolio);

  const projects = portfolio?.projects;

  const [data, setData] = useState<{
    desc?: string;
    image?: File;
    imageSmall?: File;
    link?: string;
    name?: string;
    repo?: string;
    skills?: string;
  }>();
  const [openCard, setOpenCard] = useState(false);

  const handleUploadProjectData = async () => {
    try {
      const res = await uploadProjectData(projects ? projects : [], {
        desc: data?.desc ?? "",
        image: data?.image,
        imageSmall: data?.imageSmall,
        link: data?.link ?? "",
        name: data?.name ?? "",
        repo: data?.repo ?? "",
        skills: data?.skills ?? "",
      });
      if (res) {
        toast.success("Project Uploaded Successfully");
        setData(undefined);
      }
    } catch (error: unknown) {
      console.log(error);
      toast.error("Error Uploading Project Data");
    }
  };

  return (
    <div
      onClick={() => {
        if (openCard) return;
        setOpenCard(true);
      }}
      className={`border-4 flex-1 px-5 pt-1 flex flex-col gap-2 ${
        openCard ? "" : "h-10"
      } transition-all duration-200 ease-linear overflow-hidden`}
    >
      <p>Create New Project</p>

      <p>Big</p>
      <input
        type="file"
        placeholder="cover image"
        className="border-2 p-2"
        onChange={(e) =>
          setData((prev) => ({ ...prev, image: e?.target?.files?.[0] }))
        }
      />
      <p>Small</p>
      <input
        type="file"
        placeholder="cover image small"
        className="border-2 p-2"
        onChange={(e) =>
          setData((prev) => ({ ...prev, imageSmall: e?.target?.files?.[0] }))
        }
      />
      <input
        type="text"
        placeholder="website link"
        className="border-2 p-2"
        onChange={(e) => setData((prev) => ({ ...prev, link: e.target.value }))}
        value={data?.link}
      />
      <input
        type="text"
        placeholder="website name"
        className="border-2 p-2"
        onChange={(e) => setData((prev) => ({ ...prev, name: e.target.value }))}
        value={data?.name}
      />
      <textarea
        placeholder="website desc, in case of multiple, separate by # without space"
        className="border-2 p-2"
        onChange={(e) => setData((prev) => ({ ...prev, desc: e.target.value }))}
        value={data?.desc}
      />
      <textarea
        placeholder="website repos, in case of multiple, separate by comma without space"
        className="border-2 p-2"
        onChange={(e) => setData((prev) => ({ ...prev, repo: e.target.value }))}
        value={data?.repo}
      />
      <textarea
        placeholder="skills, enter as many, separated by comma, without space"
        className="border-2 p-2"
        onChange={(e) =>
          setData((prev) => ({ ...prev, skills: e.target.value }))
        }
        value={data?.skills}
      />
      <div className="flex justify-center my-4">
        <button
          className="border-2 px-3 py-2 rounded-lg font-medium text-lg text-lightWhite bg-myBlue"
          onClick={handleUploadProjectData}
        >
          Upload Project
        </button>
      </div>
    </div>
  );
};

export default Projects;
