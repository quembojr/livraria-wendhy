'use client';
import React, { useState } from 'react';
import { Star, Calendar, BookOpen, Award, ArrowDown } from 'lucide-react';
import styles from './styles.module.css';

const HeroSection: React.FC = () => {
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
          {/* Container da Imagem dos Dois Livros */}
          <div className={styles.booksContainer}>
            <div className={styles.booksImageWrapper}>
              <img 
                src="/images/capa.png" 
                alt="Livro Wendhy She Cat - Frente e Verso"
                className={styles.booksImage}
              />
              <div className={styles.booksGlow}></div>
            </div>
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