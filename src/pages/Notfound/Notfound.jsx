import React from 'react'
import '../Notfound/notFound.css'
import ParticleBackground from '../../components/particleBackground'
import notFound from '../../assets/img/notFound.png'
const Notfound = () => {
    return (
        <div className='grid grid-rows-1 grid-cols-1'>
            <div className='absolute z-0  row-span-1 '>
                <ParticleBackground/>
            </div>
            <div className='flex flex-col pt-20'>
                <div className='relative z-30 flex items-center text-center justify-center'>
                    <h1 className='notFoundText'>404 Not Found</h1>
                </div>
                <div className='relative z-30  items-center'>
                    <img src={notFound} alt='' className='notFoundImg mx-auto -top-20 h-96 w-96' ></img>
                </div>
            </div>
        </div>
    )
}

export default Notfound