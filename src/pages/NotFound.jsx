import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

export function NotFound() {
  
  useEffect(() => {
    document.title = 'Página Não Encontrada | UniStágio';
  }, []);

  return (
    <div style={{ 
      display: 'flex', 
      flexDirection: 'column', 
      alignItems: 'center', 
      justifyContent: 'center', 
      height: '100vh', 
      textAlign: 'center',
      backgroundColor: '#f8f9fa'
    }}>
      <h1 style={{ fontSize: '6rem', color: '#ED1C24', margin: '0' }}>404</h1>
      <h2 style={{ fontSize: '2rem', color: '#333', marginBottom: '1rem' }}>Ops! Página não encontrada.</h2>
      <p style={{ color: '#666', marginBottom: '2rem', fontSize: '1.1rem' }}>
        Parece que a página que está a procurar não existe ou foi movida.
      </p>
      
      <Link 
        to="/login" 
        style={{ 
          padding: '0.8rem 1.5rem', 
          backgroundColor: '#ED1C24', 
          color: '#fff', 
          textDecoration: 'none', 
          borderRadius: '6px', 
          fontWeight: 'bold',
          transition: '0.3s'
        }}
      >
        Voltar para o Início
      </Link>
    </div>
  );
}