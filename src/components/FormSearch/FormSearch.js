import './FormSearch.css'
import React from "react"
import { useLocation } from "wouter"
import { useForm } from "./hook"

const RATINGS = ['g', 'pg', 'pg-13', 'r']


function FormSearch ({ initialKeyword = '', initialRating = 'g' }) {
    const { keyword, rating, times, updateKeyword, updateRating } 
    = useForm({ 
        initialKeyword,
        initialRating
    })
    const [, pushLocation] = useLocation()
    
    const handleSubmit = evt => {
        evt.preventDefault()
        pushLocation(`/search/${keyword}/${rating}`)
    }
    
    const handleChangeKeyword = evt => {
        updateKeyword(evt.target.value)
        
    }

    const handleChangeRating = evt => {
        updateRating(evt.target.value)
    }

    return (
        <section className="formContainer">
            <form onSubmit={handleSubmit}>
                <input 
                    type='text' 
                    placeholder="Busca tu GIF.." 
                    value={keyword}
                    onChange={handleChangeKeyword}>
                </input>
                <div className='gp-buttons'>
                    <select onChange={handleChangeRating} value={rating}>
                        <option disabled>select rating</option>
                        { RATINGS.map(rating => 
                            <option key={rating}>{rating}</option>)
                        }
                    </select>
                    { 
                        keyword
                        ? <button>Buscar</button>
                        : <button disabled>Buscar</button>
                    }
                </div>
            </form>
        </section>
    )
}

export default React.memo(FormSearch)