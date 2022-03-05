import React from 'react'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faAngleLeft} from '@fortawesome/free-solid-svg-icons'
import {faAngleRight} from '@fortawesome/free-solid-svg-icons'
import ItemCategoria from './ItemCategoria'



const Categorias = () => {
    return (
        <div className='mt-9 mx-10 relative z-10'>
            <div className='mb-3 flex justify-between'>
                <div>
                    <span   className='text-white text-3xl'>
                        Categorias
                    </span>
                </div>
                <div className='justify-center text-2xl flex gap-5'>
                    <span className='text-white'>
                        <FontAwesomeIcon icon={faAngleLeft}/>
                    </span>

                    <span className='text-white'>
                    <FontAwesomeIcon icon={faAngleRight}/>
                    </span>
                </div>    
            </div>
            <div className=' h-24  bg-white rounded-md' >
                <ItemCategoria/>
            </div>
        </div>
    )
}

export default Categorias