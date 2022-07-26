// 1) traigo el metodo de autentificacion de firebase
import { initializeApp } from "firebase/app";
import { collection, getFirestore } from "firebase/firestore"


//2) traigo las keys 
const firebaseConfig = {
    apiKey: "AIzaSyDKu5N2IZjHo7DqnHpYDwafPN-Pe1A1yJk",
    authDomain: "proyectofinal-4edf2.firebaseapp.com",
    projectId: "proyectofinal-4edf2",
    storageBucket: "proyectofinal-4edf2.appspot.com",
    messagingSenderId: "411757797783",
    appId: "1:411757797783:web:1c3776f4cad51abb5a24d2"
};

// inicializo firebase
const app = initializeApp(firebaseConfig);

// 4) obtener una referencia o puntero a la base de datos
export const db = getFirestore(app);

export const collectionProd = collection(db,"products");