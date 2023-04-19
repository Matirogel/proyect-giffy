import { useEffect, useState } from "react"
import getGifs from "../services/getGifs"
import { useGlobalGifs } from "./useGlobalGifs"

const INITIAL_PAGE = 0

export const useGifs = ({ rating, keyword } = { keyword: null }) => {

    const [loading, setLoading] = useState(false)
    const [loadingNextPage, setLoadingNextPage] = useState(false)

    const { gifs, setGifs } = useGlobalGifs()
    const [page, setPage] = useState(INITIAL_PAGE)
    
    const keywordToUse = keyword || localStorage.getItem('lastKeyword') || 'random'
    
    useEffect(() => {
        setLoading(true)

        getGifs({ 
            keyword: keywordToUse, 
            rating 
        }).then(res => {
                setGifs(res)
                setLoading(false)
                keyword && localStorage.setItem('lastKeyword', keyword)
            }) 
    }, [keyword, keywordToUse, setGifs, rating])

    useEffect(() => {
        if (page === INITIAL_PAGE) return

        setLoadingNextPage(true)

        getGifs({ 
            keyword: keywordToUse,
            page,
            rating
        }).then(nextGifs => {
            setGifs(prevGifs => [...prevGifs, ...nextGifs])
            setLoadingNextPage(false)
        })

    }, [page, keywordToUse, setGifs, rating])


    return { gifs, loading, setLoading, loadingNextPage, setPage }
}