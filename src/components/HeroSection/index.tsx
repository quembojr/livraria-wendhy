'use client';
import React, { useState } from 'react';
import { Star, Calendar, BookOpen, Award, ArrowDown, RotateCcw } from 'lucide-react';
import styles from './styles.module.css';

const HeroSection: React.FC = () => {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleFlip = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <section className={styles.hero}>
      {/* Formas Decorativas Minimalistas */}
      <div className={styles.floatingShapes}>
        <div className={styles.shape1}></div>
        <div className={styles.shape2}></div>
        <div className={styles.shape3}></div>
        <div className={styles.shape4}></div>
      </div>

      <div className={styles.container}>
        <div className={styles.content}>
          {/* Badge */}
          <div className={styles.badge}>
            <Star size={16} color='#C9A84A' />
            <span>Lançamento Exclusivo</span>
          </div>

          {/* Título Principal */}
          <h1 className={styles.title}>
            <span className={styles.titleMain}>Wendhy She Cat</span>
          </h1>

          {/* Descrição Curta */}
          <p className={styles.description}>
            Talentosa, inspiradora, única. Wendhy She Cat apresenta sua
            <strong> primeira obra literária</strong> em um evento inesquecível.
          </p>

          {/* Destaques com Ícones */}
          <div className={styles.highlights}>
            <div className={styles.highlightItem}>
              <BookOpen size={20} />
              <span>Edição Limitada</span>
            </div>
            <div className={styles.highlightItem}>
              <Award size={20} color='#C9A84A' />
              <span>Exemplar Autografado</span>
            </div>
            <div className={styles.highlightItem}>
              <Calendar size={20} />
              <span>Evento Exclusivo</span>
            </div>
          </div>

          {/* CTA Principal */}
          <div className={styles.ctaSection}>
            <button className={styles.ctaButton}>
              <BookOpen size={20} />
              <span>Reservar Agora</span>
            </button>
          </div>
        </div>

        {/* Lado do Livro com Elementos Visuais */}
        <div className={styles.visualSection}>
          {/* Book Container */}
          <div className={styles.bookContainer}>
            <div className={`${styles.book} ${isFlipped ? styles.flipped : ''}`}>
              {/* Frente do Livro */}
              <div className={styles.bookFront}>
                <div className={styles.bookCoverFront}>
                  <div className={styles.bookContent}>
                    <Star className={styles.bookStar} />
                    <div className={styles.bookTitle}>Wendhy</div>
                    <div className={styles.bookSubtitle}>She Cat</div>
                  </div>
                </div>
                <div className={styles.bookGlow}></div>
              </div>

              {/* Verso do Livro */}
              <div className={styles.bookBack}>
                <div className={styles.bookCoverBack}>
                  <div className={styles.bookContentBack}>
                    <div className={styles.backTitle}>Edição Especial</div>
                    <div className={styles.backDescription}>
                      Lançamento Exclusivo
                    </div>
                    <div className={styles.backDetails}>
                      <div className={styles.detailItem}>
                        <Star size={16} />
                        <span>Capadura Premium</span>
                      </div>
                      <div className={styles.detailItem}>
                        <Award size={16} />
                        <span>Assinado pela Autora</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className={styles.bookGlow}></div>
              </div>
            </div>

            {/* Botão de Virar */}
            <button className={styles.flipButton} onClick={handleFlip}>
              <RotateCcw size={18} />
              <span>{isFlipped ? 'Ver Frente' : 'Ver Verso'}</span>
            </button>
          </div>

          {/* Elementos Flutuantes */}
          <div className={styles.floatingElements}>
            <div className={styles.floatingStar}>
              <Star size={24} />
            </div>
            <div className={styles.floatingAward}>
              <Award size={20} />
            </div>
            <div className={styles.floatingHeart}>
              <BookOpen size={18} />
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className={styles.scrollIndicator}>
        <ArrowDown size={20} />
      </div>
    </section>
  );
};

export default HeroSection;