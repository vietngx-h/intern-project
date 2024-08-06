import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyCo8z2KnXsCgV_vJvxhB4j6tLA-1l41dvc",
  authDomain: "food-monster-96623.firebaseapp.com",
  projectId: "food-monster-96623",
  storageBucket: "food-monster-96623.appspot.com",
  messagingSenderId: "760336340805",
  appId: "1:760336340805:web:d06a8a72f2d48216f5102c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;
