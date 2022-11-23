import {initializeApp} from 'firebase/app';
import {addDoc, collection, getDocs, getFirestore, onSnapshot, query,snps} from "firebase/firestore";
import {useDispatch} from "react-redux";
import {resetLocation} from "../redux/reducer/restraduantSliceReducer";

const firebaseConfig = {
    apiKey: "AIzaSyA4dOhJ7Ctn-8QGlmwjoXD3O7Dnije1peA",
    authDomain: "restrudantguide.firebaseapp.com",
    projectId: "restrudantguide",
    storageBucket: "restrudantguide.appspot.com",
    messagingSenderId: "1078403102423",
    appId: "1:1078403102423:web:158eea1b5dff0edf712292",
    measurementId: "G-PRF5M4PTL3"
};
const app = initializeApp(firebaseConfig);
export const db = getFirestore();

export const getRestaurantData = async () => {

    try {
        const q = query(collection(db, "Restaurant"))
        const restaurantSnapshot = await getDocs(collection(db, "Restaurant"));

        return restaurantSnapshot.docs.map((doc) => ({id: doc.id, ...doc.data()}))

    } catch (e) {
        console.log(e.message);
    }


}

export const addRestraduantData = async (data,location) => {
    console.log({location})
    try {
        await addDoc(collection(db, "Restaurant"), {
            ...data,
            ...location

        })


    } catch (e) {
        console.log(e)
    }

}
