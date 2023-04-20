import React, { useEffect, useState } from "react"
import { useLocation } from "wouter"
import useUser from "../../hooks/useUser"
import loginService from "../../services/loginService"
import './Login.css'

export default function Login ({ setShowModal }) {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [, pushLocation] = useLocation()
    const { isLogged } = useUser()


    useEffect(() => {
        if (isLogged) {
            pushLocation('/')
            setShowModal(false)
        }   
    }, [isLogged, pushLocation, setShowModal])

    const handleSubmit = evt => {
        evt.preventDefault()
        loginService({ username, password })
        
    }

    const handleUsernameChange = evt => {
        setUsername(evt.target.value)
        
    }

    const handlePasswordChange = evt => {
        setPassword(evt.target.value)
    }
    
    return (
        <>
            <section className="login-container">
                <h2>Login</h2>
                <form className="login-form" onSubmit={handleSubmit}>
                    <input 
                        type="text" 
                        placeholder="Email" 
                        onChange={handleUsernameChange} 
                        value={username} 
                    />
                    <input 
                        type="password" 
                        placeholder="Contraseña" 
                        onChange={handlePasswordChange} 
                        value={password} 
                    />
                    <button>Confirmar</button>
                </form>
            </section>
        </>
    )
}