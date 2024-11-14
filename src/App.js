import React from 'react';
import { motion } from 'framer-motion';
import icono from './assets/monky.jpg';  // Importa la imagen desde tu carpeta
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 5 }}
          className="icono-animado"
        >
          {/* Usando motion.img para aplicar animación y arrastre */}
          <motion.img
            src={icono}
            alt="Mi ícono animado"
            className="mi-icono"
            style={{ width: '500px', height: '500px' }}  // Tamaño en línea
            initial={{ scale: 1 }}  // Tamaño inicial de la imagen
            whileHover={{ scale: 1.2 }}  // Agranda la imagen al pasar el mouse
            transition={{ duration: 0.3 }}  // Duración de la transición
            drag  // Permite arrastrar la imagen
            dragConstraints={{ top: 0, left: 0, right: 0, bottom: 0 }}  // Opcional, limita el movimiento
            dragElastic={0.2}  // Controla la elasticidad del movimiento al arrastrar
            whileDrag={{ scale: 1.1 }}  // Escala ligeramente la imagen mientras se arrastra
          />
        </motion.div>
      </header>
    </div>
  );
}

export default App;
