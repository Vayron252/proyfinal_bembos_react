import imgslider1 from '../img/img-slider-1.webp'
import imgslider2 from '../img/img-slider-2.webp'
import imgslider3 from '../img/img-slider-3.webp'
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
// import "../styles/probandoSlider.css";


// function FlechaSiguiente(props) {
//     const { className, style, onClick } = props;
//     return (
//       <div
//         className={className}
//         style={{ ...style, display: "block", background: "red" }}
//         onClick={onClick}
//       />
//     );
//   }
  
//   function FlechaAnterior(props) {
//     const { className, style, onClick } = props;
//     return (
//       <div
//         className={className}
//         style={{ ...style, display: "block", background: "green" }}
//         onClick={onClick}
//       />
//     );
//   }

export const AutoSlider = () => {

    const settings = {
        dots: false,
        infinite: true,
        speed: 1500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true, 
        autoplaySpeed: 4000, 
        arrows: true,
        cssEase: "linear",
        // nextArrow: <FlechaSiguiente />,
        // prevArrow: <FlechaAnterior />
    };

/* Radio buttons para slider */

    return (
        <div className='banner'>
            <Slider {...settings}>
                <img src={imgslider1} alt="imagenslider-1" id='imagenBanner'/>
                <img src={imgslider2} alt="imagenslider-2" id='imagenBanner' />
                <img src={imgslider3} alt="imagenslider-3" id='imagenBanner'/>
            </Slider>

             {/* <div>
                <div className='flechas__carrusel'>
                    <div className='icon__container'>
                        <i class="fa-solid fa-chevron-down left"></i> 
                    </div>

                    <div className='icon__container'>
                        <i class="fa-solid fa-chevron-down right"></i>
                    </div>
                </div>   
            </div>
 
            <div className='slider'>
                <input type="radio" name="imagen" id='imagen1' className='radio' checked />
                <input type="radio" name="imagen" id='imagen2' className='radio' />
                <input type="radio" name="imagen" id='imagen3' className='radio' />       
            </div>        */}
        </div>
        
    )
}

