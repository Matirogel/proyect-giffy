import { doc, getDoc } from "firebase/firestore"
import { db } from ".."

export default async function getFavsService ({ jwt }) {
    
    const docRef = doc(db, 'favs', jwt)
    const docSnap = await getDoc(docRef)

    if (docSnap.exists()) return docSnap.data().favs
}