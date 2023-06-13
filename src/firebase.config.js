import {getApp, getApps, initializeApp} from  'firebase/app'
import {getFirestore} from 'firebase/firestore'
import {getStorage} from 'firebase/storage'

const firebaseConfig = {
    apiKey: "AIzaSyD_sKWeU9m_bLIDL70hA-w7EUIrZf1kyv4",
    authDomain: "groceryapp-27ab7.firebaseapp.com",
    databaseURL: "https://groceryapp-27ab7-default-rtdb.firebaseio.com",
    projectId: "groceryapp-27ab7",
    storageBucket: "groceryapp-27ab7.appspot.com",
    messagingSenderId: "564227194601",
    appId: "1:564227194601:web:180a1daf43c4cc8b927a78"
  };


  const app = getApps.Length > 0 ? getApp() : initializeApp(firebaseConfig)

  const firestore = getFirestore(app)
  const storage = getStorage(app)

  export {app, firestore, storage};