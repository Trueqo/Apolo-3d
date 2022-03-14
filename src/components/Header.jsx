import React from 'react'
import '../CSS/header.css'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faCartShopping} from '@fortawesome/free-solid-svg-icons'
import {faMagnifyingGlass} from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'
const Header = () => {
    
    return (
        <div className='relative flex justify-between items-start mx-10 mt-5 z-20 h-full' >
            <div>
                <span className='apolo3D text-3xl'>
                    APOLO-3D
                </span>
            </div>
            <div className='flex'>
                <span className='flex gap-3 text-orange-600  text-3xl'>
                    <FontAwesomeIcon icon={faMagnifyingGlass}/>
                    <Link to='/Carrito' ><FontAwesomeIcon icon={faCartShopping} /></Link>
                </span>
            </div>
        </div>
    )
}

export default Header