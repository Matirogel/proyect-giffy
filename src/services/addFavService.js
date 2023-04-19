import { doc, setDoc } from "firebase/firestore";
import { db } from "..";

export default async function addFavService ({ favs, setFavs, id, jwt = null }) {
    if (jwt !== null) {
        let favRepeat = false
        
        if (favs) favRepeat = favs.find(fav => fav === id)

        if (!favRepeat) {
            setFavs((prevFavs) => prevFavs.concat(id))
            await setDoc(doc(db, 'favs', jwt), {
                favs: [...favs, id]
            })
        }
    } 
}