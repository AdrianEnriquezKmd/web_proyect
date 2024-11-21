import React, { useState, useEffect, useRef } from 'react';
import { data } from './assets/data';
import './App.css';
import { motion } from 'framer-motion'; // Para animación

export const App = () => {
  const listRef = useRef();
  const [menuOpen, setMenuOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  // Manejar el menú desplegable
  const handleMenuToggle = () => {
    setMenuOpen((prev) => !prev);
  };

  // Cambiar la imagen actual (prev/next)
  const scrollToImage = (direction) => {
    setCurrentIndex((prevIndex) => {
      if (direction === 'prev') {
        return prevIndex === 0 ? 0 : prevIndex - 1;
      } else {
        return prevIndex === data.length - 1 ? prevIndex : prevIndex + 1;
      }
    });
  };

  // Ir a una imagen específica al hacer clic en los puntos
  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  };

  // Asegurarse de que la imagen actual esté visible
  useEffect(() => {
    const listNode = listRef.current;
    const imgNode = listNode.querySelectorAll("li > img")[currentIndex];
    if (imgNode) {
      imgNode.scrollIntoView({
        behavior: "smooth"
      });
    }
  }, [currentIndex]);

  return (
    <div>
      {/* Encabezado pequeño */}
      <header className="small-header">
        <h2>LOGO</h2>
        <div className="header-buttons">
          <motion.button
            whileHover={{ scale: 1.1, backgroundColor: '#005bbb', color: 'white' }}
            transition={{ duration: 0.3 }}
          >
            Botón 1
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.1, backgroundColor: '#005bbb', color: 'white' }}
            transition={{ duration: 0.3 }}
          >
            Botón 2
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.1, backgroundColor: '#005bbb', color: 'white' }}
            transition={{ duration: 0.3 }}
          >
            Botón 3
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.1, backgroundColor: '#005bbb', color: 'white' }}
            transition={{ duration: 0.3 }}
          >
            Botón 4
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.1, backgroundColor: '#005bbb', color: 'white' }}
            transition={{ duration: 0.3 }}
          >
            Botón 5
          </motion.button>
        </div>

        {/* Menú hamburguesa */}
        <div className="hamburger-icon" onClick={handleMenuToggle}>
          &#9776;
        </div>
      </header>

      {/* Menú desplegable en móviles */}
      <nav className={`mobile-menu ${menuOpen ? 'open' : ''}`}>
        <ul>
          <li>Opción 1</li>
          <li>Opción 2</li>
          <li>Opción 3</li>
          <li>Opción 4</li>
          <li>Opción 5</li>
        </ul>
      </nav>

      {/* Carrusel */}
      <div className="main-container">
        <div className="slider-container">
          <div className="leftArrow" onClick={() => scrollToImage('prev')}>&#10092;</div>
          <div className="rightArrow" onClick={() => scrollToImage('next')}>&#10093;</div>
          <div className="container-images">
            <ul ref={listRef}>
              {
                data.map((item) => {
                  return <li key={item.id}>
                    <img src={item.imgUrl} width={500} height={280} alt={item.altText || 'Imagen del carrusel'} />
                  </li>
                })
              }
            </ul>
          </div>
          <div className="dots-container">
            {
              data.map((_, idx) => (
                <div key={idx}
                  className={`dot-container-item ${idx === currentIndex ? "active" : ""}`}
                  onClick={() => goToSlide(idx)}>
                  &#9865;
                </div>
              ))
            }
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
