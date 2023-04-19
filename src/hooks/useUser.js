import { useCallback, useContext, useState } from 'react'
import { UserContext } from '../context/UserContext'
import addFavService from '../services/addFavService'

import { signOut } from "firebase/auth";
import { auth } from '..';


export default function useUser () {
    const { jwt, favs, setFavs, setJWT } = useContext(UserContext)
    const [state, setState] = useState({ loading: false, error: false })


    const logout = useCallback(() => {
        setState({ loading: true, error: false })
        signOut(auth)
            .then( () => {
                setJWT(null)
                setFavs([])
                setState({ loading: false, error: false })
            })    
    }, [setJWT, setFavs])

    const addFav = useCallback(({ id }) => {
        addFavService({ favs, setFavs, id, jwt })
           
    }, [jwt, favs, setFavs])

    return { 
        isLogged: Boolean(jwt),
        isLoadingUser: state.loading,
        hasErrorUser: state.error,
        logout,
        addFav,
        favs
    }
}