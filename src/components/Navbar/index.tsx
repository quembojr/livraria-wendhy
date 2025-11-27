'use client';
import React, { useState } from 'react';
import { Menu, X, BookOpen, User } from 'lucide-react';
import styles from './Navbar.module.css';
import { useRouter } from 'next/navigation';

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);



  const router = useRouter();

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  const handleLogin = () => {
    // Aqui você pode implementar a lógica de login
    router.push('#');
    console.log('Login clicked');
    // Redirecionar para página de login ou abrir modal
  };

  return (
    <nav className={styles.navbar}>
      <div className={styles.container}>

        {/* Logo */}
        <div className={styles.logo}>
          <BookOpen size={20} className={styles.logoIcon} />
          <div className={styles.logoText}>
            <span>Whendy She Cat</span>
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
          {/* <button
            onClick={() => scrollToSection('conversao')}
            className={styles.reserveButton}
          >
            Reservar
          </button> */}
          <button
            onClick={() => window.open("https://wa.me/258858118089?text=Quero%20reservar%20o%20meu%20livro%20agora!", "_blank")}
            className={styles.reserveButton}
          >
            Reservar
          </button>
          <button
            onClick={handleLogin}
            className={styles.loginButton}
          >
            <User size={16} />
            <span>Entrar</span>
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
            onClick={() => window.open("https://wa.me/258858118089?text=Quero%20reservar%20o%20meu%20livro%20agora!", "_blank")}

            className={styles.mobileReserveButton}
          >
            Reservar Agora
          </button>
          {/* <button 

            onClick={() => scrollToSection('conversao')} 
            className={styles.mobileReserveButton}
          >
            Reservar Agora
          </button> */}
          <button
            onClick={handleLogin}
            className={styles.mobileLoginButton}
          >
            <User size={16} />
            <span>Entrar na Minha Conta</span>
          </button>
        </div>

      </div>
    </nav>
  );
};

export default Navbar;