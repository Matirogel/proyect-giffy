import React from "react"
import { Helmet } from "react-helmet"

export default function Error404 () {
    return (
        <>
            <Helmet>
                <title> NOT FOUND | ERROR 404 </title>
                <meta
                    name="description"
                    content="Esta URL no es correcta"
                />
            </Helmet>
            <h1>ERROR 404!</h1>
        </>
    )
}