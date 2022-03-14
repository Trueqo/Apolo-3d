import React, { useContext } from 'react'
import{faRightLong} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Context from '../hooks/Context'

const ItemCategoria = () => {

    const contexto = useContext(Context);

    return (
        <>
        
        {contexto.data.productos.map((item)=>{
            return(
                <div className='flex gap-1 flex-col  w-36 h-10 sm:w-36 sm:h-10'>
                    <div className='bg-green-600 h-14 flex justify-center '>
                        <img className='h-full pt-1' src={item.img1} alt=''></img>
                    </div>

                    <div className='bg-blue-400 flex gap-1 justify-center items-center' >
                        <span className=''>{item.tipo}</span>
                        <FontAwesomeIcon className='text-orange-600' icon={faRightLong}/>
                    </div>
                </div>
            )
        })}
            
        
        </>
    )
}

export default ItemCategoria