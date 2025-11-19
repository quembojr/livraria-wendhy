import React from 'react';

const FeaturedSection: React.FC = () => {
  return (
    <section style={{ padding: '80px 0', background: 'var(--color-neutral-50)' }}>
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
          <h2 
            style={{
              fontFamily: 'var(--font-serif)',
              fontSize: '2.5rem',
              color: 'var(--color-primary-800)',
              marginBottom: '1rem',
            }}
          >
            Destaques do Mês
          </h2>
          <p style={{ color: 'var(--color-neutral-600)', fontSize: '1.125rem' }}>
            Livros selecionados com cuidado para sua próxima grande leitura
          </p>
        </div>
        
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', 
          gap: '2rem',
          maxWidth: '1200px',
          margin: '0 auto'
        }}>
          {/* Os BookCards seriam inseridos aqui */}
        </div>
      </div>
    </section>
  );
};

export default FeaturedSection;