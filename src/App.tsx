import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import ContactCard from './components/ContactCard';

function App() {
  return (
    <Router>
      <Routes>
        {/* Ruta principal que muestra directamente el perfil de Jesus Freites */}
        <Route path="/" element={<ContactCard defaultSlug="jesus-freites" />} />
        {/* Mantener las rutas existentes para compatibilidad */}
        <Route path="/id/:slug" element={<ContactCard />} />
        <Route path="*" element={<Navigate to="/id/jesus-freites" replace />} />
      </Routes>
    </Router>
  );
}

export default App;