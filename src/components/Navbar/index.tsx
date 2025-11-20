'use client';
import React, { useState } from 'react';
import { Menu, X, BookOpen } from 'lucide-react';
import styles from './Navbar.module.css';

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <nav className={styles.navbar}>
      <div className={styles.container}>
        
        {/* Logo */}
        <div className={styles.logo}>
          <BookOpen size={20} className={styles.logoIcon} />
          <div className={styles.logoText}>
            <span>Wendhy She Cat</span>
            <span className={styles.logoSubtitle}>Livraria</span>
          </div>
        </div>

        {/* Desktop Menu */}
        <div className={styles.menu}>
          <button 
            onClick={() => scrollToSection('inicio')} 
            className={styles.menuItem}
          >
            Início
          </button>
          <button 
            onClick={() => scrollToSection('livro')} 
            className={styles.menuItem}
          >
            O Livro
          </button>
          <button 
            onClick={() => scrollToSection('autora')} 
            className={styles.menuItem}
          >
            A Autora
          </button>
          <button 
            onClick={() => scrollToSection('conversao')} 
            className={styles.reserveButton}
          >
            Reservar
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className={styles.mobileToggle}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Menu"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Mobile Menu */}
        <div className={`${styles.mobileMenu} ${isMenuOpen ? styles.mobileMenuOpen : ''}`}>
          <button 
            onClick={() => scrollToSection('inicio')} 
            className={styles.mobileMenuItem}
          >
            Início
          </button>
          <button 
            onClick={() => scrollToSection('livro')} 
            className={styles.mobileMenuItem}
          >
            O Livro
          </button>
          <button 
            onClick={() => scrollToSection('autora')} 
            className={styles.mobileMenuItem}
          >
            A Autora
          </button>
          <button 
            onClick={() => scrollToSection('conversao')} 
            className={styles.mobileReserveButton}
          >
            Reservar Agora
          </button>
        </div>

      </div>
    </nav>
  );
};

export default Navbar;