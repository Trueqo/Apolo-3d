import React from 'react'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faWhatsapp} from '@fortawesome/free-brands-svg-icons'
import {faInstagram} from '@fortawesome/free-brands-svg-icons'
const Footer = () => {
    return (
        <div className='absolute flex bottom-0 bg-orange-500 h-20 w-full items-center text-4xl
        justify-between'>
            <span className='text-white ml-10' >
                Contacto
            </span>
            
            <span className='flex gap-2 text-white mr-10 text-5xl'>
                <FontAwesomeIcon icon={faWhatsapp}/>
                <FontAwesomeIcon icon={faInstagram}/>
            </span>
            
        </div>
    )
}

export default Footer