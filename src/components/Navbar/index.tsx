'use client';
import React, { useState } from 'react';
import styles from './Navbar.module.css';

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className={styles.navbar}>
      <div className={styles.container}>
        {/* Logo */}
        <div className={styles.logo}>
          <span className={styles.logoText}>Wendhy She Cat</span>
          <span className={styles.logoSubtitle}>Livraria Virtual</span>
        </div>

        {/* Desktop Menu */}
        <div className={styles.menu}>
          <a href="#inicio" className={styles.menuItem}>Início</a>
          <a href="#livro" className={styles.menuItem}>O Livro</a>
          <a href="#autora" className={styles.menuItem}>A Autora</a>
          <a href="#evento" className={styles.menuItem}>Evento</a>
          <button className={styles.reserveButton}>
            Reservar Exemplar
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className={styles.mobileToggle}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        {/* Mobile Menu */}
        <div className={`${styles.mobileMenu} ${isMenuOpen ? styles.mobileMenuOpen : ''}`}>
          <a href="#inicio" className={styles.mobileMenuItem}>Início</a>
          <a href="#livro" className={styles.mobileMenuItem}>O Livro</a>
          <a href="#autora" className={styles.mobileMenuItem}>A Autora</a>
          <a href="#evento" className={styles.mobileMenuItem}>Evento</a>
          <button className={styles.mobileReserveButton}>
            Reservar Exemplar
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;