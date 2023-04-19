import { API_KEY, URL } from "./settings"

const fromApiResponse = res => {
    const { data = [] } = res
    return data
}
  
export default function getTrendingTermsGifs () {
    const API = `${URL}/trending/searches?api_key=${API_KEY}`

    return fetch(API)   
        .then(res => res.json())
        .then(fromApiResponse) 
}


