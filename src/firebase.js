// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyC39VMNikJXLgZkUdZ0J-ddKh5wZaryYGU',
  authDomain: 'web-artes-marciales.firebaseapp.com',
  projectId: 'web-artes-marciales',
  storageBucket: 'web-artes-marciales.firebasestorage.app',
  messagingSenderId: '383844969662',
  appId: '1:383844969662:web:a6884931f02e99e8d1c2ef',
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)
export const db = getFirestore(app)
