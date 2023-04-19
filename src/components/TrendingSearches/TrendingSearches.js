import { useEffect, useState } from "react"
import getTrendingTermsGifs from "../../services/getTrendingTermsGifs"
import { Category } from "../Category/Category"

export default function TrendingSearches () {

    const [trends, setTrends] = useState([])

    useEffect(()=> {
        getTrendingTermsGifs().then(setTrends)
    }, [])

    return <Category title='Tendencias' options={trends}/>
}

