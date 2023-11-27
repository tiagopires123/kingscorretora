import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import "./Carousel.css"

import logo1 from '../assets/images/partners/1.png'
import logo2 from '../assets/images/partners/2.png'
import logo3 from '../assets/images/partners/3.png'
import logo4 from '../assets/images/partners/4.png'
import logo5 from '../assets/images/partners/5.png'
import logo6 from '../assets/images/partners/6.png'
import logo7 from '../assets/images/partners/7.png'
import logo8 from '../assets/images/partners/8.png'
import logo9 from '../assets/images/partners/9.png'
import logo10 from '../assets/images/partners/10.png'
import logo11 from '../assets/images/partners/11.png'
import logo12 from '../assets/images/partners/12.png'
import logo13 from '../assets/images/partners/13.png'
import logo14 from '../assets/images/partners/14.png'
import logo15 from '../assets/images/partners/15.png'
import logo16 from '../assets/images/partners/16.png'
import logo17 from '../assets/images/partners/17.png'
import logo18 from '../assets/images/partners/18.png'
import logo19 from '../assets/images/partners/19.png'

function Carousel() {
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    cssEase: "linear"
  
  };
  return (
    <section className="benefits partners">
      <h2>Nossos Parceiros</h2>
      <Slider {...settings}>
        <div>
          <img src={logo1} alt='logo porto seguro' />
        </div>
        <div>
          <img src={logo2} alt='logo porto seguro' />
        </div>
        <div>
          <img src={logo3} alt='logo porto seguro' />
        </div>
        <div>
          <img src={logo4} alt='logo porto seguro' />
        </div>
        <div>
          <img src={logo5} alt='logo porto seguro' />
        </div>
        <div>
          <img src={logo6} alt='logo porto seguro' />
        </div>
        <div>
          <img src={logo7} alt='logo porto seguro' />
        </div>
        <div>
          <img src={logo8} alt='logo porto seguro' />
        </div>
        <div>
          <img src={logo9} alt='logo porto seguro' />
        </div>
        <div>
          <img src={logo10} alt='logo porto seguro' />
        </div>
        <div>
          <img src={logo11} alt='logo porto seguro' />
        </div>
        <div>
          <img src={logo12} alt='logo porto seguro' />
        </div>
        <div>
          <img src={logo13} alt='logo porto seguro' />
        </div>
        <div>
          <img src={logo14} alt='logo porto seguro' />
        </div>
        <div>
          <img src={logo15} alt='logo porto seguro' />
        </div>
        <div>
          <img src={logo16} alt='logo porto seguro' />
        </div>
        <div>
          <img src={logo17} alt='logo porto seguro' />
        </div>
        <div>
          <img src={logo18} alt='logo porto seguro' />
        </div>
      </Slider>
    </section>
  );
}

export default Carousel