import React from "react";
import { Link, useRoute } from "wouter";
import useUser from "../../hooks/useUser";
import Modal from "../Modal/Modal";
import Login from "../Login/Login";
import { useModal } from "../../hooks/useModal";
import './Header.css'

export default function Header () {
    const { isLogged, logout, isLoadingUser } = useUser()
    const [match] = useRoute('/login')
    const [match1] = useRoute('/register')
    const { showModal, setShowModal, handleClose, handleShow } = useModal()


    const renderButtons = ({ isLogged, isLoadingUser }) => {
        return isLoadingUser
            ?   <span> ----- </span>
            :   !isLogged 
                
                ?   <>
                        <Link to='/' onClick={handleShow}>
                            Login
                        </Link>
                        <Link to='/register'>
                            Register
                        </Link>
                        {
                            showModal && 
                                <Modal onClose={handleClose}>
                                    <Login setShowModal={setShowModal} />
                                </Modal>
                        }
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