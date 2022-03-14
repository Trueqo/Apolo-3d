import React from 'react'
import '../Home/css/homeCSS.css'

import Categorias from '../../components/Categorias'
import Header from '../../components/Header'
import Wellcome from '../../components/Wellcome'
import Footer from '../../components/Footer'
import Carrusel from '../../components/Carrusel/Carrusel'


const Home = () => {
    return (
        <div className='contHome h-screen'>

            <div className='header col-span-full'>
                
                    <Header/>
                
            </div>
            
            <div className='categorias col-span-full'>
                <Categorias/>
            </div>

            <div className='wellcome mx-10 my-5 '>
                <Wellcome/>
            </div>

            <div className='carrusel  mx-10 my-5'>
                <Wellcome/>
            </div>

            <div className='footer col-span-full  bottom-0'>
                <Footer/>
            </div>

            
        </div>


    )
}

export default Home