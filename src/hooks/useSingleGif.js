import { useEffect, useState } from "react";
import { useGifs } from "./useGifs";
import getSingleGif from "../services/getSingleGif"


export default function useSingleGif ({ id }) {

    const { gifs, loading, setLoading } = useGifs()
    const gifFromCache = gifs.find( gif => gif.id === id )
    
    const [isError, setIsError] = useState(false)
    const [gif, setGif] = useState(gifFromCache)

    useEffect(() => {
        if (!gif) {
            setLoading(true)

            getSingleGif({ id: id })
                .then(res => {
                    setGif(res)
                    setLoading(false)
                    setIsError(false)
                }).catch(err => {
                    setIsError(true)
                    setLoading(false)
                })   
        }  
    }, [gif, id, setLoading])


    return { gif, loading, isError }
}