import React, { createContext, useEffect, useState } from 'react'
import { onAuthStateChanged } from 'firebase/auth'
import { auth } from '..'
import getFavsService from '../services/getFavsService'

// Esta constante posee los 'values' que provee el contexto
export const UserContext = createContext()

export const UserContextProvider = ({ children }) => {

    const [favs, setFavs] = useState([])
    const [jwt, setJWT] = useState(null)

    console.log(favs)

    useEffect(() => {
        onAuthStateChanged(auth, async (user) => {
            setJWT(user.uid)
        })
    }, [])

    useEffect(() => {
        if (!jwt) return setFavs([])
        getFavsService({ jwt })
            .then(res => {
                res === undefined
                ? setFavs([])
                : setFavs(res)
            })

    }, [jwt])

    return (
        <UserContext.Provider value={{ 
            jwt, 
            favs, 
            setFavs, 
            setJWT 
        }}>
            {children}
        </UserContext.Provider>
    )
}