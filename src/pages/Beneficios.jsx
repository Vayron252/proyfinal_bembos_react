import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom'; 
import Slider from "react-slick";
import friendzoneImg from '../img/friendzone.png';
import gileosImg from '../img/gileos.png'
import relacionImg from '../img/relacion.png'
import destinadosImg from '../img/destinados.png'
import friendzone_mini from '../img/friendzone_mini.png'
import gileos_mini from '../img/gileos_mini.png'
import relacion_mini from '../img/relacion_mini.png'
import destinados_mini from '../img/destinados_mini.png'
import  { getBeneficieCategory } from '../data/bembosAPI'
import { Friendzone } from '../components/Friendzone';
import { Gileos } from '../components/Gileos';
import { Relacion } from '../components/Relacion';
import { Destinados } from '../components/Destinados';
import '../styles/beneficios.css'


export const loader = async () => {
  const friendzone = await getBeneficieCategory('friendzone')
  // const gileos = await obtenerGileos('')
  // const relacion = await obtenerRelacion('')
  // const destinados = await obtenerDestinados('')
  return {friendzone};
}

export const Beneficios = () => {
  const { friendzone } = useLoaderData();  
  const [category, setCategory] = useState(friendzone);

  const [nombrediv, setNombrediv] = useState('friendzone');
  const handleClick = async (nombre) => {
    setNombrediv(nombre);
    const categories = await getBeneficieCategory(nombre);
    setCategory(categories);
  }

  // const handleCallCatBen = async (categorie) => {
    
  // }

  /* SLIDER DE CATEGORÍAS */

  const settingsCards = {
    infinite: false,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    variableWidth: false,
    swipeToSlide: false,
    nextArrow: <Arrow />,
    prevArrow: <Arrow />,
  };

  function Arrow(props) {
    const { className, style, onClick} = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block", background: "#173083"}}
        onClick={onClick}
      />
    );
  }

  return (

  <div className='contenedor__toda__pagina__beneficios'>
    <div className='container__all__beneficios'>
      
      <div className='container__info__beneficios'>
        <div className='encabezado__beneficios'>         
            <h1>DISFRUTA DE NUESTROS BENEFICIOS BEMBOS</h1>
        </div>
      </div>

      {/* CONTENEDOR - MENÚ BENFICIOS */}

      <div className='container__menu__benefit'>
        <div className={`container__menu__category${nombrediv === 'friendzone' ? ' active' : ''}`} onClick={() => handleClick('friendzone')}>        
            <img src={friendzoneImg} alt="" />
            <h2>FRIENDZONE</h2>               
        </div>

        <div className={`container__menu__category${nombrediv === 'gileos' ? ' active' : ''}`} onClick={() => handleClick('gileos')}>
          <img src={gileosImg} alt="" /> 
          <h2>GILEOS</h2> 
        </div>

        <div className={`container__menu__category${nombrediv === 'relacion' ? ' active' : ''}`} onClick={() => handleClick('relacion')}>          
          <img src={relacionImg} alt=""/>   
          <h2>RELACIÓN</h2>      
        </div>

        <div className={`container__menu__category${nombrediv === 'destinados' ? ' active' : ''}`} onClick={() => handleClick('destinados')}>   
            <img src={destinadosImg} alt="" /> 
            <h2>DESTINADOS</h2>                     
        </div>
      </div>

      <div className='container__separation__menu__benefit'>
        <hr className='separation__menu__benefit' />        
      </div>

    {/* FRIENDZONE_INFO */}
  <div className=''>
    <div className='container__friendzone__info'>
      <div className='container__info__details__friendzone'>
        <div className='friendzone__info__title'>
          <img src={friendzone_mini} alt="" />
          <h1>{category.titulo}</h1>
          {/* <h3>INICIA SESIÓN</h3> */}
        </div>
        <div className='slogan__friendzone'>
          {/* <h3>PROMOCIONES POR TU AMISTAD</h3> */}
        </div>
      </div>
      </div>

      {/* SOLO PARA RESPONSIVE - FRIENDZONE */}
      <h3 className='mobile__friendzone__slogan'>BENEFICIOS ESPECIALES</h3>
      {/* SOLO PARA RESPONSIVE - FRIENDZONE*/}
    
      <div className='container__friendzone__all'>
      {/* <Slider {...settingsCards} nextArrow={<Arrow />} prevArrow={<Arrow />}> */}
          {category.coleccion.map((item, index) => (
            <Friendzone key = {index} friendItem = {item} />
          ))}
      {/* </Slider> */}
      </div> 
    </div>
    {/* FIN FRIENDZONE_INFO */}



    
      {/* PREGUNTAS FRECUENTES */}

      <div className='container__preguntas__beneficios'>
            <h1 className='titulo__preguntas__beneficios'>Preguntas Frecuentes</h1>
          
          {/* PREGUNTA 1*/}
            <div className= 'preguntas__unidad__container'>
              <div class="preguntas__beneficios__container">
                <details class="container__por__pregunta__beneficios">
                  <summary className="pregunta__beneficios">
                    <h3>¿Cómo funcionan los puntos?</h3>
                  </summary>
                  <div className="respuesta__preguntas__beneficios">
                    <p>Tus consumos se convierten en puntos para acceder a distintos estados de relación y así seguir obteniendo más productos. Conforme vayas fortaleciendo la relación, podrás acceder a más beneficios y descuentos.</p>
                  </div>
                </details>
              </div>
            </div>
          {/* FIN - PREGUNTA 1*/}

          {/* PREGUNTA 2*/}
          <div className= 'preguntas__unidad__container'>
              <div class="preguntas__beneficios__container">
                <details class="container__por__pregunta__beneficios">
                  <summary className="pregunta__beneficios">
                    <h3>¿Cuáles son los beneficios?</h3>
                  </summary>
                  <div className="respuesta__preguntas__beneficios">
                    <p>Existen diferentes beneficios en cada estado de relación que vas alcanzando. Puedes tener desde descuentos con más del 30% hasta delivery gratis.</p>
                  </div>
                </details>
              </div>
            </div>
          {/* FIN - PREGUNTA 2*/}  

          {/* PREGUNTA 3*/}
          <div className= 'preguntas__unidad__container'>
              <div class="preguntas__beneficios__container">
                <details class="container__por__pregunta__beneficios">
                  <summary className="pregunta__beneficios">
                    <h3>¿Hay beneficios por el método de pago?</h3>
                  </summary>
                  <div className="respuesta__preguntas__beneficios">
                    <p>Actualmente no existe un beneficio por pagar a través de un método de pago en particular.</p>
                  </div>
                </details>
              </div>
            </div>
          {/* FIN - PREGUNTA 3*/}       

          {/* PREGUNTA 4*/}
          <div className= 'preguntas__unidad__container'>
              <div class="preguntas__beneficios__container">
                <details class="container__por__pregunta__beneficios">
                  <summary className="pregunta__beneficios">
                    <h3>¿Los cupones de descuentos tienen fecha límite para usar?</h3>
                  </summary>
                  <div className="respuesta__preguntas__beneficios">
                    <p>Si tienen una fecha límite y puedes revisar los legales en el pie de página del mismo.</p>
                  </div>
                </details>
              </div>
            </div>
          {/* FIN - PREGUNTA 4*/}   
          
          {/* PREGUNTA 5*/}
          <div className= 'preguntas__unidad__container'>
              <div class="preguntas__beneficios__container">
                <details class="container__por__pregunta__beneficios">
                  <summary className="pregunta__beneficios">
                    <h3>¿Hay beneficios en compras por la App?</h3>
                  </summary>
                  <div className="respuesta__preguntas__beneficios">
                    <p>Haciendo tu compra a través de la APP o el sitio web podrás acumular puntos para tener más beneficios con nosotros.</p>
                  </div>
                </details>
              </div>
            </div>
                     
    </div>
    {/* FIN DESTINADOS_INFO */}
  </div>  

  
    {/* FIN CONTENEDOR - MENÚ BENFICIOS */}


    {/* GILEOS_INFO */}

    
    {/* FIN GILEOS_INFO */}

    {/* RELACION_INFO */}
    {/* FIN RELACION_INFO */}

    {/* DESTINADOS_INFO */}
    {/* FIN DESTINADOS_INFO */}


    </div>

  )
}
