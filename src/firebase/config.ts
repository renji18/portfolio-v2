import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { getAnalytics, logEvent } from "firebase/analytics";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_apiKey!,
  authDomain: import.meta.env.VITE_authDomain!,
  projectId: import.meta.env.VITE_projectId!,
  storageBucket: import.meta.env.VITE_storageBucket!,
  messagingSenderId: import.meta.env.VITE_messagingSenderId!,
  appId: import.meta.env.VITE_appId!,
  measurementId: import.meta.env.VITE_measurementId!,
};

// firebase application instances
const firebaseApp = initializeApp(firebaseConfig);
export const firestore = getFirestore(firebaseApp);
export const storage = getStorage(firebaseApp);
const analytics = getAnalytics(firebaseApp);
logEvent(analytics, "firebase_analytics_notification");
