import React from 'react'
import '../Carrusel/Carrusel.js'
import '../Carrusel/Carrusel.css'
const Carrusel = () => {

return (
        <div class="slider">
            <ul class="slides">
                <li><img src="https://blog.artegrafico.net/lab/js/slider/assets/img/1.jpg" alt="imagen1" /><span>imagen1</span></li>
                <li><img src="https://blog.artegrafico.net/lab/js/slider/assets/img/2.jpg" alt="imagen2" /><span>imagen2</span></li>
                <li><img src="https://blog.artegrafico.net/lab/js/slider/assets/img/3.jpgg" alt="imagen3" /><span>imagen3</span></li>
                <li><img src="https://blog.artegrafico.net/lab/js/slider/assets/img/4.jpg" alt="imagen4" /><span>imagen4</span></li>
                <li><img src="https://blog.artegrafico.net/lab/js/slider/assets/img/5.jpg" alt="imagen5" /><span>imagen5</span></li>
                <li><img src="https://blog.artegrafico.net/lab/js/slider/assets/img/6.jpg" alt="imagen6" /><span>imagen6</span></li>
            </ul>
            <div class="buttons">
                <div class="next">&#10095;</div>
                <div class="prev">&#10094;</div>
            </div>

        </div>
    )
}

export default Carrusel