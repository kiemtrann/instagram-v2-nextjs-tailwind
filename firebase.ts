import 'firebase/app'
import firebase from 'firebase'
import 'firebase/firestore'

const firebaseConfig = {
  apiKey: 'AIzaSyB8JEdqTxzPwQCuGQwOwzQCbD34FaiAVVo',
  authDomain: 'login-c97f0.firebaseapp.com',
  projectId: 'login-c97f0',
  storageBucket: 'login-c97f0.appspot.com',
  messagingSenderId: '612716385154',
  appId: '1:612716385154:web:7ab819cad6ba2f75a1359b',
}

const app = firebase.initializeApp(firebaseConfig)

export default app
