import React from 'react'
import '../CSS/header.css'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faCartShopping} from '@fortawesome/free-solid-svg-icons'
import {faMagnifyingGlass} from '@fortawesome/free-solid-svg-icons'
const Header = () => {
    return (
        <div className='flex justify-between items-center mx-5 mt-5' >
            <div>
                <span className='apolo3D text-3xl'>
                    APOLO-3D
                </span>
            </div>
            <div className='flex'>
                <span className='flex gap-3 text-orange-600  text-3xl'>
                    <FontAwesomeIcon icon={faMagnifyingGlass}/>
                    <FontAwesomeIcon icon={faCartShopping}/>
                </span>
            </div>
        </div>
    )
}

export default Header