import { doc, getDoc, updateDoc } from "firebase/firestore"
import { firestore, storage } from "./config"
import imageCompression from "browser-image-compression"
import { getDownloadURL, ref, uploadBytes } from "firebase/storage"
import { errorHandler } from "./errors"

// the portfolio reference
const portfolioRef = doc(
  firestore,
  process.env.REACT_APP_COLLECTION_NAME,
  process.env.REACT_APP_DOCUMENT_NAME
)

// get portfolio data
export async function handleGetPortfolioData() {
  try {
    const docSnap = await getDoc(portfolioRef)
    return docSnap.data()
  } catch (error) {
    return errorHandler(error)
  }
}

// returns url for a provided image file
async function handleUploadImage(file, location) {
  try {
    const compressedImage = await imageCompression(file, {
      maxSizeMB: 1,
      maxWidthOrHeight: 1920,
      useWebWorker: true,
      maxIteration: 10,
      fileType: "image/*",
    })
    const imgRef = ref(storage, `portfolio_v2/${location}`)
    const upload = await uploadBytes(imgRef, compressedImage)
    const res = await getDownloadURL(upload.ref)
    return res
  } catch (error) {
    return errorHandler(error)
  }
}

// upload images
async function uploadMultipleImages(files) {
  try {
    const urls = []

    for (let i = 0; i < files?.length; i++) {
      const url = await handleUploadImage(
        files[i],
        `company_logos/${Date?.now()}-${files[i]?.name}`
      )
      urls?.push(url)
    }

    return urls
  } catch (error) {
    return errorHandler(error)
  }
}

// upload company logos
export async function uploadCompanyLogos(currentUrls, files) {
  try {
    if (!files) return "No files provided"

    const urls = await uploadMultipleImages(files)
    await updateDoc(portfolioRef, {
      company_logos: [...currentUrls, ...urls],
    })
    return "Company Logos updated successfully"
  } catch (error) {
    return errorHandler(error)
  }
}

// upload projects
export async function uploadProjectData(currentData, data) {
  try {
    const url1 = await handleUploadImage(
      data?.image,
      `project_covers/${Date?.now()}-${data?.image?.name}`
    )

    const url2 = await handleUploadImage(
      data?.imageSmall,
      `project_covers/${Date?.now()}-${data?.imageSmall?.name}`
    )

    await updateDoc(portfolioRef, {
      projects: [...currentData, { ...data, image: url1, imageSmall: url2 }],
    })
    return "Project updated successfully"
  } catch (error) {
    return errorHandler(error)
  }
}
