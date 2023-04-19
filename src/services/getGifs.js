import { API_KEY, URL } from "./settings"

const fromApiResponse = res => {
    const { data = [] } = res

    const gifs = data.map( gif => {
        const { images, title, id } = gif
        const { url } = images.downsized_medium
        return { url, title, id }
    })
    return gifs
}

export default function getGifs ({ keyword, limit = 15, rating = 'g', page = 0 } = {}) { 
    const API = `${URL}/gifs/search?api_key=${API_KEY}&q=${keyword}
    &limit=${limit}&offset=${page * limit}&rating=${rating}&lang=en`

    return fetch(API)   
        .then(res => res.json())
        .then(fromApiResponse) 
}