import React from "react";
import { Link, useRoute } from "wouter";
import './Header.css'
import useUser from "../../hooks/useUser";

export default function Header () {
    const { isLogged, logout, isLoadingUser } = useUser()
    const [match] = useRoute('/login')
    const [match1] = useRoute('/register')

    const renderButtons = ({ isLogged, isLoadingUser }) => {
        return isLoadingUser
            ?   <span> ----- </span>
            :   !isLogged 
                
                ?   <>
                        <Link to='/login'>
                            Login
                        </Link>
                        <Link to='/register'>
                            Register
                        </Link>
                    </>
                :   <>
                        <Link to='/' onClick={logout}>
                            Logout
                        </Link>
                        <Link to='/favs'>
                            Mis favs
                        </Link>
                    </>
    } 

    const content = match || match1
        ?   null
        :   renderButtons({ isLogged, isLoadingUser })


    return (
        <header className="header">
            { content }
        </header>   
    )
}