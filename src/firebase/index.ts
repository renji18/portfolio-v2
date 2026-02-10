import { doc, getDoc, updateDoc } from "firebase/firestore";
import { firestore, storage } from "./config";
import imageCompression from "browser-image-compression";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { errorHandler } from "./errors";
import type {
  BlogInterface,
  CompanyDataInterface,
  ProjectInterface,
  TechInterface,
} from "../interface/portfolio.interface";

// the portfolio reference
const portfolioRef = doc(
  firestore,
  import.meta.env.VITE_COLLECTION_NAME!,
  import.meta.env.VITE_DOCUMENT_NAME!,
);

// get portfolio data
export async function handleGetPortfolioData() {
  try {
    const docSnap = await getDoc(portfolioRef);
    return docSnap.data();
  } catch (error) {
    return errorHandler(error);
  }
}

// returns url for a provided image file
async function handleUploadImage(file: File, location: string) {
  try {
    const compressedImage = await imageCompression(file, {
      maxSizeMB: 1,
      maxWidthOrHeight: 1920,
      useWebWorker: true,
      maxIteration: 10,
      fileType: "image/*",
    });
    const imgRef = ref(storage, `portfolio_v2/${location}`);
    const upload = await uploadBytes(imgRef, compressedImage);
    const res = await getDownloadURL(upload.ref);
    return res;
  } catch (error) {
    return errorHandler(error);
  }
}

// upload company logos
export async function uploadCompanyData(
  currentData: Array<CompanyDataInterface>,
  data: {
    name: string;
    file?: File;
    to: string;
    from: string;
  },
) {
  try {
    if (!data?.file) return "No file provided";

    const url = await handleUploadImage(
      data?.file,
      `company_logos/${Date?.now()}-${data?.file?.name}`,
    );
    await updateDoc(portfolioRef, {
      company_data: [...currentData, { ...data, file: url }],
    });
    return "Company Logos updated successfully";
  } catch (error) {
    return errorHandler(error);
  }
}

// upload projects
export async function uploadProjectData(
  currentData: Array<ProjectInterface>,
  data: {
    desc: string;
    image?: File;
    imageSmall?: File;
    link: string;
    name: string;
    repo: string;
    skills: string;
  },
) {
  try {
    if (!data?.image || !data?.imageSmall) return "No file provided";

    const url1 = await handleUploadImage(
      data?.image,
      `project_covers/${Date?.now()}-${data?.image?.name}`,
    );

    const url2 = await handleUploadImage(
      data?.imageSmall,
      `project_covers/${Date?.now()}-${data?.imageSmall?.name}`,
    );

    await updateDoc(portfolioRef, {
      projects: [...currentData, { ...data, image: url1, imageSmall: url2 }],
    });
    return "Project updated successfully";
  } catch (error) {
    return errorHandler(error);
  }
}

// upload projects order
export async function updateProjectOrder(data: Array<ProjectInterface>) {
  try {
    await updateDoc(portfolioRef, {
      projects: data,
    });
    return "Projects  updated successfully";
  } catch (error) {
    return errorHandler(error);
  }
}

// uplaod tech stack
export async function updateTechStack(data: Array<TechInterface>) {
  await updateDoc(portfolioRef, {
    tech: data,
  });
  return "Project updated successfully";
}

// upload blog
export async function uploadBlog(
  currentData: Array<BlogInterface>,
  data: BlogInterface,
) {
  try {
    await updateDoc(portfolioRef, {
      blogs: [...currentData, { ...data }],
    });
    return "Blog updated successfully";
  } catch (error) {
    return errorHandler(error);
  }
}
