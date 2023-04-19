import './Home.css'
import React from "react"
import { ListOfGifs } from "../../components/ListOfGifs/ListOfGifs"
import { useGifs } from "../../hooks/useGifs"
import FormSearch from "../../components/FormSearch/FormSearch"
import { LazyTrending } from "../../components/TrendingSearches"
import { Helmet } from "react-helmet"


export default function Home () {
    const { gifs } = useGifs()
    
    return (
        <>
            <Helmet>
                <title> Giffy | Buscador de GIF </title>
                <meta
                    name="description"
                    content="Pagina principal de Giffy"
                />
            </Helmet>
            <section className='formContainer'>
                <FormSearch />
            </section>
            <section className="App-wrapper">
                <div className="App-main">
                    <div className="App-results">
                        <h3 className="App-title">Última búsqueda</h3>
                        <ListOfGifs gifs={gifs} />
                    </div>
                    <div className="App-category">
                        <LazyTrending />
                    </div>
                </div>
            </section>
        </>
    )
}