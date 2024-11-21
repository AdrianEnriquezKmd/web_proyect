import React, { useEffect, useRef, useState } from 'react';
import { data } from './assets/data';
import './App.css';

const App = () => {
  const listRef = useRef();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false); // Estado para el menú desplegable

  useEffect(() => {
    const listNode = listRef.current;
    const imgNode = listNode.querySelectorAll("li > img")[currentIndex];

    if (imgNode) {
      imgNode.scrollIntoView({
        behavior: "smooth",
      });
    }
  }, [currentIndex]);

  const scrollToImage = (direction) => {
    setCurrentIndex((prevIndex) => {
      if (direction === 'prev') {
        return prevIndex === 0 ? 0 : prevIndex - 1;
      } else {
        return prevIndex === data.length - 1 ? prevIndex : prevIndex + 1;
      }
    });
  };

  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  };

  return (
    <div>
      {/* Encabezado pequeño */}
      <header className="small-header">
        <h2>LOGO</h2>
        
        {/* En escritorio mostramos los botones y en móvil mostramos el icono de hamburguesa */}
        <div className="header-buttons">
          <button>Botón 1</button>
          <button>Botón 2</button>
          <button>Botón 3</button>
          <button>Botón 4</button>
          <button>Botón 5</button>
        </div>

        {/* Menú hamburguesa en dispositivos móviles */}
        <div className="hamburger-menu">
          <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)}>
            ☰
          </button>
          <div className={`dropdown-menu ${menuOpen ? "open" : ""}`}>
            <button>Botón 1</button>
            <button>Botón 2</button>
            <button>Botón 3</button>
            <button>Botón 4</button>
            <button>Botón 5</button>
          </div>
        </div>
      </header>

      {/* Carrusel */}
      <div className="main-container">
        <div className="slider-container">
          <div className="leftArrow" onClick={() => scrollToImage('prev')}>
            &#10092;
          </div>
          <div className="rightArrow" onClick={() => scrollToImage('next')}>
            &#10093;
          </div>
          <div className="container-images">
            <ul ref={listRef}>
              {data.map((item) => (
                <li key={item.id}>
                  <img
                    src={item.imgUrl}
                    width={500}
                    height={280}
                    alt={item.altText || 'Imagen del carrusel'}
                  />
                </li>
              ))}
            </ul>
          </div>
          <div className="dots-container">
            {data.map((_, idx) => (
              <div
                key={idx}
                className={`dot-container-item ${idx === currentIndex ? 'active' : ''}`}
                onClick={() => goToSlide(idx)}
              >
                &#9865;
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
