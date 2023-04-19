import { useGifs } from "../../hooks/useGifs"
import { ListOfGifs } from "../../components/ListOfGifs/ListOfGifs"
import { Helmet } from "react-helmet"
import FormSearch from "../../components/FormSearch/FormSearch"
import './Search.css'

export default function Search ({ params }) {
    const { keyword, rating } = params
    const { gifs, loading, setPage } = useGifs({ keyword, rating })

    const title = gifs
        ? `${gifs.length} resultados de ${keyword} | Giffy`
        : 'Giffy'

    const handleNextPage = () => setPage(prevPage => prevPage + 1)

    return (
        <>
            <Helmet>
                <title> {title} </title>
                <meta
                    name="description"
                    content={title}
                />
            </Helmet>
            <div className="search-container">
                <FormSearch 
                    initialKeyword={keyword}
                    initialRating={rating}
                />
                <h2>Resultados de la busqueda de: "{decodeURI(keyword)}"</h2>
                {   
                    loading
                    ? "Cargando..."
                    : <ListOfGifs gifs={gifs}/>
                }
                <button className="btn-next" onClick={handleNextPage}>🔑</button>
            </div>
        </>
    )
}