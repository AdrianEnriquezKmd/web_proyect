import React from 'react';
import './App.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';
import flyer2 from './assets/flayer_1.jpg';

function App() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    centerMode: true,
    focusOnSelect: true,
  };

  return (
    <div className="App">
      <header className="small-header">
        <h2>Mi Encabezado Pequeño</h2>
      </header>
      <header className="App-header">
        {/* Contenedor del carrusel con ancho limitado */}
        <div className="carousel-container">
          <Slider {...settings}>
            <div>
              <img
                src="https://cms.cloudinary.vpsvc.com/images/w_1176,h_600,c_scale,w_1176,h_600/f_auto/f_auto,q_auto/v1675875429/ideas-and-advice-prod/es-es/Madame_Ramen_email_hero_FR_0568/Madame_Ramen_email_hero_FR_0568.jpg?_i=AA"
                alt="Flyer 1"
                className="flyer-image"
              />
            </div>
            <div>
              <img src={flyer2} alt="Flyer 2" className="flyer-image" />
            </div>
          </Slider>
        </div>
      </header>

      {/* Cuerpo de texto debajo del carrusel */}
      <div className="body-content">
        <h3>text</h3>
        <p>
          text
        </p>
      </div>
    </div>
  );
}

export default App;
