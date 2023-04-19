import { API_KEY, URL } from "./settings"


const fromApiResponse = res => {
    const { data } = res
    const { images, title, id } = data
    const { url } = images.downsized_medium

    return { url, title, id }
}


export default function getSingleGif ({ id } = {}) {
    const API = `${URL}/gifs/${id}?api_key=${API_KEY}`
    
    return fetch(API)
        .then(res => res.json())
        .then(fromApiResponse)
}