import imgslider1 from '../img/img-slider-1.webp'
import imgslider2 from '../img/img-slider-2.webp'
import imgslider3 from '../img/img-slider-3.webp'
import Slider from "react-slick"

export const AutoSlider = () => {
    const settings = {
        dots: false,
        infinite: true,
        speed: 2500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 4000,
        cssEase: "linear"
    };

    return (
        <Slider {...settings}>
            <img src={imgslider1} alt="imagenslider-1" />
            <img src={imgslider2} alt="imagenslider-2" />
            <img src={imgslider3} alt="imagenslider-3" />
        </Slider>
    )
}
