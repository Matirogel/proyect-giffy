import './Category.css'
import { Link } from "wouter"

export const Category = ({ title, options = [] }) => {

    return ( 
        <div>
            <h3>{title}</h3>
            <ul className='trendsContainer'>
                {
                    options.map(option => (
                        <Link to={`/search/${option}`} key={option}>
                            <li className="trends">
                                {option}
                            </li>
                        </Link>
                    ))
                }
            </ul>
        </div>
    )
}