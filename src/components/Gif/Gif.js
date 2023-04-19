import './Gif.css'
import React from 'react'
import { Link } from "wouter"
import Fav from '../Fav/Fav'

const Gif = ({ url, title, id }) => {
    
    return (
        <div className="Gif">
            <div className='Gif-buttons'>
                <Fav id={id} />
            </div>
            <Link className='Gif-link' to={`/gif/${id}`}>
                <h4>{title}</h4>
                <img loading='lazy' alt={title} src={url} />
            </Link>
        </div>
    )
}

export default React.memo(Gif, (prevProps, nextProps) => {
    return prevProps.id === nextProps.id
})