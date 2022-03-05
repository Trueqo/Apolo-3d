import React from 'react'
import{faRightLong} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import imagenes from '../assets/imagenes'

const ItemCategoria = () => {
    return (
        <div className='flex gap-1 flex-col bg-slate-900 h-full w-36        sm:w-36'>

            <div className='w-24 bg-white h-16'>
                <picture className='w-full h-full' >
                    <img className='' src={imagenes.img1} alt=''></img>
                </picture>
            </div>

            <div className='flex gap-1 items-center' >
                <span>Lamparas</span>
                <FontAwesomeIcon className='text-orange-600' icon={faRightLong}/>
            </div>
        </div>
    )
}

export default ItemCategoria