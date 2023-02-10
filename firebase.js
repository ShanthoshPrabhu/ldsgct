import { initializeApp, getApp, getApps } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
    apiKey: "AIzaSyB_Ho1-A0pvSOP3F132PFiGe0JeT3HBTaI",
    authDomain: "literaryanddebatingsocietygct.firebaseapp.com",
    projectId: "literaryanddebatingsocietygct",
    storageBucket: "literaryanddebatingsocietygct.appspot.com",
    messagingSenderId: "169979231888",
    appId: "1:169979231888:web:74d4c6365155692f98e215",
    measurementId: "G-VM77VT2N9T"
  };
  
  const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
  const db = getFirestore();
  const storage = getStorage();
  
  export default app;
  export { db, storage };