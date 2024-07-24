import { initializeApp } from "firebase/app"
import { getFirestore } from "firebase/firestore"
import { getStorage } from "firebase/storage"
import { getAnalytics, logEvent } from "firebase/analytics"

const firebaseConfig = {
  apiKey: "AIzaSyAfJ7e2WgofnB7xctEZ8Nfn94nyX2TAPuQ",
  authDomain: "aadarsh-portfolio-v2.firebaseapp.com",
  projectId: "aadarsh-portfolio-v2",
  storageBucket: "aadarsh-portfolio-v2.appspot.com",
  messagingSenderId: "452182264642",
  appId: "1:452182264642:web:23772b8ac4c04e655bd6db",
  measurementId: "G-ZS52J88ZDD",
}

// firebase application instances
const firebaseApp = initializeApp(firebaseConfig)
export const firestore = getFirestore(firebaseApp)
export const storage = getStorage(firebaseApp)
const analytics = getAnalytics(firebaseApp)
logEvent(analytics, "firebase_analytics_notification")
