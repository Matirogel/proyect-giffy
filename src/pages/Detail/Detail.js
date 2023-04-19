import './Detail.css'
import React from "react";
import { Redirect } from "wouter";
import useSingleGif from "../../hooks/useSingleGif";
import Spinner from "../../components/Spinner"
import { Helmet } from "react-helmet";

export default function Detail ({ params }) {

    const { gif, loading, isError } = useSingleGif({ id: params.id })
    
    if (isError) return <Redirect to='/404' />
    if (loading) return <Spinner />
    if (!gif) return null

    const description = `Detalle de ${gif.title}`

    return (
        <>
            <Helmet>
                <title> Giffy | {gif.title} </title>
                <meta
                    name="description"
                    content= {description}
                />
            </Helmet>
            <div className="detailContainer">
                <h3>{gif.title}</h3>
                <picture>
                    <img src={gif.url} alt={gif.title}/>
                </picture>
            </div>
        </>
    );
}