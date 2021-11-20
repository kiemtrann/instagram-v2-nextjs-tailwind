import 'firebase/compat/auth'
import 'firebase/compat/firestore'
import firebase from 'firebase/compat/app'
import { getAuth, updateProfile } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'
import { getStorage } from 'firebase/storage'

const firebaseConfig = {
  apiKey: 'AIzaSyB8JEdqTxzPwQCuGQwOwzQCbD34FaiAVVo',
  authDomain: 'login-c97f0.firebaseapp.com',
  projectId: 'login-c97f0',
  storageBucket: 'login-c97f0.appspot.com',
  messagingSenderId: '612716385154',
  appId: '1:612716385154:web:7ab819cad6ba2f75a1359b',
}
if (!firebase.apps.length) firebase.initializeApp(firebaseConfig)
const db = getFirestore()
const storage = getStorage()
const auth = firebase.auth()

export { auth, db, storage }
