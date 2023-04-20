import React from "react";
import useUser from "../../hooks/useUser";
import Modal from "../Modal/Modal";
import './Fav.css'
import Login from "../Login/Login";
import { useModal } from "../../hooks/useModal";

export default function Fav ({ id }) {
    const { isLogged, addFav, favs } = useUser()
    const { showModal, setShowModal, handleClose} = useModal()

    let isFaved = false
    if (favs !== undefined) isFaved = favs.some(fav => fav === id)
    
    const handleClickFav = () => {
        if (!isLogged) return setShowModal(true)
        addFav({ id }) 
    }
    
    const [
        label,
        emoji
    ] = isFaved
        ? [
            'Remove Gif from favorites',
            '❌'
        ]
        : [
            'Add Gif to favorites',
            '❤'
        ] 

    return (
        <>
            <button className="Fav" onClick={handleClickFav}>
                <span role='img' aria-label={label}>
                    {emoji}
                </span>
            </button>
            {
                showModal && 
                    <Modal onClose={handleClose}>
                        <Login setShowModal={setShowModal} />
                    </Modal>
            }
        </>
    )
}