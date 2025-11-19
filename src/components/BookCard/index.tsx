import React from 'react';

interface BookCardProps {
  title: string;
  author: string;
  price: number;
  imageUrl: string;
  category: string;
}

const BookCard: React.FC<BookCardProps> = ({ title, author, price, imageUrl, category }) => {
  return (
    <div className="card" style={{ maxWidth: '300px', margin: '0 auto' }}>
      <div 
        style={{
          height: '200px',
          background: `url(${imageUrl}) center/cover`,
          position: 'relative'
        }}
      >
        <span 
          style={{
            position: 'absolute',
            top: '12px',
            left: '12px',
            background: 'var(--color-accent-gold)',
            color: 'var(--color-neutral-900)',
            padding: '4px 12px',
            borderRadius: 'var(--border-radius-sm)',
            fontSize: '0.875rem',
            fontWeight: 600,
          }}
        >
          {category}
        </span>
      </div>
      <div style={{ padding: '1.5rem' }}>
        <h3 
          style={{
            fontFamily: 'var(--font-serif)',
            fontSize: '1.25rem',
            marginBottom: '0.5rem',
            color: 'var(--color-neutral-800)',
            lineHeight: 1.4,
          }}
        >
          {title}
        </h3>
        <p 
          style={{
            color: 'var(--color-primary-600)',
            marginBottom: '1rem',
            fontSize: '0.875rem',
            fontWeight: 500,
          }}
        >
          {author}
        </p>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <span 
            style={{
              color: 'var(--color-primary-700)',
              fontSize: '1.5rem',
              fontWeight: 700,
            }}
          >
            R$ {price.toFixed(2)}
          </span>
          <button className="btn btn-primary" style={{ padding: '8px 20px', fontSize: '14px' }}>
            Comprar
          </button>
        </div>
      </div>
    </div>
  );
};

export default BookCard;