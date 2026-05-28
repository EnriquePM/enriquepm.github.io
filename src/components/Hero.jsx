import React from 'react';

export default function Hero() {
  return (
    <div style={{ padding: '2rem', textAlign: 'center', backgroundColor: '#f3f4f6', borderRadius: '8px' }}>
      <h1>¡Hola! Soy Enrique</h1>
      <p>Desarrollador web y creador de soluciones increíbles.</p>
      <button onClick={() => alert('¡Funciona el botón de React!')}>
        Contactar
      </button>
    </div>
  );
}