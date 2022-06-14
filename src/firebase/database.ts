import {initializeApp} from 'firebase/app';
import 'firebase/auth';
import 'firebase/compat/firestore';
import {getFirestore} from 'firebase/firestore';


const firebaseConfig = {
  apiKey: "AIzaSyAcPrnfYGmKhlY241mBbBHDuDSmR_U_Hgo",
  authDomain: "insight-demo-3c374.firebaseapp.com",
  projectId: "insight-demo-3c374",
  storageBucket: "insight-demo-3c374.appspot.com",
  messagingSenderId: "503297812295",
  appId: "1:503297812295:web:36009c43b24ed3423bce62",
  measurementId: "G-W70485LP33"
};

  const app = initializeApp(firebaseConfig);

  const db = getFirestore(app);
  // export default firebase.firestore();

  export {db};

  